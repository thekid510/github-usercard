/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = ['tetondan','dustinmyers', 'tsml', 'luishrd', 'bigknell'];
import axios from 'axios';

axios
.get("https://api.github.com/users/thekid510")
.then((res) => {
const entryPoint = document.querySelector(".cards");
entryPoint.append(cardMaker(res.data))
cardMaker(res.data);
})
.catch((err) =>{
console.log(err);
});




// ### Part 1: Requesting Data from the GitHub API
/*x
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

function cardMaker(obj){
  const gitCard = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const gitname = document.createElement("h3");
  const gituser = document.createElement("p");
  const gitlocation = document.createElement("p");
  const gitprofile = document.createElement("p");
  const link = document.createElement("a");
  const gitfollowers = document.createElement("p");
  const gitfollowing = document.createElement("p");
  const gitbio = document.createElement('p');

  gitname.textContent = `${obj.name}`;
  image.src= obj.avatar_url;
  gitCard.classList.add("card");
  cardInfo.classList.add("card-info");
  gitname.classList.add("name");
  gituser.classList.add("username");

  gituser.textContent = obj.login;
  gitlocation.textContent = `Location: ${obj.location}`;
  gitprofile.textContent = `Profile:`
  gitfollowers.textContent = `Followers: ${obj.followers}`;
  gitfollowing.textContent = `Following: ${obj.following}`;
  gitbio.textContent = `Bio: ${obj.bio}`;
  link.setAttribute(`href`, obj.url);
  link.textContent = 'url'

  gitCard.append(image);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(gitname);
  cardInfo.appendChild(gituser);
  cardInfo.appendChild(gitlocation);
  cardInfo.appendChild(gitprofile);
  cardInfo.appendChild(gitfollowers);
  cardInfo.appendChild(gitfollowing);
  gitprofile.appendChild(link);

  return gitCard;
}
axios
.get(`https://api.github.com/users/`)
.then(resp =>{
  const newCards = resp.data.gitCard;
 images.forEach(image => {
   const dogCard  = cardMaker(obj);
   
   entryPoint.append(gitCard);
 });
})
.catch((err) => {
  debugger;
})
  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

  //   <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
