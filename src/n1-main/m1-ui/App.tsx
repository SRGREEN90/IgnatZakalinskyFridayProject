import React from 'react';
import './App.css';
import Main from './Main';
import {Provider} from "react-redux";
import store from "../m2-bll/ReduxStore";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <HashRouter>
                <Main />
            </HashRouter>
        </Provider>

    </div>
  );
}

export default App;
