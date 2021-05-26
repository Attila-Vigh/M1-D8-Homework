// document.querySelector("body").style.backgroundColor = "black"


/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/
const changeTitle = function (newTitle) {
    let h1 = document.querySelector("h1")   // Get the first h1
    
    h1.innerText = newTitle                 // Assing to property innerText the value which will come wihtin the parameter
};
changeTitle("M1-D8-Homework")               // test -> call the function wiht a paratmeter


/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

const addClassToTitle = function () {
    let h1 = document.querySelector("h1")   // Get the first h1

    h1.classList.toggle("myHeading")        // on element h1 property calssList call method toggle to add a new class "myHeading" or remove it
};
addClassToTitle()                           // call it first time to add the class "myHeading" in the h1 element
addClassToTitle()                           // call it second time to remove the class "myHeading" in the h1 element
// addClassToTitle()

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function (newParagraph) {
    let pChidrenOfDiv = document.querySelectorAll("div>p")     // Get all the children pragraphs of divs
    
    for (const p of pChidrenOfDiv)                             // Take the pargraphs one by one by looping over the list of paragraphs
        p.innerText = newParagraph                             // On the current paragraph assing a new value to property innerText
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
    let secondList = document.querySelector("#secondList")                // Get the undordered list 

    secondList.insertAdjacentHTML('beforeend', `<li>${content}</li>` )    // Insert a new item at the end of the list
};
addToTheSecond("New contet added into the second list")                   // -> call function addToTheSecond with a string parameter

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function () {
    let furstParagraphAfterDiv = document.querySelector("div>p")                                                                  // Get the first paragraph
    
    for (let i = 1; i <= 5; i++)                                                                                                  // This loop has been created to check if the five paragraphs will be added from top to bottom
    furstParagraphAfterDiv.insertAdjacentHTML('afterend', `<p>It should add 5 paragraphs conting back from the last ${i}</p>`)    // A new paragraph is inserted after furstParagraphAfterDiv
};
addParagraph()

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
    let firstList = document.querySelector("#firstList")   // Grab the first list

    firstList.style.display = "none"                       // set the atribute style.display to "none"
};
firstUlDisappear()

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function () {
    let AllUl = document.querySelectorAll("ul")     // Get all unordered lists and put them in a box

    for (const ul of AllUl)                         // Then get the unordered lists and loop trough, get them one by one
        ul.style.backgroundColor = "green"          // On each ul on the style property on background-color proterty assing a green color
};
paintItGreen()

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
    let header = document.querySelector("header")                           // Get the header element 

    header.onclick = function () {                                          // On the header element assing an anonymus function to onclick property
        let color = "#" +  Math.floor(Math.random()*16777215).toString(16)  // Get a random color
        
        header.style.backgroundColor = color                                // Add the new color to the background color of the header
    }
}
makeItClickable()

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
    let footer = document.querySelector("footer")                               // Get the footer element 
    
    footer.onclick = () => footer.innerText = "This is your new footer!!!!"      // On the footer element assing an anonymus function to onclick proper which will replace the value of innerText
};
changeFooterText()

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = () => { 
    const inputField = document.getElementById("input-field")          // Grab the input value 

    const inputFieldValueConsoleLoged = () => console.log( inputField.value)        // console log the value of the input field
                                                                                    // The next 2 lines of code do the same thing different approach
    inputField.onkeyup = inputFieldValueConsoleLoged                                // Inputfield's property onkeyup is assing the function which will console log the value of the input field 
    inputField.addEventListener( "keyup", inputFieldValueConsoleLoged)              // Inputfield's method is call to add on the keyup event-property a new function to console log the value of the input field
}  
/* 
!   It can be observed the different naming of the 
!   event property: onkeyup == keyup 
!   they are similar but not identical
!   they cannot be used interchangeably
*/
inputField()


/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
    // alert("Page succesfully loadded!")      // This line of code has been commented to avoid the alert warning on every reload of the page
};


/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/