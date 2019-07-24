# Wheel of Wizards

### Created By: Amanda Sierra, Gregory Anderson, & Amy Rippeto

## Objective:

As Module 2 students of the Front End Engingeering Program at Turing School of Software & Design we were tasked with recreating the well know game Wheel of Fortune. Our game was built with OOP priciples and TDD. This was our first project using Webpack, a provided fetch API for retrieving our data and incorporating SCSS/SASS for the design.

## Try our Game:

1. Clone down this repo.
2. In your terminal run ```npm install```
3. Next run ```npm start```
4. Now you can go to `http://localhost:8080/` to play Wheel of Wizards! 

## How to Play:

![](./images/wizard2.png)

![](./images/wizard1.png)

![](./images/wizard3.png)


## Opportunities for Improvement:

1. Fine tune disable/enable features: There are a couple of situations where vowels can be selected when they should not be available. The option to solve should be disabled if the player has already spun.

2. We do not have a way to handle a potential tied bank amount at the end of Round 4.

3. Improve the UX/UI:

  - Fit the game on to single page to view so user doesn't have to constantly scroll up and down to play the game.

  - Added animation, specifically the crystal ball. We would like to have it spin and the spin amount to have a mesmerizing fade in dispaly. 

  - We did incorporate an Instructions pop up feature, but have discovered from doing user testing the game in general is a little confusing to navigate. Possibly including prompts or animation to guide users through next steps would be helpful.

  - Refactor and DRY up our code. With so many things happening at the same time, dependent on user interactions and randomization some of our functions are long and confusing to read.

5. Work out these kinks and publish to GitHub Pages for user's to enjoy!
