import {gql} from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation SignupUser($input: CreateUserInput!) {
    createUser(payload: $input) {
      _id
      name
      type
      phone
      token
    }
  }
`

export const LOGIN_USER = gql`
  query LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      name
    }
  }
`

export const TOKEN_USER = gql`
  query TokenUser {
    token {
      _id
      name
      type
      email
    }
  }
`

export const FULL_USER = gql`
  query GetFullUser($id: String!) {
    findUserById(_id: $id) {
      _id
      name
      type
      email
      photo
      phone
      products(populate: true) {
        _id
        address
        area
        photos
        property
        price
        description
        date
        type
        city
        beds
        baths
      }
    }
  }
`

export const EDIT_USER = gql`
  mutation EditUser($input: UpdateUserInput!) {
    updateUser(payload: $input) {
      name
      type
      email
      photo
      phone
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(payload: $input) {
      address
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    getProductById(_id: $id) {
      address
      area
      photos
      property
      price
      description
      date
      tax
      type
      city
      beds
      baths
      region(populate: true) {
        name
        population
        averageCost
        shopCenters
        hospitals
        parks
      }
      layout(populate: true) {
        name
        minArea
        maxArea
        rooms
        photos
      }
      category(populate: true) {
        name
        area
        year
        floors
        class
        type
        parking
      }
    }
  }
`
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(_id: $id) {
      _id
    }
  }
`
export const SEARCH_PRODUCT = gql`
  query SearchProduct($input: SearchProductInput!) {
    searchProduct(payload: $input) {
      _id
      address
      area
      photos
      property
      price
      description
      date
      type
      city
      beds
      baths
    }
  }
`
