import React from 'react'
import {ISearchProduct} from '../../types'
import SearchCard from '../SearchCard'
import styles from '../../styles/search.module.scss'

interface IProperties {
  products: ISearchProduct[]
}

const Properties: React.FC<IProperties> = ({products}) => {
  return (
    <section className={styles.result}>
      {products.map(item => (
        <SearchCard
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
      ))}
    </section>
  )
}

export default Properties
