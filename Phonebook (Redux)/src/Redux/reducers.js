import shortid from "short-id";
import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from "./actionTypes";


const initialState = {
    contactBook: [
        {
            id: shortid.generate(),
            name: "Police",
            phone: "100",
            email: "CityPolice@gmail.com"
        },
        {
            id: shortid.generate(),
            name: "Ambulance",
            phone: "102",
            email: "CityHospital@gmail.com"
        },
        {
            id: shortid.generate(),
            name: "Fire Brigade",
            phone: "101",
            email: "FireStation@gmail.com"
        },
        {
            id: shortid.generate(),
            name: "Balance",
            phone: "121",
        },
        {
            id: shortid.generate(),
            name: "Women Heplline",
            phone: "1091",
            email: "womenSafetyIndia@gmail.com"
        },
        {
            id: shortid.generate(),
            name: "Railway Enquiry",
            phone: "139",
            email: "IndianRail.gov@gmail.com"
        },

    ]
}

export const reducer = (state = initialState, { type, payload }) => {
    // console.log(payload)
    switch (type) {

        case CREATE_CONTACT:
            return { ...state, contactBook: [...state.contactBook, payload] }

        case GET_CONTACT:
            let arr = state.contactBook.filter(contact => contact.id === payload);
            return { ...state, contact: arr[0] }

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contactBook.map(contact => contact.id === payload.id ? payload : contact)
            }

        case DELETE_CONTACT:
            return {
                ...state,
                contactBook: state.contactBook.filter(contact => contact.id !== payload)
            }
        default:
            return state
    }
}
