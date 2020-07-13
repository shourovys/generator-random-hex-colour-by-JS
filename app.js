// take all DOM element
let changeButton = document.querySelector('.change-button')
let colourContainer = document.querySelector('.colour-container')
let body = document.querySelector('body')

// add Event Listener in changeButton
changeButton.addEventListener("click", changeColour)


// changeColour() function  Generate a random hexadecimal color & that change body colour 


function changeColour() {
    console.log('click');
    // Generate a random hexadecimal color code
    let random = (Math.random() * 0xfffff * 1000000).toString(16);
    let randomColour = '#' + random.slice(0, 6);

    // update DOM by javaScript
    colourContainer.innerHTML = randomColour

    // change colour
    body.style.backgroundColor = randomColour
    changeButton.style.color = randomColour
}
// call changeColour() for showing rendom body colour when page load
changeColour()