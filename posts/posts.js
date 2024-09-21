const postsContainer = document.getElementById('posts-container')
const loadingIndicator = document.getElementById('loading-indicator') 
let currentPage = 1
let isLoading = false

function createPostElement(post) {
    const postElement = document.createElement('div')
    postElement.classList.add('post-card')
    
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `
    
    return postElement
}

function loadPosts(page) {
    isLoading = true
    loadingIndicator.classList.remove('hidden')
    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = createPostElement(post)
                postsContainer.appendChild(postElement)
            })
            isLoading = false
            loadingIndicator.classList.add('hidden')
        })
        .catch(error => {
            console.error('Error fetching:', error)
            isLoading = false
            loadingIndicator.classList.add('hidden')
        })}, 1000)
}


function handleScroll() {
    if (window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight && !isLoading) {
        currentPage++
        if (currentPage <= 12) {
            loadPosts(currentPage)
        }
    }
}

loadPosts(currentPage)

window.addEventListener('scroll', handleScroll)