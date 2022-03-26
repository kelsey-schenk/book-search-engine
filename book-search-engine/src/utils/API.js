export const getUser = (token) => {
    return fetch('/api/users/user', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        }
    })
}

export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
}