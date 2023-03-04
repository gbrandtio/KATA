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