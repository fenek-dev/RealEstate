import {createContext, Dispatch, SetStateAction} from 'react'
import {User} from '../server/user/user.model'

export type UserContextType = {
  user: Partial<User>
  setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContextType>({
  user: {
    _id: null,
    email: null,
    name: null,
    products: [],
    type: null,
    phone: null,
    photo: null,
  },
  setUser: null,
})
