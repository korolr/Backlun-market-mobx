import React, { Component } from "react"
import { Login } from "../components/Login"
import { observer, inject } from "mobx-react"
import { ILoginStore } from "../stores/loginStore"

interface Props {
  logStore?: ILoginStore;
}

@inject("logStore")
@observer
class LoginContainer extends Component<Props> {
  render() {
    const { loginStart, isLogin, loginReq, error } = this.props.logStore!;
    return (
      <div>
        <Login
          login={loginStart}
          error={error}
          isLogin={isLogin}
          loginReq={loginReq}
        />
      </div>
    )
  }
}

export default LoginContainer
