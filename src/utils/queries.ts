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
