const img = document.getElementById("img");
const next = document.getElementById("Next");
const prev = document.getElementById("Previous");
const auto = document.getElementById("Autoplay");
const stop = document.getElementById("Stopauto");

let arrImg = [
  "https://images.unsplash.com/photo-1751885276975-a7d2288723d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1751837184233-b26fa8444e4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1750939042604-e3fad18f8830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1751670346016-bda0dc756da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1749497683197-ae96f3cb92f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
];

let currIndex = 0;
let id;

function Images(index) {
  img.src = arrImg[index];
}

Images(currIndex);

function NextImg() {
  if (currIndex < arrImg.length - 1) {
    currIndex++;
    Images(currIndex);
  } else {
    currIndex = 0;
    Images(currIndex);
  }
}

next.addEventListener("click", () => {
  NextImg();
});

function PrevImg() {
  if (currIndex > 0) {
    // 4>4
    currIndex--;
    Images(currIndex);
  }
}

prev.addEventListener("click", () => {
  PrevImg();
});

function AutoPlay() {
 id= setInterval(() => {
    if (currIndex < arrImg.length - 1) {
      currIndex++;
      Images(currIndex);
    } else {
      currIndex = 0;
      Images(currIndex);
    }
  },1000);
}

auto.addEventListener('click',()=>{
    AutoPlay()
})

function StopPlay(){
   clearInterval(id)
}

stop.addEventListener('click',()=>{
    StopPlay()
})
