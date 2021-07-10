import React from 'react'
import {ISearchProduct} from '../../types'
import SearchCard from '../SearchCard'
import styles from '../../styles/search.module.scss'
import {Empty, Typography} from 'antd'
import {Product} from '../../server/product/product.model'

const {Paragraph} = Typography

interface IProperties {
  products: ISearchProduct[] | Product[] | any
  onDelete: (_id: string) => void
}

const Properties: React.FC<IProperties> = ({products, onDelete}) => {
  return (
    <>
      <Paragraph>
        {products?.length} object{products?.length === 1 ? '' : 's'}
      </Paragraph>
      <section className={styles.result}>
        {products?.length > 0 ? (
          products.map(item => (
            <SearchCard
              _id={item._id}
              key={item.date}
              address={item.address}
              photos={item.photos}
              area={item.area}
              baths={item.baths}
              beds={item.beds}
              city={item.city}
              price={item.price}
              date={item.date}
              onDelete={onDelete}
            />
          ))
        ) : (
          <Empty />
        )}
      </section>
    </>
  )
}

export default Properties
