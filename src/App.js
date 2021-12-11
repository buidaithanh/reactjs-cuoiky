import Products from "./component/Products/Products";
import ProductDetail from "./component/Products/ProductDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import CartProducts from "./component/CartProducts/CartProducts";
import Header from "./component/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <CartProducts />
        </Route>
      </Switch>
    </>
  );
}

export default App;
