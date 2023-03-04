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