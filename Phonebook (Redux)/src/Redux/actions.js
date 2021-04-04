import { CREATE_CONTACT, UPDATE_CONTACT, GET_CONTACT, DELETE_CONTACT } from "./actionTypes";

export const createContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})