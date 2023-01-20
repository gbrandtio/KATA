## Goals
The goal of this KATA is to explore ways on writing clean chains of promises / cleaning up the logic of nested promises. Currently the most clean approaches found across concern composing promises, loops or callback functions with nested promises.

The proposed solution handles gracefully cases where the response of one promise needs to be passed on the next promise on the chain and so on so forth - in a clean way.

## Approach
The implemented approach is influenced by the [Rules](https://levelup.gitconnected.com/rules-design-pattern-in-c-6c62f0e20ee0#:%7E:text=Rules%20design%20pattern%20helps%20the,improve%20our%20file%20validation%20logic.) and [Chain of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility#:%7E:text=Chain%20of%20Responsibility%20is%20a,next%20handler%20in%20the%20chain.) design patterns.

## Implementation
In order to avoid having a large chain of nested promises the _Rules_ design pattern has been applied. That is:
- Every promise adheres to a contract, which on this example is the `BaseDummyPromise`.
- The `BaseDummyPromise` contract defines the `isMatch` method - which is used by the execution class (`Main`) in order to determine whether a promise on the chain needs to be executed or not.
- All the promises are executed through the `Main` class and the result of a promise is the input for the next promise in the chain, allowing a rough implementation of the concepts of _Chain of responsibility_.

## Benefits
The proposed approach supports a bunch of design principles, especially the ones that the design patterns that influencing it also support. The below are the ones worth highlighting: 
- Open Closed Principle: The chain of promises is open for extension but closed for modification. In case a new promise needs to be added on the chain, this can be easily achieved by defining a new class that adheres to the `BaseDummyPromise` contract and adding it to the pre-defined array of promises.
- Single Responsibility Principle: Every promise class has only one reason to change, which is if the business rule that supports it has changed (for example, if the chain of promises was used to validate a login, a promise class that was validating a password against a database could change if the business rules around it changed).

## Further Discussion
For further discussion feel free to comment on the below sources, where the implementation and approaches taken on this KATA are discussed:
- Stack Overflow: [Writing Clean Code with Nested Promises](https://stackoverflow.com/questions/15913448/writing-clean-code-with-nested-promises/75126266#75126266)
- Medium: [Clean: Clean Way to Nested Promises](https://ioannis-brandt.medium.com/clean-way-to-nested-promises-5c2f72d3841c)