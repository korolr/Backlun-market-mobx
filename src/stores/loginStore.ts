import {observable, action, computed} from 'mobx';
import { HTTP } from "../utils/api"
import { RootStore } from './index';

export interface ILoginStore {
  token: string | null;
  error: string;
  isLogin: boolean;

  loginStart:(
    login: string,
    password: string)=> void,
  loginReq: () => void,
  logOut: () => void,
  logOut403: (
    err: { response: { data: { message: string } } }
  ) => void
}

export class LoginStore implements ILoginStore {
    

    @observable token = null;
    @observable error =  "";
    @observable isLogin = false;

    constructor(public root: RootStore) { }

    @action.bound
    public loginReq(){
      this.token = null; 
      this.error = "";
      this.isLogin = false;
    }

    @action.bound
    public logOut(){
      this.token = null;
      this.error = "";
      this.isLogin = false;
    }


    @action.bound
    public logOut403(
      err: { response: { data: { message: string } } }
    ) {
      if (err.response.data.message === "Incorrect token") {
        this.token = null; 
        this.error = "";
        this.isLogin = false;
      }
    }

    @action.bound
    public loginStart(
           login: string,
           password: string):void {
        const self = this;
          HTTP.post(
            `api/auth/login`,
            {},
            {
              params: {
                login: login,
                password: password,
              },
            }
          )
            .then(function(response) {
              
                self.token = response.data.body;
                self.isLogin = true;
            }
            )
            .catch(function(err) {
              if (err.response.data.message === "Incorrect login or password") {
                self.token = null; 
                self.error = "Ошибка при вводе пароля";
                self.isLogin = false; 
               
              } else {
                self.token = null; 
                self.error = "Ошибка Сервера";
                self.isLogin = false; 
              }
            })
    }
}
 