function nextPage() {
    window.location.href = "./yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

const onClick=document.getElementById("noButton").addEventListener('mouseover',moveButton);
const yesBtn = document.getElementById("yesButton").addEventListener('click', nextPage);