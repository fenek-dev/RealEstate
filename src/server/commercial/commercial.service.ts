import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {User, UserDocument} from '../auth/schema/user.schema'
import {CloudinaryService} from '../cloudinary/cloudinary.service'
import {ISearchBody} from '../living/types'
import {CreateCommercialDto} from './dto/create-commercial.dto'
import {UpdateCommercialDto} from './dto/update-commercial.dto'
import {Commercial, CommercialDocument} from './schema/commercial.schema'

@Injectable()
export class CommercialService {
  constructor(
    @InjectModel(Commercial.name)
    private commercialModel: Model<CommercialDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(dto: CreateCommercialDto) {
    const photos = await Promise.all(
      dto.photos.map(
        async (item): Promise<string> =>
          (
            await this.cloudinaryService.uploadImage(item)
          ).url,
      ),
    )
    const commercial = await this.commercialModel.create({...dto, photos})
    await commercial.save()
    await this.userModel.findByIdAndUpdate(commercial.author, {
      $push: {products: commercial._id},
    })
    return commercial
  }

  async getAll() {
    return await this.commercialModel.find().exec()
  }

  async findOne(id: string) {
    return await this.commercialModel
      .findById(id)
      .populate('region')
      .populate('author')
      .populate('layout')
      .populate('category')
      .exec()
  }

  async search(body: ISearchBody) {
    const {baths, beds, property, type, city} = body

    const regCity = new RegExp(city, 'ig')
    const max = +body.max || Number.MAX_VALUE
    const min = +body.min || Number.MIN_VALUE

    const condidate = await this.commercialModel
      .where('type', type)
      .where('city', regCity)
      .where('price')
      .lte(max)
      .gte(min)
      .where('property', property)
      .where('baths', baths)
      .where('beds', beds)
      .exec()

    return condidate
  }

  async update(id: string, updateCommercialDto: UpdateCommercialDto) {
    return await this.commercialModel
      .findByIdAndUpdate(id, updateCommercialDto)
      .exec()
  }

  async remove(id: string) {
    const result = await this.commercialModel.findByIdAndDelete(id).exec()
    return result._id
  }
}
