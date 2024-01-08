const tag = "brasino"
let profile = document.getElementById("profile")
let bubble = document.getElementById("bubble")
let aggressiveness = 0;
let isTimeoutSet = false;

function clipboard ()
{
    navigator.clipboard.writeText(tag);
    
    bubble.style.opacity = 1;
    setTimeout(() => {
        bubble.style.opacity = 0;
    }, 1000);
}

function easterEgg ()
{
    if (aggressiveness + 1 > 3)
        aggressiveness = 0;
    else
        aggressiveness++;

    profile.src = `img/profile${aggressiveness}.webp`;

    if (!isTimeoutSet)
    {
        setTimeout(() => {
            profile.src = `img/profile0.webp`;
            aggressiveness = 0;
            isTimeoutSet = false;
        }, 5000)

        isTimeoutSet = true;
    }
}
