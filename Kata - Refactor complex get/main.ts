import { BaseHandler } from './Handlers/BaseHandler';
import { Customer } from './Models/Customer';

export class Main {
    public mainCustomerValidationHandler!: BaseHandler; 
    public additionalCustomerValidationHandler!: boolean;
    private customer: Customer;
    
    constructor(customer: Customer) {
        this.customer = customer;
    }

    get validateCustomer(): boolean {
        let customerIsValid = false;

        if (this.customer.mainCustomer) {
            if (this.customer.company) {
                customerIsValid = false;
            } else {
                customerIsValid = true;
            }
        }

        if (this.customer.additionalCustomer) {
            if (this.customer.company) {
                customerIsValid = true;
            } else {
                customerIsValid = false;
            }
        }

        return customerIsValid;
    }
}