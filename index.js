// document.querySelector("button").addEventListener("click" , handleClick); //handleClick() x why bcz we want it to happen when we want not every single time when the code runs

// function handleClick() {
//     alert("I got Clicked");
// }


let num = document.querySelectorAll(".drum").length;

for (let i = 0; i < num; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function()
    {
        let button = this.innerHTML;

        makesound(button);
        animation(button);
    }
    );
}

document.addEventListener("keydown" , function(event)
    {
        makesound(event.key);
        animation(event.key);
    }
)

function makesound(key) {
    switch (key) {
        case "w":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
        
        case "a":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
                snare.play();
        break;

        case "k":
            let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
        break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

    default:
        console.log(button);
        break;
    }
}

function animation(curkey) {
    let activated = document.querySelector("."+curkey);
    activated.classList.add("pressed");

    setTimeout(function() {
        activated.classList.remove("pressed");
    }, 100);
}