// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

/* 
    *MY NOTES*
*Older Method*  
const mainNav = document.getElementById("mainNav");
const divElems = document.getElementsByTagName("div");
const cardElems = document.getElementsByClassName("card")

    *Newer Method*
const queryMainNav = document.querySelector("#mainNav");
const queryDivElems = document.querySelectorAll("div");
const queryCardElems = document.querySelectorAll(".card");


console.log( "Successful!!")
*/
// A- finding across the entire DOM
const header = document.querySelector("header");
console.log(header);

const logoTitle = document.querySelector("#logoTitle");
console.log(logoTitle);

const firstCard = document.querySelector(".card");
console.log(firstCard); 

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
console.log(imageFirstCard);

const titleFirstCard = firstCard.querySelector("h2");
console.log(titleFirstCard);

const subtitleFirstCard = firstCard.querySelector("h3");
console.log(subtitleFirstCard);

const textFirstCard = firstCard.querySelector("p");
console.log(textFirstCard);


// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log(link1FirstCard);

const link2FirstCard = link1FirstCard.nextElementSibling;
console.log(link2FirstCard);



// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
console.log(links);
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));

/*
 links.forEach(function(link) {
    console.log(link.textContent); 
  
links.forEach(link => console.log(link.textContent);
 

for (let i = 0; i < links.length; i++) {
    newArr.push(links[i]);

}
return newArr;
  */

// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homelink = linksArr.find(link => link.textContent === "Home")
/*
- find => returns the first element which passes the condition, meets the criteria.
- filter => returns all elements which pass condition
- map => make some update to all elements of the array
- reduce => reduce the array to a singualr value
*/


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
    logoTitle.textContent = "Bloomtech K9s";
    titleFirstCard.textContent = "DOGGO Community!";
    subtitleFirstCard.textContent = "Expansion pass on Doggo tales";
    textFirstCard.textContent = "Dogs are love, sent from above, extra gloves for the hands of love!";
    link2FirstCard.textContent = "Dog Paradise!";
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute("href","https://pexels.com/search/dog");
link2FirstCard.href = "https://doggoipsum.com/";
imageFirstCard.src = "https://i.pinimg.com/474x/80/06/4a/80064a953ff89afe01fe9416980b531e.jpg";
logoTitle.className = "logo heading banana";

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
//  B- By manipulating inline styles on the element
header.style.fontSize = "4em";

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");//THIS HAS TO BE A DOM TAG!
blogLink.textContent = "Blog";
blogLink.href = "#";
blogLink.classList.add("menu-item")
document.querySelector("nav").appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);

document.querySelector(".card-group").appendChild(secondCard);
header.remove();
document.body.prepend(header);

const data = {
    "contact": {
     "contact-heading" : "Contact",
     "address" : "123 Paradise road, Chicago Illinois, USA",
     "phone" : "1(800) 000 0000",
     "email" : "paradiselanw@gmail.com",   
    }
}


const contactHeading= document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
