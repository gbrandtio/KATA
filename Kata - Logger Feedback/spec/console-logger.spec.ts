import { BaseLogger } from "../Architecture/BaseLogger";
import { BaseLoggerCreator } from "../LoggerFactory/BaseLoggerCreator";
import { ConsoleLoggerCreator } from "../LoggerFactory/ConsoleLoggerCreator";
import { LogType } from "../Models/LogTypeDto";

describe("Console logger must", function(){
    beforeEach(function(){
        spyOn(console, 'info');
        spyOn(console, 'warn');
        spyOn(console, 'error');
    });

    let consoleLoggerCreator: BaseLoggerCreator = new ConsoleLoggerCreator();
    let consoleLogger: BaseLogger = consoleLoggerCreator.createDefaultLogger();
    
    it("output an information message to the console if the passed LogType is INFO", function() {
        consoleLogger.log(LogType.INFO, "Information message");
        expect(console.info).toHaveBeenCalled();
    });

    it("output a warning message to the console if the passed LogType is WARNING", function() {
        consoleLogger.log(LogType.WARNING, "Warning message");
        expect(console.warn).toHaveBeenCalled();
    });

    it("output an error message to the console if the passed LogType is ERROR", function() {
        consoleLogger.log(LogType.ERROR, "Error message");
        expect(console.error).toHaveBeenCalled();
    });
});