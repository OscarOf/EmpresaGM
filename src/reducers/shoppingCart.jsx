import TYPES from "./actionTypes";

export const productsInitialState={
    products: [
        {
            "id":1,
            "name":"Aire Acondicionado"
        },
        {
            "id":2,
            "name":"Equipos Industriales"
        },
        {
            "id":3,
            "name":"Hidrobombas"
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