import React from 'react'
import SearchCard from './index'
import {render, fireEvent, screen} from '@testing-library/react'
import {defineWindowForTest} from '../../utils/test-utils'
import {ISearchProduct} from '../../types'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/profile',
  }),
}))

describe('SearchCard component', () => {
  const product: ISearchProduct = {
    _id: 'hello',
    address: 'Red Square',
    area: 42,
    city: 'Moscow',
    date: 123456789,
    price: 123,
    baths: 1,
    beds: 2,
    property: 'house',
    type: 'rent',
  }

  const onDelete = jest.fn()

  beforeEach(() => {
    defineWindowForTest()
    onDelete.mockClear()
    render(<SearchCard {...product} onDelete={onDelete} />)
  })

  it('should render correctly', async () => {
    expect.assertions(6)
    const address = await screen.findByText(product.address)
    const area = await screen.findByText(product.area + ' sq')
    const city = await screen.findByText(product.city)
    const price = await screen.findByText('$' + product.price)
    const baths = await screen.findByText(product.baths + ' bt')
    const beds = await screen.findByText(product.beds + ' bd')

    expect(address).toBeDefined()
    expect(area).toBeDefined()
    expect(city).toBeDefined()
    expect(price).toBeDefined()
    expect(baths).toBeDefined()
    expect(beds).toBeDefined()
  })

  it('delete button should work', async () => {
    expect.assertions(1)
    const deleteBtn = await screen.findByRole('button')

    fireEvent.click(deleteBtn)

    expect(onDelete).toHaveBeenCalledTimes(1)
  })
})
