import {Injectable} from '@nestjs/common'
import {UploadApiErrorResponse, UploadApiResponse, v2} from 'cloudinary'
import toStream from 'buffer-to-stream'

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: any,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) =>
      v2.uploader.upload(file, {}, (err, result) => {
        if (err) return reject(err)
        resolve(result)
      }),
    )
  }
}
