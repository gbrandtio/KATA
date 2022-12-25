import { BaseDataDto } from "../Models/BaseDataDto";
import { FileService } from "./FileService";

export class BaseOps {
    /** The column index of the maximum temperature, inside weather.dat file. */
    public static readonly MAXIMUM_TEMPERATURE_INDEX: number = 1;
    /** The column index of the minimum temperature, inside weather.dat file. */ 
    public static readonly MINIMUM_TEMPERATURE_INDEX: number = 2;
    /** The column index of the goals that a team has scored (F Column), inside football.dat file. */
    public static readonly GOALS_SCORED_INDEX: number = 6;
    /** The column index of the goals that a team has conceded (A Column), inside football.dat file. */
    public static readonly GOALS_CONCEDED_INDEX: number = 8;

    /**
     * Reads the data of a predefined format from the specified filepath and stores them into an array of objects that hold all the 
     * useful information.
     * 
     * @param filePath The filepath to read data from.
     * @param indexOfMaximum The index (column) where the maximum will be located on the deserialized array @see splitLinesBasedOnWhitespaces.
     * @param indexOfMinimum The index (column) where the minimum will be located on the deserialized array @see splitLinesBasedOnWhitespaces.
     * @returns An array of BaseDataDto objects that contain all the parsed information.
     */
    public readData(filePath: string, indexOfMaximum: number, indexOfMinimum: number) {
        let data: BaseDataDto[] = [];

        let fileService: FileService = new FileService();
        let allFileLines: string[] = fileService.readData(filePath);
        let mapOfLines: Map<number, string[]>  = fileService.splitLinesBasedOnWhitespaces(allFileLines);

        mapOfLines.forEach((value, key) => {
            let day: string = value[0];
            let max: number = parseFloat(value[indexOfMaximum]);
            let min: number = parseFloat(value[indexOfMinimum]);

            data.push(new BaseDataDto(day, max, min));
        });
        
        return data;
    }

    /**
     * Calculates the minimum spread of the passed BaseDataDto array. That is:
     * baseDataDto.max - baseDataDto.min.
     * 
     * @param data The dataset to calculate the spread from.
     * @returns The minimum spread of the given dataset.
     */
    public calculateMinSpread(data: BaseDataDto[]): number {
        let min: number = Number.MAX_SAFE_INTEGER;
        data.forEach(element => {
            let spread: number = element.calculateSpread();
            if (spread < min) {
                min = spread;
            }
        });

        return min;
    }

    /**
     * Calculates the minimum spread of the given dataset and returns the respective object.
     * 
     * @param data The dataset to calculate the spreads.
     * @returns The object that has the minimum spread.
     */
    public fetchObjectWithMinimumSpread(data: BaseDataDto[]): BaseDataDto {
        let min: number = Number.MAX_SAFE_INTEGER;
        let objectWithMinSpread: BaseDataDto = new BaseDataDto();

        data.forEach(element => {
            let spread: number = element.calculateSpread();
            if (spread < min) {
                min = spread;
                objectWithMinSpread = element;
            }
        });

        return objectWithMinSpread;
    }
}