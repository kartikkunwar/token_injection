import * as types from "./actiontype"
const intialstate = {
    product: [],
    singleproduct: [],
    token: "",
    isLoading: false,
    isError: false,
    logged: false
}

export const reducer = (state = intialstate, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_REQUEST_PRODUCT:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_SUCCESS_PRODCUT:
            return {
                ...state,
                isLoading: false,
                product: payload
            }

        case types.GET_FAIL_PRODUCT:
            return {
                ...state,
                isError: true
            }
        case types.GET_REQUEST_TOKEN:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_SUCCESS_TOKEN:
            return {
                ...state,
                isLoading: false,
                token: payload,
                logged: true
            }

        case types.GET_FAIL_TOKEN:
            return {
                ...state,
                isError: true
            }
        case types.GET_SUCCESS_SINGLE:
            return {
                ...state,
                isLoading: false,
                singleproduct: payload,
            }
        default:
            return state;
    }
}