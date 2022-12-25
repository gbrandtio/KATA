import { ClearWhitespacesSanitizationRule } from "../SanitizationRules/ClearWhitespacesSanitizationRule";
import { SanitizationRule } from "../SanitizationRules/SanitizationRule";

export class ArraySanitizationService {
    private readonly sanitizationRules: SanitizationRule<string[]>[] = [new ClearWhitespacesSanitizationRule()];

    /**
     * Sanitizes an array based on some predefined sanitization rules @see sanitizationRules.
     * 
     * @param array The array to perform the sanitization actions on.
     * @returns The transformed array, after all the rules have been applied.
     */
    public sanitize(array: any[]): any[] {
        let sanitizedArray: any[] = array;

        this.sanitizationRules.forEach(rule => {
            sanitizedArray = rule.execute(sanitizedArray);
        });

        return sanitizedArray;
    }
}