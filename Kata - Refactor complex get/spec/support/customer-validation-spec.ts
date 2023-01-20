import { Main } from "../../main";
import { Customer } from "../../Models/Customer";

describe("The validation of a customer", function () {
    it("succeeds if a customer is a main customer and does not have a company", function () {
        let customer: Customer = new Customer(true, false, "");
        let app: Main = new Main(customer);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(true);
    });

    it("succeeds if a customer is an additional customer and has a company", function () {
        let customer: Customer = new Customer(false, true, "Test company");
        let app: Main = new Main(customer);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(true);
    });

    it("fails if a customer is a main customer and has a company", function () {
        let customer: Customer = new Customer(true, false, "");
        let app: Main = new Main(customer);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(true);
    });

    it("fails if a customer is an additional customer and does not have a company", function () {
        let customer: Customer = new Customer(false, true, "");
        let app: Main = new Main(customer);

        let isCustomerValid: boolean = app.validateCustomer;
        expect(isCustomerValid).toBe(false);
    });
});