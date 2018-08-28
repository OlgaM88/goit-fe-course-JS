const clockface = document.querySelector(".time");
const startBtn = document.querySelector(".js-start");
/*const stopBtn = document.querySelector(".js-stop");*/

startBtn.addEventListener('click', handleStartBtnClick);

/*stopBtn.addEventListener('click', handleStopBtnClick);*/

const timer = {
  startTime: null,
  deltaTime: 0,
  newTime: null,
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
    this.deltaTime = this.newTime;
    updateClockface(this.deltaTime);
 },
  continue(){   
   if (this.isActive) return;
    this.isActive = true;
    this.textContent = 'Pause';
    this.id = setInterval(() => {
    const currentTime = Date.now();
    this.deltaTime = currentTime - this.newTime;
    updateClockface(this.deltaTime);
    }, 100); 

  }, 
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

startBtn.addEventListener('click', setActiveBtn);

/*stopBtn.addEventListener('click', setActiveBtn);*/

function setActiveBtn ({target}){
  const nodeName = target.nodeName;
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(el => 
    {if (el != target) {
      el.classList.remove('active');
    if(nodeName == 'BUTTON'){
       target.classList.add('active'); 
  } 
  }
  }
  )}
  
function handleStartBtnClick (){
  if (!timer.isActive && !startBtn.hasAttribute('data-set')) {
      timer.start();
      this.textContent = 'Pause';
      timer.pause();
   } else if (!timer.isActive && startBtn.hasAttribute('data-set')){
      timer.continue();
      this.textContent = 'Pause';
  }else{
    timer.stop();
    this.newTime = Date.now();
    console.log(this.newTime);
    this.textContent = 'Continue';
    startBtn.setAttribute('data-set', 'active-pause'); 
}
}

function handleStopBtnClick (){
  timer.reset();
  startBtn.textContent = 'Start';
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