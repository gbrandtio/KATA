## Goals
This Kata has three separate goals listed below. As all the KATA exercises on this repository, the main goal is to provide highly scalable, clean and maintainable software.

## First Goal
**As you’re coding each algorithm, keep a note of the kinds of error you encounter. A binary search is a ripe breeding ground for “off by one” and fencepost errors. As you progress through the week, see if the frequency of these errors decreases (that is, do you learn from experience in one technique when it comes to coding with a different technique?).**

- For the first 2 implementations the number of fencepost errors was high - usually around the area of the middle item. Hopefully, the number of these errors reduced, as some code was re-used for this specific case on the next implementations. Having faced these kind of issues on previous implementations also helped to keep them in mind when coding with different techniques.

## Second Goal
**What can you say about the relative merits of the various techniques you’ve chosen? Which is the most likely to make it in to production code? Which was the most fun to write? Which was the hardest to get working? And for all these questions, ask yourself “why?”.**

- The easiest and simplest of the techniques that binary search was developed with, was the iterative method - it was also the most readable one. For this reason, the iterative implementation would be the best candidate to make it in production; given the many benefits that easy-to-understand gives (easier to be understood from new developers, easier to fix any bugs). <br><br> However, the code committed is following a recursive algorithm, which was one of the most difficult techniques that were followed.
The reason for maintaining this code, is because most recursive algorithms consist of one single method which handles all the business logic of binary search, whilst here a cleaner approach is proposed which enhances the maintainability and readability of the recursive approach.


## Third Goal
**It’s fairly hard to come up with five unique approaches to a binary chop. How did you go about coming up with approaches four and five? What techniques did you use to fire those “off the wall” neurons?**