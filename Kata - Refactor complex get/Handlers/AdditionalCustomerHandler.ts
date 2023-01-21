import { BaseAbstractHandler } from "./BaseAbstractHandler";

export class AdditionalCustomerHandler extends BaseAbstractHandler {
    public isEndHandler!: boolean;
    
    /**
     * Determines whether a customer is an additional customer based on the passed data.
     * @param data The data to check in order to determine whether a customer is an additional customer.
     * @returns True if the customer is an additional customer.
     */
    public handle(data: any): boolean {
        console.log("Executing AdditionalCustomerHandler");

        if (data.additionalCustomer) {
            return super.handle(data);
        }
        else {
            return false;
        }
    }
}