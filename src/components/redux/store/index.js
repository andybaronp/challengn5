import { combineReducers, createStore } from "redux";

 

const INIT_STATE_PRODUCT = {
    POKEMON: 11,
    yoshi: 32
}

const INIT_STATE_CONSOLE = {
    ps5: 30,
    swicht: 454
}

const BUY_PRODUCT = 'BUY_PRODUCT'
const RETURN_PRODUCT = 'RETURN_PRODUCT'


const BUY_YOSHI = 'BUY_YOSHI'
const RETURN_YOSHI = 'RETURN_YOSHI'

const BUY_CONSOLE_ps5 = 'BUY_CONSOLE_ps5'
const RETURN_CONSOLE_ps5 = 'RETURN_CONSOLE_ps5'
const buy_product_action = (cantidad) => {
    return {
        type: BUY_PRODUCT,
        payload: cantidad
    }
}

const return_product_action = (cantidad) => {
    return {
        type: RETURN_PRODUCT,
        payload: cantidad
    }
}
const buy_yoshi_action = (cantidad) => {
    return {
        type: BUY_YOSHI,
        payload: cantidad
    }
}

const return_yoshi_action = (cantidad) => {
    return {
        type: RETURN_YOSHI,
        payload: cantidad
    }
}
const product_reducer = (state = INIT_STATE_PRODUCT, action) => {
    switch (action.type) {
        case 'BUY_PRODUCT':
            return {
                ...state,
                total: state.POKEMON - action.payload
            }
        case 'RETURN_PRODUCT':
            return {
                ...state,
                total: state.POKEMON + action.payload
            }
        case 'BUY_YOSHI':
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            }
        
        case 'RETURN_YOSHI':
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            }
        
        default:
            return state
    }
}

const console_reducer = (state = INIT_STATE_CONSOLE, action) => {
    switch (action.type) {
        case 'BUY_CONSOLE_ps5':
            return {
                ...state,
                ps5: state.ps5 - action.payload
            }
        case 'RETURN_CONSOLE_ps5':
            return {
                ...state,
                ps5: state.ps5 + action.payload
            }
        
        default:
            return state
    }
}

const return_ps5_action = (cantidad) => {
    return {
        type: RETURN_CONSOLE_ps5,
        payload: cantidad
    }
}
const buy_psy_action = (cantidad) => {
    return {
        type: BUY_CONSOLE_ps5,
        payload: cantidad
    }
}



const rootReducers = combineReducers({
    console_reducer,
    product_reducer
})

const store = createStore( rootReducers )
store.subscribe(() => {
    console.log('camvbios', store.getState());
})
console.log('Inicial', store.getState());


// store.dispatch(buy_product_action(3))
// store.dispatch(return_product_action(3))

// store.dispatch(buy_yoshi_action(2))
// store.dispatch(return_yoshi_action(1))
store.dispatch(buy_psy_action(3))
store.dispatch(return_ps5_action(1))


export default store