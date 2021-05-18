var time = 0;
var running = 0;
function startPause() {
  if(running == 0){
    running = 1;
    increment();
    document.getElementById('start').innerHTML = "Pause"
    document.getElementById('startPause').style.backgroundColor = 'red';
    document.getElementById('startPause').style.border = '1px solid black';
  }else{
    running = 0;
    document.getElementById('start').innerHTML = "Resume"
    document.getElementById('startPause').style.backgroundColor = 'green';
    document.getElementById('startPause').style.borderColor = '1px solid black';
  }
}
function reset() {
  running = 0;
  document.getElementById('start').innerHTML = 'Start';
  document.getElementById('output').innerHTML = '0:00:00:00'
  document.getElementById('startPause').style.backgroundColor = 'greed';
  document.getElementById('startPause').style.borderColor = '1px solid black';
}
function increment(){
  if(running == 1){
    setTimeout(function(){
      time++;
      let mins = Math.floor(time/10/60);
      let secs = Math.floor(time/10%60);
      let hours = Math.floor(time/10/60/60);
      let tenth = time%10;
      if (mins < 10){
        mins = '0' + mins;
      }
      if(secs < 10){
        secs = '0' + secs;
      }
      document.getElementById('output').innerHTML = hours + ':' + mins + ':' + secs + ':' + tenth; + increment();
    },100)
  }
}


// ========================================================================== ======================================

// const watch = document.querySelectorAll('.watch');
// let milliseconds = 0;
// let timer;

// const startWatch = () => {
//   watch.classList.remove('pause');
//   clearInterval(timer);
//   timer = setInterval(()=>{
//     milliseconds += 10;
//     let dateTimer = new Date(milliseconds);
//     watch.innerHTML = 
//     ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
//     ('0'+dateTimer.getMinutes()).slice(-2) + ':' +
//     ('0'+dateTimer.getSeconds()).slce(-2)+ ':' +
//     ('0'+dateTimer.getMilliseconds()).slice(-3,-1);
//   },10)
// };
// const pauseWatch = () => {
//   watch.classlist.add('pause');
//   clearInterval(timer);
// }
// const resetWatch = () => {
//   watch.classlist.add('pause');
//   clearInterval(timer);
//   milliseconds = 0;
//   watch.innerHTML = '00:00:00';
// };
// document.addEventListener('click', (e)=>{
//   const element = e.target;
//   if(element.id == 'start') startWatch();
//   if(element.id == 'pause') pauseWatch();
//   if(element.id == 'reset') resetWatch();
// })
