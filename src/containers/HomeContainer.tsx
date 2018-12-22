import React, { Component } from "react"
import { Home } from "../components/Home"
import { observer, inject } from "mobx-react"
import { IBasketStore } from "../stores/basketStore"
import { ILoginStore } from "../stores/loginStore"

interface Props {
  basStore?: IBasketStore;
  logStore?: ILoginStore;
  match: {
    params: {
      number: number,
    },
  };
}

@inject("basStore", "logStore")
@observer
class HomeContainer extends Component<Props> {
  render() {
    const { isLogin } = this.props.logStore!;
    const { data, getBasket, updateBasket } = this.props.basStore!;
    return (
      <div>
        <Home
          basket={data}
          getBasket={getBasket}
          login={isLogin}
          updateBasket={updateBasket}
        />
      </div>
    )
  }
}


export default HomeContainer
