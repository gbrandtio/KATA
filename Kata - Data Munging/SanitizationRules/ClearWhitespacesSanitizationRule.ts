import { SanitizationRule } from "./SanitizationRule";

export class ClearWhitespacesSanitizationRule implements SanitizationRule<string[]> {

    /**
    * Removes all the whitespace elements of an array and returns the array with the rest of the contents.
    * 
    * @param arrayToSanitize The array to apply the sanitization rules on.
    * @returns The sanitized array by removing it's whitespaces.
    */
    execute(arrayToSanitize: string[]): string[] {
        let sanitizedArray: string[] = [];
        sanitizedArray = arrayToSanitize.filter(entry => entry.trim() != '');

        return sanitizedArray;
    }

    isMatch(): boolean {
       return true;
    }
}