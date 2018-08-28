const clockface = document.querySelector(".time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
const listItem = document.querySelector(".js-laps");


startBtn.addEventListener('click', handleStartBtnClick);
resetBtn.addEventListener('click', handleResetTimer);
lapBtn.addEventListener('click', handleAddItem);


const timer = {
  startTime: null,
  deltaTime: 0,
  id: null,
  isActive: false,
   start() {
    if (this.isActive) return;

    this.isActive = true;
    this.startTime = Date.now();

    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      updateClockface(this.deltaTime);
    }, 100);
  },
  stop() {
    clearInterval(this.id);
    this.isActive = false;
  },
 pause(){
    updateClockface(this.deltaTime);
 },
  continue(){   
   if (this.isActive) return;
    this.isActive = true;
    this.textContent = 'Pause';
    this.id = setInterval(() => {
    const currentTime = Date.now();
    this.deltaTime = currentTime - this.startTime + this.deltaTime;
    updateClockface(this.deltaTime);
    }, 100); 

  }, 
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

function handleStartBtnClick (){
  if (!timer.isActive && !startBtn.hasAttribute('data-set')) {
      timer.start();
      this.textContent = 'Pause';
      timer.pause();
      resetBtn.disabled = false;
   } else if (!timer.isActive && startBtn.hasAttribute('data-set')){
      timer.continue();
      this.textContent = 'Pause';
      resetBtn.disabled = false;
  }else{
    timer.stop();
    this.textContent = 'Continue';
    startBtn.setAttribute('data-set', 'active-pause'); 
}

}

function handleResetTimer (){
  timer.reset();
  startBtn.textContent = 'Start';
  if (!timer.isActive || startBtn.hasAttribute('[data-set = active-pause]')){
      resetBtn.disabled = true;
  }else {
    resetBtn.disabled = false;
    timer.isActive = true;
  }
}

function handleAddItem(){
    const item = document.createElement('li');
    item.innerHTML = getFormattedTime(timer.deltaTime);
    listItem.appendChild(item);
}

function getFormattedTime(time){
  const date = new Date(time);
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const mseconds = String(date.getMilliseconds()).slice(0, 1);

  return`${minutes}:${seconds}.${mseconds}`;
}

function updateClockface(time) {
  const formattedTime = getFormattedTime(time);
   clockface.textContent = formattedTime;
}