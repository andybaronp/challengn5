

export const cartReducer = (state, action) => {
    switch (action.type) {
        case '[Cart] - Update products in cart ':
            return {
                ...state,
                //cart...
                cart: [...action.payload]

            }
        case '[Cart] - Remove product in cart ': 


            return {
                ...state,
                cart: action.payload
            }

        case '[Cart] - LoadCart from storage ':
            return {
                ...state,
                cart: [...action.payload]
            }

        case '[Cart] - Empty cart ':
            return {
                ...state,
                //cart...
                cart: []

            }
        default:
            return state
    }
}
