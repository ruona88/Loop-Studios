/*This section for navigation in mobile devices*/
//Select Hamburger, ol and li tags
const hamburger = document.getElementsByClassName("hamburger")[0];
const mobileNav = document.getElementsByTagName("ol")[0];
const listItems = document.getElementsByTagName("li");

//function to toggle classList for the hamburger
const toggleHamburger = function () {
    hamburger.classList.toggle("active");
}

const showNav = function () {
    mobileNav.classList.toggle("active");
}

//Add eventlistener to the hamburger to show the navigation menu and change hamburger bars to X
hamburger.addEventListener("click", () => {
    toggleHamburger();
    showNav();
})

//AddEvent listener to the list items to remove active class from the hamburger and the OL
for(let items of listItems) {
    items.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("active");
    })
}