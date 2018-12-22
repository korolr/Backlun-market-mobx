import React, { Component } from "react"
import { Product } from "../components/Product"
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

@inject("regStore", "logStore")
@observer
class ProductContainer extends Component<Props> {
  componentDidMount() {}
  render() {
    const { isLogin } = this.props.logStore!;
    const { data, getBasket, updateBasket } = this.props.basStore!;
    return (
      <div>
        <Product
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

export default ProductContainer
