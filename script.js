// Simple like toggle functionality
document.querySelectorAll('.like').forEach(likeButton => {
    likeButton.addEventListener('click', function () {
        if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            this.textContent = '❤️';
        } else {
            this.classList.add('liked');
            this.textContent = '💖';
        }
    });
});

// Simple comment and share click functionality
document.querySelectorAll('.comment').forEach(commentButton => {
    commentButton.addEventListener('click', function () {
        alert('Comment functionality coming soon!');
    });
});

document.querySelectorAll('.share').forEach(shareButton => {
    shareButton.addEventListener('click', function () {
        alert('Share functionality coming soon!');
    });
});

//Navbar Function
const navbarcontainer = document.querySelector(".navbar-container");
function navbar_slide_on(){
   navbarcontainer.style.left = "0px";
}

function navbar_slide_off(){
    navbarcontainer.style.l eft = "-800px";
}
