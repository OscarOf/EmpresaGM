import TYPES from "./actionTypes";

export const productsInitialState={
    products: [
        {
            "id":1,
            "name":"Aire Acondicionado"
        },
        {
            "id":2,
            "name":"Minisplit"
        },
        {
            "id":3,
            "name":"Cassette"
        },
        {
            "id":4,
            "name":"Piso Techo"
        },
        {
            "id":5,
            "name":"Aire Centrales"
        },
        {
            "id":6,
            "name":"Motobombas"
        },
        {
            "id":7,
            "name":"Hidroflops"
        },
        {
            "id":8,
            "name":"Automatización"
        }

    ],
    cart:[]    
}

export const reducerCart =(state, action) =>{
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newProduct = state.products.find((product)=> product.id === action.payload)
            return{
                ...state,
                cart: [...state.cart, newProduct]
            }
        }
        case TYPES.DELETE_PRODUCT_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        }
        case TYPES.DELETE_ALL_FROM_CART:{
            return productsInitialState;
        }
        default:
            return state;
    }

    throw Error("Unknow action: "+action.type)
}