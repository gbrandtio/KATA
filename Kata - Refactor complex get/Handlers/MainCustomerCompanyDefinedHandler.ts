import { Customer } from "../Models/Customer";
import { BaseAbstractHandler } from "./BaseAbstractHandler";

export class MainCustomerCompanyDefinedHandler extends BaseAbstractHandler {
    public isEndHandler!: boolean;

    /**
     * Determines whether the @see {@link Customer.company} property exists. For main customers
     * if the company exists, the customer is not valid.
     * @param data The data to check in order to determine if the company exists.
     * @returns True if the company does not exist, which means that the main customer is valid.
     */
    public handle(data: Customer): boolean {
        console.log("Executing MainCustomerCompanyDefinedHandler");

        if (data.company) {
            return false;
        }
        else if (this.isEndHandler) {
            return true;
        }
        else {
            return super.handle(data);
        }
    }
}