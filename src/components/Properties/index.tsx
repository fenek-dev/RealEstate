import React, { memo } from 'react'
import {ISearchProduct} from '../../types'
import {SearchCard} from '../SearchCard'
import styles from '../../styles/search.module.scss'
import {Empty, Typography} from 'antd'

const {Paragraph} = Typography

interface IProperties {
  products: ISearchProduct[]
  onDelete: (_id: string) => void
}

export const Properties: React.FC<IProperties> = memo(({products, onDelete}) => {
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
              key={item._id}
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
})
