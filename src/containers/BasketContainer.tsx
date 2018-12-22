import React, { Component } from "react"
import { Basket } from "../components/Basket"
import { observer, inject } from "mobx-react"
import { IBasketStore } from "../stores/basketStore"

interface Props {
  basStore?: IBasketStore;
}

@inject("basStore")
@observer
class BasketContainer extends Component<Props> {
  render() {
    const { updateBasket, buyBasket, data, clearBasket } = this.props.basStore!;
    return (
      <div>
        <Basket
          updateBasket={updateBasket}
          basket={data}
          buyBasket={buyBasket}
          clearBasket={clearBasket}
        />
      </div>
    )
  }
}


export default BasketContainer
