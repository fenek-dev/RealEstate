import React from 'react'
import {ISearchProduct} from '../../types'
import SearchCard from '../SearchCard'
import styles from '../../styles/search.module.scss'
import {Empty} from 'antd'

interface IProperties {
  products: ISearchProduct[]
}

const Properties: React.FC<IProperties> = ({products}) => {
  return (
    <section className={styles.result}>
      {products.length > 0 ? (
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
          />
        ))
      ) : (
        <Empty />
      )}
    </section>
  )
}

export default Properties
