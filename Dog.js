import dogsData from "./data.js"

class Dog {
    constructor(data) {
        Object.assign(this, data)
        // properties
        
        
    }
    // methods
    
    getProfileHtml() {
        const {name, avatar, age, bio} = this
        return `
        <div class="dog-card"> 
            <img src=${avatar}>
            <div class="dog-info">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
            <img src="images/badge-like.png" class="like-badge hidden" id="liked">
            <img src="images/badge-nope.png" class="dislike-badge hidden" id="disliked">
        </div>`
    }
}

export default Dog

