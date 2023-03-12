## Goals
The goal of this KATA is to provide a clean implementation of the question/critique required on [Code Review - Logger Class](https://codereview.stackexchange.com/questions/210243/typescript-logger-class/283727#283727).

## Summary
The suggestions made are in order to make the implementation more maintainable and extensible. Some aspects of the actual implementation details have been omitted as the point I'm trying to make is more towards the software design and architecture perspectives.

## Modelling
Based on the initial problem definition we can model the implementation into the below segragated parts:

*Models:* 

LoggerConfig: Model definition of the configuration that a logger can accept.
LogTypeDto: Types of logging messages that a logger can output (e.g., INFO, WARNING, ERROR).

*Loggers:* 

We want the logging functionality to be extensible for the future without having to alter any existing implementation, supporting the Open-Closed Principle. In order to achieve this we can define a BaseLogger contract that all the resulting concrete implementations of loggers need to follow, i.e., the ConsoleLogger.

This is translated as follows:

```
import { LoggerConfig } from "../Models/LoggerConfig";
import { LogType } from "../Models/LogTypeDto";

/// Defines the base contract for all the loggers. Offers base operations to define the logger's functionality
/// and parameterization.
export abstract class BaseLogger {

    /// Base constructor that defines the logger's configuration.
    constructor(private config: LoggerConfig){};

    /// Base contract for logging based on the provided severity.
    public abstract log(severity: LogType, message: string): void;
}
```
```
import { BaseLogger } from "../Architecture/BaseLogger";
import { LogType } from "../Models/LogTypeDto";

/// Extension of the BaseLogger to allow the Client application output to the console
/// specific messages based on severity.
export class ConsoleLogger extends BaseLogger {

    public override log(severity: LogType, message: string): void {
        switch (severity) {
            case LogType.INFO:
                console.info(message);
                break;
            case LogType.WARNING:
                console.warn(message);
                break;
            case LogType.ERROR:
                console.error(message);
                break;
            default:
                console.log(message);
                break;
        }
    }
}
```

By following this approach, we're supporting the OCP, making our application easily extensible and eliminating the risks of ripple effects due to changes on the current functionality.

*Factory*
In order to make our client code even more decoupled from the specifics of which logger to be used, we can use the Factory Method pattern.

This pattern allows us to completely decouple the client code from the specifics of the object creation.

Base Logger Creator In order to achieve the decoupling and abide by the pattern's specification, we're going to use the BaseLoggerCreator as the contract for all the concrete logger creators. That is:

```
import { BaseLogger } from "../Architecture/BaseLogger";

/// Base creator which is part of the Factory Method pattern for creating different type of Loggers.
/// To create a specific type 
export abstract class BaseLoggerCreator {
    /// Contract definition for the concrete creators.
    public abstract create(): BaseLogger;

    /// Implements the default logic for creating a base logger, aka will always create a default logger.
    public createDefaultLogger(): BaseLogger {
        let defaultLogger: BaseLogger = this.create();
        return defaultLogger;
    }
}
```

Note that this base logger can also be responsible for which configuration to be applied on the default logger and can provide functionality that will choose the creation of a specific logger through some configuration.

The concrete creator of a console logger would look like:

```
import { BaseLogger } from "../Architecture/BaseLogger";
import { ConsoleLogger } from "../Loggers/ConsoleLogger";
import { LoggerConfig } from "../Models/LoggerConfig";
import { BaseLoggerCreator } from "./BaseLoggerCreator";

/// Responsible for constructing a concrete console logger along with the appropriate
/// logger configuration that needs to be applied.
export class ConsoleLoggerCreator extends BaseLoggerCreator {

    public create(): BaseLogger {
        return new ConsoleLogger(new LoggerConfig());
    }
}
```

## Conclusion
Now, our client code is completely decoupled by the specifics of object creation and doesn't depend upon any concrete object.

It would be very easy to accomodate any new requirements with agility, while providing backwards compatibility with minimum effort and minimizing the ripple effect.