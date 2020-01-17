import React from "react";
import { Provider } from "react-redux";
import Wrapper from "./components/wrapper";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Wrapper />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
