

export const productsReducer = (state, action) => {
    switch (action.type) {

        case '[Product] - LoadCart from storage ':
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state
    }
}
