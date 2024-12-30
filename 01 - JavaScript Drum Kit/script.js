
// play associated sound
function handleKeys(event) {
    console.log(`The code is ${event.code} and the key is: ${event.key} `)
    const keyCode = event.keyCode
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (audioElement) {
        console.log("Audio element found:", audioElement);
        audioElement.play();
    } else {
        console.log("No audio element found for data-key:", keyCode);
    }

}

document.addEventListener("keydown",handleKeys);



// add style while playing sound
const audioElements = document.querySelectorAll("audio");
audioElements.forEach((audio) => {
    const dataKey = audio.dataset.key;

    const letterBox =  document.querySelector(`div[data-key="${dataKey}"]`);

    audio.addEventListener("play", () =>{
        letterBox.classList.add("playing")
    })

    audio.addEventListener("ended", () =>{
        letterBox.classList.remove("playing")
    })
})

