export class Customer {
    public mainCustomer: boolean;
    public additionalCustomer: boolean;
    public company: string;
    
    constructor(mainCustomer: boolean, additionalCustomer: boolean, company: string) {
        this.mainCustomer = mainCustomer;
        this.additionalCustomer = additionalCustomer;
        this.company = company;
    }
}