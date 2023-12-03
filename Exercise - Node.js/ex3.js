const readData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userDate = await response.json()
    console.log(userDate)
}
readData()

console.log("Welcome to Node.js")