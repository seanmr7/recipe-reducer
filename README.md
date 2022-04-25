A React app to strip out all the clutter from a recipe. This app pulls out the ingredients and instructions from the specified external url.

Motivation: I built this app because I was tired of scrolling through blog style pages to find the actual recipe that I wanted to cook.

Challenges: The biggest challenge was creating the web scraper. It had to be able to pick out the ingredients and instructions for a recipe from many varied sources. I accomplished this by examining various recipe websites and picking out specific classes for the scraper to query. Based on the hostname, the parsing function will call the scraping functions and pass in the required class names and html elements to pull out the ingredients and instructions.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
