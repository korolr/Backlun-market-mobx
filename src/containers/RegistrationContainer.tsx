import React, { Component } from "react"
import { Registration } from "../components/Registration"

import { observer, inject } from "mobx-react"
import { IRegistrationStore } from "../stores/registrationStore"
import { ILoginStore } from "../stores/loginStore"

interface Props {
  regStore?: IRegistrationStore;
  logStore?: ILoginStore;
}

@inject("regStore", "logStore")
@observer
class RegistrationContainer extends Component<Props> {
  render() {
    const {
      registrationStart,
      error,
      success,
      registrationReq,
    } = this.props.regStore!
    const { isLogin } = this.props.logStore!;
    return (
      <div>
        <Registration
          registration={registrationStart}
          error={error}
          isLogin={isLogin}
          success={success}
          regReq={registrationReq}
        />
      </div>
    )
  }
}

export default RegistrationContainer
