let myHeading = document.querySelector('h1');
myHeading.textContent = 'Born to kill British!';
let myBrother = document.querySelector('img');
myBrother.onclick = function() {
    let mySrc = myBrother.getAttribute('src');
    if(mySrc === 'https://cdn.shopify.com/s/files/1/0276/0635/1961/articles/medieval-viking-with-axe-and-helmet-in-dark-backgr-2021-08-30-03-14-35-utc_1_2000x.jpg?v=1649236189'){
        myBrother.setAttribute('src','https://c8.alamy.com/comp/AG7WWN/turanian-of-finland-in-ancient-dress-similar-to-that-of-the-celts-AG7WWN.jpg');
} else {
    myBrother.setAttribute('src','https://cdn.shopify.com/s/files/1/0276/0635/1961/articles/medieval-viking-with-axe-and-helmet-in-dark-backgr-2021-08-30-03-14-35-utc_1_2000x.jpg?v=1649236189');
}
}
let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Celtish Kingdom!' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Celtish Kingdom!' + storedName;
}
myButton.onclick = function() {
    setUserName();
}