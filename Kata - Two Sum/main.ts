export class Calculator {
    public calculateTarget(arr: number[], target: number): number[] {
        let pos0: number = -1;
        let pos1: number = -2;

        for (let i=0; i<arr.length - 1; i++) {
            let firstPositionToCheck: number = arr[i];

            for (let j=i+1; j<arr.length; j++) {
                let secondPositionToCheck: number = arr[j];
                if (firstPositionToCheck + secondPositionToCheck == target) {
                    pos0 = i;
                    pos1 = j;
                }
            }
        }

        return [pos0, pos1];
    }
}