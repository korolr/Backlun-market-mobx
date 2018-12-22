import React, { Component } from "react"
import { Login } from "../components/Login"
import { observer, inject } from "mobx-react"
import { ILoginStore } from "../stores/loginStore"
import { RouterStore } from 'mobx-react-router';
import { withRouter } from "react-router-dom";

interface Props {
  logStore?: ILoginStore;
  routing: RouterStore;
}

@inject("logStore", "routing")
@observer
class LoginContainer extends Component<Props> {
  render() {
    const { loginStart, isLogin, loginReq, error } = this.props.logStore!;
    const { goBack } = this.props.routing!;
    return (
      <div>
        <Login
          login={loginStart}
          error={error}
          isLogin={isLogin}
          loginReq={loginReq}
          push={goBack}
        />
      </div>
    )
  }
}

export default LoginContainer
