import { RegistrationStore, IRegistrationStore  } from "./registrationStore"
import { LoginStore, ILoginStore } from "./loginStore"
import { BasketStore, IBasketStore } from "./basketStore"
import { RouterStore } from 'mobx-react-router';



export class RootStore {
    public regStore: IRegistrationStore;
    public logStore: ILoginStore;
    public basStore: IBasketStore;
    public routing: RouterStore;

    constructor() {
        this.regStore = new RegistrationStore(this);
        this.logStore = new LoginStore(this);
        this.basStore = new BasketStore(this);
        this.routing = new RouterStore();

    }
}
