import { createStackNavigator } from "react-navigation-stack"
import { createStore } from "redux"

import ProductListApp from "./reducers/products"

const store = createStore({products:ProductListApp})

export default store