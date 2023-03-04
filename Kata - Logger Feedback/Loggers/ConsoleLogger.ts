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