document.querySelector("body").style.backgroundColor = "black"


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
    let h1 = document.querySelector("div>p")
    
    h1.innerText = newParagraph
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
    let secondList = document.querySelector("#secondList")
    let li = document.createElement("LI")

    content = document.createTextNode(content)

    let listWithContent = li.appendChild(content)
    secondList.appendChild( listWithContent )
};
addToTheSecond("New contet added into the second list")

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function (content) {
    let div = document.querySelector("div")
    let p = document.createElement("p")

    content = document.createTextNode("This is the content of the new paragraph added to this div")

    let pWithContent = p.appendChild(content)
    div.appendChild( pWithContent )
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
//
};
// changeFooterText()

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
// ...
// inputField()


/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
//
};


/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/