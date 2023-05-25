import dogsData from "./data.js"
import Dog from "./Dog.js"

let likedDogs = []
let dog = getNewDog()

function getNewDog(){
    const nextDogData = dogsData.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function like(){
    if (dogsData.length){
        likedDogs.push(dog)
        document.getElementById("liked").classList.remove("hidden")
        renderHandler()
    } else {
        likedDogs.push(dog)
        document.getElementById("liked").classList.remove("hidden")
        displayResults()
    }
}

function dislike(){
    if (dogsData.length){
        document.getElementById("disliked").classList.remove("hidden")
        renderHandler()
    } else {
        document.getElementById("disliked").classList.remove("hidden")
        displayResults()
    }
}

function render(){
    document.getElementById("dog-profile").innerHTML = dog.getProfileHtml()
    document.getElementById("like-btn").blur()
    document.getElementById("dislike-btn").blur()
}

function renderHandler() {
    dog = getNewDog()
    setTimeout(()=>{
        render()
    }, 800)
}

function displayResults() {
    setTimeout(()=>{
        let matches = likedDogs.map((likedDog) => {
        return `
            <div class="end-card">
                <img src=${likedDog.avatar}>
                <h1>${likedDog.name}</h1>
            </div>`
        }).join('')
        
        if (likedDogs.length){
            document.body.innerHTML = `
            <h2>Your matches:</h2>
            <div class="your-matches">
                ${matches}
            </div>`
        } else {
            document.body.innerHTML = `
            <div class="no-matches">
                <img src="images/no.jpg"
            </div>`
        }
    }, 800)
}

document.getElementById("like-btn").addEventListener("click", like)
document.getElementById("dislike-btn").addEventListener("click", dislike)
document.getElementById("reload-btn").addEventListener("click", ()=>{
    location.reload()
})

render()
