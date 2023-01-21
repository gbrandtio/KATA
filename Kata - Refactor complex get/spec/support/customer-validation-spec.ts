import { AdditionalCustomerCompanyDefinedHandler } from "../../Handlers/AdditionalCustomerCompanyDefinedHandler";
import { AdditionalCustomerHandler } from "../../Handlers/AdditionalCustomerHandler";
import { BaseHandler } from "../../Handlers/BaseHandler";
import { MainCustomerCompanyDefinedHandler } from "../../Handlers/MainCustomerCompanyDefinedHandler";
import { MainCustomerHandler } from "../../Handlers/MainCustomerHandler";
import { Main } from "../../main";
import { Customer } from "../../Models/Customer";

describe("The validation of a customer", function () {
    const mainCustomerHandler: BaseHandler = constructMainCustomerValidationHandlersChain();
    const additionalCustomerHandler: BaseHandler = constructAdditionalCustomerValidationHandlersChain();

    it("succeeds if a customer is a main customer and does not have a company", function () {
        let customer: Customer = new Customer(true, false, "");
        let app: Main = new Main(customer, mainCustomerHandler, additionalCustomerHandler);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(true);
    });

    it("succeeds if a customer is an additional customer and has a company", function () {
        let customer: Customer = new Customer(false, true, "Test company");
        let app: Main = new Main(customer, mainCustomerHandler, additionalCustomerHandler);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(true);
    });

    it("fails if a customer is a main customer and has a company", function () {
        let customer: Customer = new Customer(true, false, "Test Company 1");
        let app: Main = new Main(customer, mainCustomerHandler, additionalCustomerHandler);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(false);
    });

    it("fails if a customer is an additional customer and does not have a company", function () {
        let customer: Customer = new Customer(false, true, "");
        let app: Main = new Main(customer, mainCustomerHandler, additionalCustomerHandler);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(false);
    });
});

/**
 * Constructs a chain of handlers that is used to validate main customers. It also specifies which 
 * handlers on the chain can be considered as end-condition handlers @see {@link BaseAbstractHandler.isEndHandler}.
 * @returns The root handler of the chain for main customers validation.
 */
function constructMainCustomerValidationHandlersChain(): BaseHandler {
    const mainCustomerHandler: BaseHandler = new MainCustomerHandler();
    const mainCustomerCompanyDefinedHandler: BaseHandler = new MainCustomerCompanyDefinedHandler();
    mainCustomerCompanyDefinedHandler.isEndHandler = true;
    mainCustomerHandler.setNext(mainCustomerCompanyDefinedHandler);

    return mainCustomerHandler;
}

/**
 * Constructs a chain of handlers that is used to validate additional customers. It also specifies which 
 * handlers on the chain can be considered as end-condition handlers @see {@link BaseAbstractHandler.isEndHandler}.
 * @returns The root handler of the chain for additional customers validation.
 */
function constructAdditionalCustomerValidationHandlersChain(): BaseHandler {
    const additionalCustomerHandler: BaseHandler = new AdditionalCustomerHandler();
    const additionalCustomerCompanyDefinedHandler: BaseHandler = new AdditionalCustomerCompanyDefinedHandler();
    additionalCustomerCompanyDefinedHandler.isEndHandler = true;
    additionalCustomerHandler.setNext(additionalCustomerCompanyDefinedHandler);

    return additionalCustomerHandler;
}
