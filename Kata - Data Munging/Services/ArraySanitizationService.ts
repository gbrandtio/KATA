import { ClearWhitespacesSanitizationRule } from "../SanitizationRules/ClearWhitespacesSanitizationRule";
import { SanitizationRule } from "../SanitizationRules/SanitizationRule";

export class ArraySanitizationService {
    /** Configured rules for the array sanitization. */
    public static readonly sanitizationRules: SanitizationRule<string[]>[] = [new ClearWhitespacesSanitizationRule()];

    /**
     * Sanitizes an array based on some predefined sanitization rules @see sanitizationRules.
     * 
     * @param array The array to perform the sanitization actions on.
     * @returns The transformed array, after all the rules have been applied.
     */
    public sanitize(array: any[], rules: SanitizationRule<string[]>[]): any[] {
        let sanitizedArray: any[] = array;

        rules.forEach(rule => {
            if (rule.isMatch()) {
                sanitizedArray = rule.execute(sanitizedArray);
            }
        });

        return sanitizedArray;
    }
}