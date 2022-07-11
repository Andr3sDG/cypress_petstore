/// <reference types="cypress"/>

import { onPetRequest } from "../support/api_calls/pet"
import { onStoreRequest } from "../support/api_calls/store"
import { onUserRequest } from "../support/api_calls/user"

describe('Petstore test suite', () => {

  beforeEach('User logs in the app', () => {
    onUserRequest.userLogin('UserAd2', 'user1232')
  })

  it('User creates a new pet then search the added pet by id', () => {
    onPetRequest.savePet('POST')
    onPetRequest.removeOrGetPetById('GET', 1001)
  })

  it('User finds pets by status and tags', () => {
    onPetRequest.findPetBy('status', 'available')
    onPetRequest.findPetBy('tags', 'tag3')
  })

  it('User creates a list of users', () => {
    onUserRequest.createListOfUsers()
    onUserRequest.getOrDeleteUserByUsername('GET', 'UserAd1')
    onUserRequest.getOrDeleteUserByUsername('GET', 'UserAd2')
  })

  it('User updates his information', () => {
    onUserRequest.updateUserByUsername('UserAd1')
    onUserRequest.getOrDeleteUserByUsername('GET', 'UserAd3')
  })

  it('User deletes user by his username', () => {
    onUserRequest.getOrDeleteUserByUsername('DELETE', 'UserAd3')
  })

  it('User creates a new order and search for it', () => {
    onStoreRequest.placeNewOrder()
    onStoreRequest.getOrDeleteOrder('GET', 1001)
  })

  it('User lists the inventory then search for an order by id to delete it', () => {
    onStoreRequest.getInventory()
    onStoreRequest.getOrDeleteOrder('GET', 1001)
    onStoreRequest.getOrDeleteOrder('DELETE', 1001)
  })

  afterEach('User exits from the app', () => {
    onUserRequest.userLogout()
  })

})