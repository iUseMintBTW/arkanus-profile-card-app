const tag = "brasino"
let profile = document.getElementById("profile")
let bubble = document.getElementById("bubble")
let aggressivity = 0;
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
    if (aggressivity + 1 > 3)
        aggressivity = 0;
    else
        aggressivity++;

    profile.src = `img/profile${aggressivity}.webp`;

    if (!isTimeoutSet)
    {
        setTimeout(() => {
            profile.src = `img/profile0.webp`;
            aggressivity = 0;
            isTimeoutSet = false;
        }, 5000)

        isTimeoutSet = true;
    }
}
