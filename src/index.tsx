import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import { Router } from "react-router-dom"
import history from "./history"
import * as t from "mobx-react"
import { RootStore } from "./stores"
import { createBrowserHistory } from "history"
import { syncHistoryWithStore } from "mobx-react-router"

const stores = new RootStore()

const historys = syncHistoryWithStore(createBrowserHistory(), stores.routing)
ReactDOM.render(
  <BrowserRouter>
    <t.Provider {...stores}>
      <Router history={historys}>
        <App />
      </Router>
    </t.Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
