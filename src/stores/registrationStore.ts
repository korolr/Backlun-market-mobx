import {observable, action, computed} from 'mobx';
import { HTTP } from "../utils/api"

export interface IRegistrationStore {
    success: boolean;
    error: string;

    registrationStart: (login: string,
      password: string,
      name: string,
      address: string) => void,
      registrationReq: () => void
}

export class RegistrationStore implements IRegistrationStore {
    @observable success = false;
    @observable error = "";

    @action.bound
    public registrationReq(){
      this.error = "";
      this.success = false;
    }
    @action.bound
    public registrationStart(login: string,
        password: string,
        name: string,
        address: string):void {
            const self = this;
        try {
            HTTP.post(
                `/api/auth/registration`,
                {},
                {
                  params: {
                    login: login,
                    password: password,
                    name: name,
                    address: address,
                  },
                }
              )
                .then(function(response) {
                  if (response.data.message === "Success") {
                    self.success = true;
                  }
                })
                .catch(function(err) {
                  if (err.response.data.message === "User with this login is exists") {
                   self.success = false;
                   self.error = "Пользователь с таким логином уже есть"
                  } else if (err.response.data.message === "Incorrect data") {
                    
                    self.success = false;
                    self.error = "Не правильные данные"
                    
                  } else {
                    self.success = false;
                    self.error = "Ошибка сервера"
                    
                  }
                })
         } catch (error) {}
    }
}
 