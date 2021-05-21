#Down below is show what we were supposed to do in challenge // Completed 

Before you begin **please make sure you read this readme file entirely** and that you understand everything. If there's anything that you don't understand, please don't hesitate to reach out and ask.

## Instructions

1. Read all of the 'Exercise' part before you start.
2. Write your solution to the exercise making sure the provided tests are green.

## Exercise

1. Create a custom hook in App.js to fetch data from SWAPI API people endpoint on first render.

2. Transform received data using the processData function from src/utils.js.

3. ProcessData should receive params ({gender, minHeight}) and return a function that receives data to filter. The returned function should consilidate a list of all people that are male and are higher than 130cm. People should be sorted in inverse order by mass and by height if they weight the same.

4. Display the outcome of your solution by rendering the list in App.js. Only name, mass and height information should be rendered to the page.

5. Implement case-insensitive filter by the person name for the list

## Expected output

Your solution is expected to render the following data:

```json
[
  {
    "name": "Darth Vader",
    "mass": "136",
    "height": "202"
  },
  {
    "name": "Owen Lars",
    "mass": "120",
    "height": "178"
  },
  {
    "name": "Biggs Darklighter",
    "mass": "84",
    "height": "183"
  },
  {
    "name": "Obi-Wan Kenobi",
    "mass": "77",
    "height": "182"
  },
  {
    "name": "Luke Skywalker",
    "mass": "77",
    "height": "172"
  }
]
```

## Clarifications:

- We expect that your solution would be parameterizable, it has already been reflected in tests, just make sure that your code passes them
- Make sure the specs are green
- You can use any **utility** library you see fit
- You can request the data from `https://swapi.dev/api/people/` (resource is broken down into pages, but for simplicity you are only allowed to use data from page 1. i.e. just use url without page filter parameter), but you are not allowed to use any of the filter parameters provided by the SWAPI API.

## Helpful links:

- [SWAPI API Docs][https://swapi.dev/documentation#people]
