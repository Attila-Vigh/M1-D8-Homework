// document.querySelector("body").style.backgroundColor = "black"


/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/
const changeTitle = function (newTitle) {
    let h1 = document.querySelector("h1")
    
    h1.innerText = newTitle
};
changeTitle("M1-D8-Homework")


/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

const addClassToTitle = function () {
    let h1 = document.querySelector("h1")

    h1.classList.toggle("myHeading")
};
addClassToTitle()
// addClassToTitle()

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function (newParagraph) {
    let pChidrenOfDiv = document.querySelectorAll("div>p")
    
    for (const p of pChidrenOfDiv)
        p.innerText = newParagraph
};
changePcontent("New pragraph added via Javascript")

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
    let links = document.querySelectorAll("a")  // Get all links
    
    for (const link of links)                   // Loop over each link
        link.href = "https://www.google.com"    // On the current link repace the current value of the attribute/property href with a new value called "https://www.google.com"
};
changeUrls()

/* EXERCISE 5
Write a function for adding a new item in the second list.
*/

const addToTheSecond = function (content) {
    let secondList = document.querySelector("ul#secondList")

    secondList.insertAdjacentHTML('beforeend', `<li>${content}</li>` )
};
addToTheSecond("New contet added into the second list")

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function () {
    let divp = document.querySelector("div>p")
    
    for (let i = 1; i <= 5; i++) 
        divp.insertAdjacentHTML('afterend', `<p>It should add 5 paragraphs conting back from the last ${i}</p>`)
};
addParagraph()

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
    let firstList = document.querySelector("#firstList")

    firstList.style.display = "none"
};
firstUlDisappear()

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function () {
    let AllUl = document.querySelectorAll("ul")

    for (const ul of AllUl)
        ul.style.backgroundColor = "green"
};
paintItGreen()

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
    let header = document.querySelector("header")

    header.onclick = function () {
        let color = "#" +  Math.floor(Math.random()*16777215).toString(16)
        
        header.style.backgroundColor = color
    }
}
makeItClickable()

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
    let footer = document.querySelector("footer")
    
    footer.onclick = () => footer.innerText = "This is your new footer!!!!"
};
changeFooterText()

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = () => { 
    const inputField = document.getElementById("input-field")

    const inputFieldValue = () => console.log( inputField.value)
    
    inputField.onkeyup = inputFieldValue
    inputField.addEventListener( "keyup", inputFieldValue)
}
inputField()


/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
    // alert("Page succesfully loadded!")
};


/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/