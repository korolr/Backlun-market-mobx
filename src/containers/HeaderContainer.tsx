import React, { Component } from "react"
import { Header } from "../components/Header"
import { observer, inject } from "mobx-react"
import { IBasketStore } from "../stores/basketStore"
import { ILoginStore } from "../stores/loginStore"

interface Props {
  basStore?: IBasketStore;
  logStore?: ILoginStore;
  match?: {
    params: {
      number: number,
    },
  };
}

@inject("basStore", "logStore")
@observer
class HeadContainer extends Component<Props> {
  render() {
    const { logOut, isLogin, token } = this.props.logStore!;
    const { data } = this.props.basStore!;
    return <Header loginOut={logOut} isLogin={isLogin} basket={data} token={token}/>
  }
}

export default HeadContainer
