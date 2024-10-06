// Get references to the HTML elements for the posts container and the loading indicator
const postsContainer = document.getElementById('posts-container')
const loadingIndicator = document.getElementById('loading-indicator')

// Track the current page of posts being loaded and whether a load operation is in progress
let currentPage = 1
let isLoading = false

// Function to create a post element with the given post data
function createPostElement(post) {
    const postElement = document.createElement('div')
    postElement.classList.add('post-card')
    
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `
    
    return postElement
}

// Function to load posts from the JSONPlaceholder API
function loadPosts(page) {
    isLoading = true // Set the loading flag to true
    loadingIndicator.classList.remove('hidden') // Show the loading indicator

    // Simulate a network delay of 1 second before fetching the data
    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = createPostElement(post)
                postsContainer.appendChild(postElement)
            })
            // Mark loading as complete and hide the loading indicator
            isLoading = false
            loadingIndicator.classList.add('hidden')
        })
        .catch(error => {
            console.error('Error fetching:', error)
            isLoading = false
            loadingIndicator.classList.add('hidden')
        })}, 1000)
}

// Function to handle the scroll event and load more posts when reaching the bottom of the page
function handleScroll() {
    if (window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight && !isLoading) {
        currentPage++
        if (currentPage <= 12) { // Load more posts if there are pages left (limit to 12 pages)
            loadPosts(currentPage) // Load the next page of posts
        }
    }
}

loadPosts(currentPage) // Initial call to load the first page of posts when the page loads

window.addEventListener('scroll', handleScroll) // Add an event listener for scrolling, so that more posts are loaded when scrolling down