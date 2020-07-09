import axios from 'axios'

let nameVar = 'https://api.github.com/users/timotheemcdonald'


console.log(nameVar)
console.log(axios.get(nameVar))

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


function cardMaker(object){
  const card = document.createElement('div')
  const portrait = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profilePage = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(portrait)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profilePage)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  card.className = 'card'
  cardInfo.className = 'card-info'
  name.className = 'name'
  userName.className = 'username'

  portrait.src = object.avatar_url
  name.textContent = object.name
  userName.textContent = object.login
  location.textContent = object.location
  followers.textContent = object.followers
  following.textContent = object.following
  bio.textContent = object.bio

  return card
}

let cardS = document.querySelector('.cards')
// cardS.appendChild(cardMaker(nameVar))

axios.get(nameVar)
.then(function (value){
  console.log('inside the function happy path', nameVar)
let newCard = value.data
cardS.appendChild(cardMaker(newCard))
console.log('happy path')
})
.catch(function (error){
console.log('sad path')
})

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach( value => {

  const info = `https://api.github.com/users/${value}`
  axios.get(info)
  .then(function (object){
    console.log('happy follower path start')
    let newCardS = object.data
    cardS.appendChild(cardMaker(newCardS))
    console.log('happy follower path finish')
  })
  .catch(function (error){
    console.log('sad follower path')
  })

})

// function followersTest(fName){
  
//   const followerName =  `https://api.github.com/users/${fName}`
//   axios.get(followerName)

//   followersArray.forEach(info => {
//     const cards = cardMaker(info)
//     cardS.appendChild(cards)
//   })
// }


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
