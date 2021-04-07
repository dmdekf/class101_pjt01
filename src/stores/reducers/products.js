import PRODUCTS from "../../data/productItems"

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.id === "id" ),
};

export default function ProductListApp (state = initialState, action) {
    return state;
}