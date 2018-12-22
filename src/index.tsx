import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import { store, persistor } from "./store/configureStore"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { Router } from "react-router-dom"
import history from "./history"
import * as t from "mobx-react"
import { stores } from "./stores"

ReactDOM.render(
  <BrowserRouter>
    <t.Provider {...stores}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </t.Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
