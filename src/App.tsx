import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/home";
import Details from "./pages/details";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    box-sizing: border-box;
  }
  
  body {
    background: #f2f3f8;
    margin: 0;
    padding: 20px;
    font-family: Arial;
    font-size: 12px;
  }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/:id" component={Details} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
