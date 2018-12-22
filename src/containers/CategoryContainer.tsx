import React, { Component } from "react"
import { Category } from "../components/Category"
import { observer, inject } from "mobx-react"
import { IBasketStore } from "../stores/basketStore"
import { ILoginStore } from "../stores/loginStore"

interface AppProps {
  basStore?: IBasketStore;
  logStore?: ILoginStore;
  match: {
    params: {
      number: number,
    },
  };
}

@inject("regStore", "logStore")
@observer
class CategoryContainer extends Component<AppProps> {
  componentDidMount() {}
  render() {
    const { data, getBasket, updateBasket } = this.props.basStore!;
    const { isLogin } = this.props.logStore!;
    return (
      <div>
        <Category
          basket={data}
          getBasket={getBasket}
          login={isLogin}
          updateBasket={updateBasket}
          id={this.props.match.params.number}
        />
      </div>
    )
  }
}

export default CategoryContainer
