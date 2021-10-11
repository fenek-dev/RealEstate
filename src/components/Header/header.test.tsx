import React from 'react'
import Header from './index'
import {render, fireEvent, screen} from '@testing-library/react'
import {defineWindowForTest} from '../../utils/test-utils'

describe('Header component', () => {
  const userName = 'HelloUser'
  const onLogout = jest.fn()
  beforeEach(() => {
    defineWindowForTest()
    onLogout.mockClear()
    render(<Header userName={userName} onLogout={onLogout} />)
  })

  it('should render correctly', async () => {
    expect.assertions(2)
    const name = await screen.findByText(userName)

    fireEvent.mouseOver(name)
    const logoutBtn = await screen.findByText('Logout')

    expect(logoutBtn).toBeDefined()
    expect(name).toBe(name)
  })

  it('logout button should work', async () => {
    expect.assertions(2)
    const name = await screen.findByText(userName)

    fireEvent.mouseOver(name)
    const logoutBtn = await screen.findByText('Logout')

    expect(logoutBtn).toBeDefined()

    fireEvent.click(logoutBtn)

    expect(onLogout).toHaveBeenCalledTimes(1)
  })
})
