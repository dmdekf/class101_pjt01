import { createStackNavigator } from "react-navigation-stack"
import { createStore } from "redux"

import ProductListApp from "./reducers/products"

const store = createStore(ProductListApp)

export default store