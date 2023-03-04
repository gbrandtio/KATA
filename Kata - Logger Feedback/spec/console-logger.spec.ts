import { BaseLogger } from "../Architecture/BaseLogger";
import { ConsoleLogger } from "../Loggers/ConsoleLogger";
import { LoggerConfig } from "../Models/LoggerConfig";
import { LogType } from "../Models/LogTypeDto";

describe("Console logger must", function(){
    beforeEach(function(){
        spyOn(console, 'info');
        spyOn(console, 'warn');
        spyOn(console, 'error');
    });

    let consoleLogger: BaseLogger = new ConsoleLogger(new LoggerConfig());
    
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