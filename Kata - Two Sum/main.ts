export class Calculator {
    public calculateTarget(arr: number[], target: number): number[] {
        let positionOfFirstAddend: number = -1;
        let positionOfSecondAddend: number = -2;

        for (let i = 0; i < arr.length - 1; i++) {
            let previousPositionToCheck: number = arr[i];

            for (let j = i + 1; j < arr.length; j++) {
                let nextPositionToCheck: number = arr[j];
                if (previousPositionToCheck + nextPositionToCheck == target) {
                    positionOfFirstAddend = i;
                    positionOfSecondAddend = j;
                }
            }
        }

        return [positionOfFirstAddend, positionOfSecondAddend];
    }
}