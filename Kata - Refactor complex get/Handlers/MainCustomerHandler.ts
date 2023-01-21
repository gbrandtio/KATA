import { BaseAbstractHandler } from "./BaseAbstractHandler";

export class MainCustomerHandler extends BaseAbstractHandler {
    public isEndHandler!: boolean;
    
    /**
     * Determines whether a customer is a main customer based on the passed data.
     * @param data The data to check in order to determine whether a customer is a main customer.
     * @returns True if the customer is a main customer, otherwise false.
     */
    public handle(data: any): boolean {
        console.log("Executing MainCustomerHandler");

        if (data.mainCustomer) {
            return super.handle(data);
        }
        else {
            return false;
        }        
    }
}