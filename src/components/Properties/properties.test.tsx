import React from 'react'
import Properties from './index'
import {render, screen} from '@testing-library/react'
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
  const products: ISearchProduct[] = [
    {
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
    },
    {
      _id: 'welcome',
      address: 'Main st',
      area: 41,
      city: 'Toronto',
      date: 123456789,
      price: 124,
      baths: 3,
      beds: 4,
      property: 'house',
      type: 'rent',
    },
  ]

  const onDelete = jest.fn()

  beforeEach(() => {
    defineWindowForTest()
    onDelete.mockClear()
    render(<Properties products={products} onDelete={onDelete} />)
  })

  it('should render correctly both', async () => {
    expect.assertions(2)
    const firstAddress = await screen.findByText(products[0].address)
    const secondAddress = await screen.findByText(products[1].address)

    expect(firstAddress).toBeDefined()
    expect(secondAddress).toBeDefined()
  })
})
