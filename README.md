# Web Search Application

## Introduction
This application allows users to search through a dataset containing information about individuals, including their name, age, gender, occupation, city, email, and phone number. Users can search for specific individuals by name, and the application dynamically displays matching results. Additionally, users can clear the search results to reset the view.

## HTML Structure
The HTML file (`index.html`) is structured as follows:
- It begins with the `<!DOCTYPE html>` declaration.
- Within the `<head>` section, meta tags define character set and viewport settings, along with the title of the page, now named "Web Search Application."
- The `<body>` section comprises the primary content:
  - A `<div>` element with the class "one" contains the application's heading and an input field for searching by name.
  - Two buttons, labeled "Search" and "Clear," enable users to perform search queries and clear search results, respectively.
  - A `<table>` with the ID "searchResults" features table headers for different data fields and an empty `<tbody>` for presenting search outcomes.
- Lastly, the HTML file references an external JavaScript file (`your-script.js`) to manage the application's functionality.

## JavaScript Functionality
The JavaScript file (`your-script.js`) includes the following functionalities:
1. The `namesList` array stores data objects representing individuals.
2. Essential elements from the HTML document are selected using `document.getElementById`.
3. Two functions, `clearSearchResults` and `search`, are defined:
   - `clearSearchResults`: This function empties the search results by clearing the `<tbody>` element.
   - `search`: It searches for individuals based on the user-entered name. After trimming the search term and checking for emptiness, it clears previous search results, iterates through `namesList` to find matching names, dynamically creates table rows for matches, and appends them to the search results table. If no matches are found, it displays a "No data found" message.
4. Event listeners are added to the search and clear buttons to trigger the `search` and `clearSearchResults` functions, respectively.
5. The script ensures that the search functionality is invoked when the Enter key is pressed in the search input field.

## Conclusion
This documentation provides an overview of the Web Search Application, outlining its HTML structure and JavaScript functionality. Users can utilize the application to search for individuals by name and clear search results as needed.
