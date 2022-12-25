export interface SanitizationRule<Type> {
    execute(data: Type): Type;
    isMatch(): boolean;
}