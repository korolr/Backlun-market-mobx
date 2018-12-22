import {observable, action, computed} from 'mobx';
import { HTTP } from "../utils/api"
import { RootStore } from './index';

export interface IBasketStore {
  data: Array<any>;
  error: string;

  getBasket: () => void;
  updateBasket: (product: number, count: number) => void;
  buyBasket: () => void;
  clearBasket: () => void;
}

export class BasketStore implements IBasketStore {
    @observable data = [];
    @observable error =  "";

    constructor(public root: RootStore) { }


    @action.bound
    public getBasket(){
      const state = this.root.logStore.token;
      this.error = "";
      var self = this;
      HTTP.get(`api/get/backet`, {
        params: {
          token: 'this.root.logStore.token'
        },
      })
        .then(function(response) {
          var data = response.data.body
          self.data = [];
        })
        .catch(function(err) {
          self.root.logStore.logOut403(err)
          self.error = "Ошибка сервера"
        })
    }
    

    @action.bound
    public updateBasket(product: number, count: number){
      const state = this.root.logStore.token;
      this.error = "";
      var self = this;
      HTTP.post(
        `api/market/products`,
        {},
        {
          params: {
            token: state,
            product: product,
            count: count,
          },
        }
      )
        .then(function(response) {
          if (response.data.message === "Success") {
            HTTP.get(`api/get/backet`, {
              params: {
                token: state,
              },
            }).then(function(response) {
              var data = response.data.body
              var data = response.data.body
              self.data = data;
            })
          }
        })
        .catch(function(err) {
          self.root.logStore.logOut403(err)
          self.error = "Ошибка сервера"
        })
  
    }

    @action.bound
    public buyBasket(){
      const state = this.root.logStore.token;
      this.error = "";
      var self = this;
      
      HTTP.post(
        `api/market/pay`,
        {},
        {
          params: {
            token: state,
          },
        }
      )
        .then(function(response) {
          self.data = [];
        })
        .catch(function(err) {
          self.root.logStore.logOut403(err)
          self.error = "Ошибка сервера"
      })
    }

    @action.bound
    public clearBasket(){
      this.data = []
    }


    
}
 