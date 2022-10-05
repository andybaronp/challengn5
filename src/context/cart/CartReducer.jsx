

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

                cart: state.cart.filter(product => !(product.id === action.payload.id))
            }
        case '[Cart] - LoadCart from storage ':
            return {
                ...state,
                isLoaded: true,

                cart: [...action.payload]
            }
        default:
            return state
    }
}
