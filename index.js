let logo = document.querySelector(".logo-img");
console.log(logo);

logo.addEventListener("click", whenClicked)

function whenClicked(){
    // document.querySelector('.subtext').textContent = "theory will take you only so far";
    const visibility = logo.getAttribute('data-visible');
    if (visibility === "true"){
        document.querySelector('.subtext').textContent = "theory will take you only so far";
        logo.setAttribute('data-visible', 'false');
    } else {
        document.querySelector('.subtext').textContent = "quantum physics made easy";
        logo.setAttribute('data-visible', "true");
    }
}

