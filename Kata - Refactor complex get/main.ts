import { BaseHandler } from './Handlers/BaseHandler';
import { Customer } from './Models/Customer';

export class Main {
    private customer: Customer;
    private mainCustomerHandler: BaseHandler;
    private additionalCustomerHandler: BaseHandler;

    constructor(customer: Customer, mainCustomerHandler: BaseHandler, additionalCustomerHandler: BaseHandler) {
        this.customer = customer;
        this.mainCustomerHandler = mainCustomerHandler;
        this.additionalCustomerHandler = additionalCustomerHandler;
    }

    /**
     * Determines whether a customer is valid by executing the chain of handlers passed through
     * {@link mainCustomerHandler} and {@link additionalCustomerHandler}.
     */
    get validateCustomer(): boolean {
        let isCustomerValid = false;

        if (this.customer.mainCustomer) {
            isCustomerValid = this.mainCustomerHandler.handle(this.customer);
        }

        if (this.customer.additionalCustomer) {
            isCustomerValid = this.additionalCustomerHandler.handle(this.customer);
        }

        return isCustomerValid;
    }
}