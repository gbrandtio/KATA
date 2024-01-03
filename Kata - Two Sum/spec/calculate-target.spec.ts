import { Calculator } from './../main';

describe("The calculated array positions", function () {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("are subsequent when the subsequent array elements are adding up to the target", function () {
        let arrayWithSubsequentNumbers: number[] = [0,1,2,3];
        let target: number = 3;

        let result: number[] = calculator.calculateTarget(arrayWithSubsequentNumbers, target);

        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
    });

    it("are not subsequent when the array elements summing up to the target are not subsequent", function () {
        let arrayWithSubsequentNumbers: number[] = [0,1,2,3];
        let target: number = 4;

        let result: number[] = calculator.calculateTarget(arrayWithSubsequentNumbers, target);
        let differenceOfCalculatedArrayPositions: number = result[1] - result[0];

        expect(differenceOfCalculatedArrayPositions).toBeGreaterThan(0);
        expect(result[1] - result[0]).toBeGreaterThan(1);
    });
});