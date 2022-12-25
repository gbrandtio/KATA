export class BaseDataDto {
    public identifier: string;
    public max: number;
    public min: number;

    public constructor();
    public constructor(identifier: string, max: number, min: number);
    public constructor(...args: any[]) {
        if (args.length > 0){
            this.identifier = args[0];
            this.max = args[1];
            this.min = args[2];
        }
    }

    /**
     * Calculates the spread of the object's maximum and minimum values.
     * @returns The spread of the object's values.
     */
    public calculateSpread(): number {
        let spread: number = 0;
        spread = Math.abs(this.max - this.min);
        
        return spread;
    }
}