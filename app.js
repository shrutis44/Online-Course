let slider = document.querySelector('.carousel .list');
let items = document.querySelectorAll('.carousel .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.carousel .dots li');




let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}


document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(refreshInterval);
});


document.querySelector('.carousel').addEventListener('mouseleave', () => {
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000); 
});



let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.carousel .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};









const feedbackMessages = ["Terrible", "Bad", "Good", "Best", "Excellent"];

const starContainers = document.querySelectorAll('.star-container');
const message = document.getElementById('message');
let selectedRating = 0;  

function updateStarsOnHover(rating) {
  starContainers.forEach((star, index) => {
    if (index < rating) {
      star.querySelector('.fa-star').classList.add('fa-solid', 'active');
      star.querySelector('.fa-star').classList.remove('fa-regular', 'inactive');
    } else {
      star.querySelector('.fa-star').classList.remove('fa-solid', 'active');
      star.querySelector('.fa-star').classList.add('fa-regular', 'inactive');
    }
  });
  message.textContent = feedbackMessages[rating - 1] || "Rate Your Experience";
}

function selectRating(rating) {
  selectedRating = rating;
  updateStarsOnHover(rating);
  message.textContent = feedbackMessages[rating - 1];
}

starContainers.forEach((star, index) => {
  const rating = index + 1;

  star.addEventListener('mouseover', () => updateStarsOnHover(rating));


  star.addEventListener('click', () => selectRating(rating));

  
  star.addEventListener('mouseout', () => updateStarsOnHover(selectedRating || 0));
});


document.getElementById('submit').addEventListener('click', () => {
  if (selectedRating === 0) {
    alert('Please select a rating before submitting!');
  } else {
    alert(`You rated us: ${feedbackMessages[selectedRating - 1]}`);


    selectedRating = 0; 
    updateStarsOnHover(0); 
    location.reload(); 
  }
});












