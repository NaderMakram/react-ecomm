import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <PrivateRoute exact path="/checkout" children={<Checkout />} />
          <Route exact path="*" component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
