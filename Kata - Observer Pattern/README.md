## Goals
This KATA is a safe space to practice the implementation of the observer pattern.

## Definitions
- `Observable`: A mechanism that is able to receive data, allow the subscription/unsubscription of other entities (i.e., `Observer`s) to it, and is able to notify the subscribed entities.
- `Observer`: Classes that are able to receive notifications from an `Observable`, if they are subscribed to it.

## Benefits
- **Single Responsibility Principle:** Every `Observer` has only one reason to change - if it needs to receive notifications from a different `Observable`.
- **Open/Closed Principle:** New subscriber classes can be introduced without having to alter the `Observable`'s code.