## Part One: Weather Data
In weather.dat you’ll find daily weather data for Morristown, NJ for June 2002. Download this text file, then write a program to output the day number (column one) with the smallest temperature spread (the maximum temperature is the second column, the minimum the third column).

## Part Two: Soccer League Table
The file football.dat contains the results from the English Premier League for 2001/2. The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them). Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.

## Part Three: DRY Fusion
Take the two programs written previously and factor out as much common code as possible, leaving you with two smaller programs and some kind of shared functionality.

## Kata Questions
**To what extent did the design decisions you made when writing the original programs make it easier or harder to factor out common code?**
- On the first program, we developed against interfaces. This helped identifying the commonalities between the 1st and 2nd programs and model the 2nd one similarly. The thing that we changed for Part 2 was to implement base classes where the common code was factored out - it would have been much harder to re-think the software design, if the initial development was not against interfaces.

**Was the way you wrote the second program influenced by writing the first?**
-  Since there were many commonalities identified, developed base classes in order to use the same code that was used for #1 in #2. This satisfied at a large degree #3 where most of the code was already re-usable.

**Is factoring out as much common code as possible always a good thing? Did the readability of the programs suffer because of this requirement? How about the maintainability?**

- In general -for large domain applications- unnecessarily (when there is no clear benefit) factoring out chunks of code might result to added complexity and, as said, to decreased readability (even if some code will become re-usable). The purpose of guidelines such as DRY is to make a program more maintainable, easy to understand and easy to extend. If there is any point where these 3 principles are in danger because of the usage of DRY (or other principles) then they may not be used - e.g., it is always very difficult to resolve bugs on complex, non-readable code.

- For the specific programs of this exercise, we make the compromise that the general purpose of the program is to calculate the spread of the given datasets. In order to calculate the spread of a dataset, we need to have the maximum and minimum metrics/values by definition. For this reason, the base classes of the constructed objects can be commonly modelled and the operations re-used. However, without making that compromise we can argue that readability took a hit, since it would be much more readable to refer to max/min as maxTemperature/minTemperature and goalsScored/goalsReceived respectively.

**Note**
Regarding the pattern used in ```SanitizationRules``` you can read a relevant article at [Clean Integration of Business rules](https://medium.com/@ioannis-brandt/clean-integration-of-business-rules-78a263371ccd).
