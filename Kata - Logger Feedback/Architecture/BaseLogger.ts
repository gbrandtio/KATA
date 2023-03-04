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