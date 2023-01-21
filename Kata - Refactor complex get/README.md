## Goals
The goal of this Kata is to provide a clean way of refactoring the complex `get` statement that can be found on the end of this page. This Kata is a practical implementation of [this stackoverflow question]() and supports the [answer](https://codereview.stackexchange.com/questions/282629/complex-statement-in-typescript-get/282636#282636) I had given as an alternative approach - by implementing the `Chain of Responsibility` design pattern.

## Refactoring Steps
- Identification that the `get` method consists of a set of validation rules.
- `if` conditions reversal in order to indicate correctness instead of falsiness.
- Modelling the problem into 2 large categories of validation rules: 
    - Validation rules for main customers.
    - Validation rules for additional customers.
- Implementation of Chain of Responsibility.
- Common code extraction.

## Benefits
By following CoR we can safely say that our code supports the following:

- The validation rules order, logic and availability **can be changed on demand / even on runtime**. This gives flexibility for adhering to business requirements / changes with agility and by avoiding **ripple effects**.
- **Single Responsibility Principle:** Every Handler class has only one reason to change - if the validation rule that implements changes.
- **Open/Closed Principle:** The implementation is open for extension but closed for modification. We can add new Handlers in our chains or change the order of the chain without having to alter existing code.

## Further Discussion
If you find the approach taken on this implementation intriguing, feel free to upvote or continue the conversation on:
- Code Review: [Complex get statement in Typescript](https://codereview.stackexchange.com/questions/282629/complex-statement-in-typescript-get/282636#282636).
- Medium: [Clean: Refactoring a complex get](https://ioannis-brandt.medium.com/clean-refactoring-a-complex-get-b6280f3c3137).

## Complex get that needs refactoring
```
   get customersAreNotValid(): boolean {
    let customerIsValid = false;

    if (this.customersOverview.mainCustomer) {
      if (!this.customersOverview.mainCustomer.company) {
        const { companyName, vatNumber, box, ...customer } = this.customersOverview.mainCustomer;
        Object.values(customer).some(value => {
          if (value === null || value === '') {
            customerIsValid = true;
          }
        });
      } else {
        const { box, ...customer } = this.customersOverview.mainCustomer;
        Object.values(customer).some(value => {
          if (value === null || value === '') {
            customerIsValid = true;
          }
        });
      }
    }
    
    if (this.customersOverview.additionalCustomer) {
      if (!this.customersOverview.additionalCustomer.company) {
        const { companyName, vatNumber, box, ...customer } = this.customersOverview.additionalCustomer;
        Object.values(customer).some(value => {
          if (value === null || value === '') {
            customerIsValid = true;
          }
        });
      } else {
        const { box, ...customer } = this.customersOverview.additionalCustomer;
        Object.values(customer).some(value => {
          if (value === null || value === '') {
            customerIsValid = true;
          }
        });
      }
    }
    return customerIsValid;
  }
```