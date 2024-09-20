# Obligatory Assignment 1(HTML/CSS/JavaScript) – PROG2053 Web Technologies

> You will need to create a website consisting of 3 pages, including the landing page. I’ve provided some guidelines, but the content is up to you. Feel free to use what you think is best.

1. Download the ‘Roboto’ font from this source.
    - Learn how to implement the ‘Roboto’ font by visiting this source.
    
2. Refer to the attached image for the design, aiming to replicate it as closely as possible.

3. Focus on desktop design; mobile optimization is not required.

4. Start by adding all the content using HTML before styling with CSS. You may need to adjust the HTML as you style, but avoid switching back and forth too early to save time and reduce frustration.

5. Approach the project one section at a time. The homepage of the website has four main sections and a footer, so start with one section and refine it before moving on. Beginning at the top is usually a good strategy.

6. Use only vanilla HTML and CSS; do not use any libraries, frameworks, or SASS.

## Additionally, incorporate the following JavaScript tasks to enhance the website:

9. ### Dynamic Content Loading:
    - Create a second page of the website with same header and footer.
    - On the second page, implement dynamic content loading. Display three posts in one row.
    - Use the JSONPlaceholder API to fetch and display posts as the user scrolls down the page (https://jsonplaceholder.typicode.com/) (As soon as the user reaches the end of the page, a function is called that fetches more data from the given API).
    - Use AJAX to retrieve the data and update the page content without reloading.

10. ### Real-time Data Display:
    - Create a third page with same header and footer.
    - On the third page, create a section and a suitable page structure to display real-time
    weather updates.
    - Use the Open-Meteo API to fetch and display current weather data for a specified
    location.
    - Example API call: https://api.openmeteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true
    (This example fetches the current weather for Tokyo, Japan). Show data for 5+ locations.
    - Update the displayed data at regular intervals to ensure it remains current.