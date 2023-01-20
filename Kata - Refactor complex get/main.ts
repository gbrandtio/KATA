import { Customer } from './Models/Customer';

export class Main {
    private customer: Customer;
    constructor(customer: Customer) {
        this.customer = customer;
    }

    get customersAreNotValid(): boolean {
        let customerIsValid = false;

        if (this.customer.mainCustomer) {
            if (this.customer.company) {
                customerIsValid = false;
            } else {
                customerIsValid = true;
                
            }
        }

        if (this.customer.additionalCustomer) {
            if (!this.customer.company) {
                customerIsValid = false;
            } else {
                customerIsValid = true;
            }
        }
        return customerIsValid;
    }
}