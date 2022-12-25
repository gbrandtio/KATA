import * as fs from 'fs';

export class FileService {
    /**
     * Given a valid filepath, will read the passed file line by line and store it into an array.
     * 
     * @param filePath The path to the file to read data from, including the filename.
     * @returns An array containing all the contents of the given file.
     */
    public readData(filePath: string): string[] {
        let data: string[] = [];
        if (fs.existsSync(filePath)) {
            data = fs.readFileSync(filePath, "utf-8").split(/\r?\n/);
        }

        return data;
    }

    /**
     * Will split each row of the passed array based on whitespaces and will store it in a Map that has as keys
     * the row number and as a value the splitted line as an array. Useful for reading txt files that are structured into columns.
     * 
     * @param lines The lines of the parsed file.
     * @returns A Map that has as a key the row number and as a value the splitted line as an array (based on whitespaces).
     */
    public splitLinesBasedOnWhitespaces(lines: string[]): Map<number, string[]> {
        let mapOfSplittedLines: Map<number, string[]> = new Map();

        for (let i = 0; i < lines.length; i++) {
            if (i > 1) {
                let splittedLine: string[] = lines[i].split(/(\s+)/);
                splittedLine = this.sanitizeArray(splittedLine);
                mapOfSplittedLines.set(i, splittedLine);
            }
        }

        return mapOfSplittedLines;
    }

    /**
    * Based on a pre-defined set of rules, this function will sanitize the passed array and return the sanitized array.
    * 
    * @param arrayToSanitize The array to apply the sanitization rules on.
    * @returns The sanitized array.
    */
    public sanitizeArray(arrayToSanitize: string[]): string[] {
        let sanitizedArray: string[] = [];
        sanitizedArray = arrayToSanitize.filter(entry => entry.trim() != '');

        return sanitizedArray;
    }
}