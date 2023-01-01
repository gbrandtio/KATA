/**
 * Defines a common contract for all array sanitization rules.
 */
export interface SanitizationRule<Type> {
    execute(data: Type): Type;
    isMatch(): boolean;
}