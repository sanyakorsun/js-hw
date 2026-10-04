const time = {
  hours: 20,
  minutes: 45,
  seconds: 30
};

function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

function printTime(timeObj) {
  const h = formatNumber(timeObj.hours);
  const m = formatNumber(timeObj.minutes);
  const s = formatNumber(timeObj.seconds);

  console.log(`Поточний час: ${h}:${m}:${s}`);
}

function addSecondsToTime(timeObj, addedSeconds) {
  let totalSeconds = timeObj.hours * 3600 + timeObj.minutes * 60 + timeObj.seconds + addedSeconds;

  const SECONDS_IN_DAY = 86400;
  totalSeconds = ((totalSeconds % SECONDS_IN_DAY) + SECONDS_IN_DAY) % SECONDS_IN_DAY;

  timeObj.hours = Math.floor(totalSeconds / 3600);
  timeObj.minutes = Math.floor((totalSeconds % 3600) / 60);
  timeObj.seconds = totalSeconds % 60;
}

function changeSeconds(timeObj, seconds) {
  console.log(`\nЗміна часу на ${seconds} секунд`);
  addSecondsToTime(timeObj, seconds);
  printTime(timeObj);
}

function changeMinutes(timeObj, minutes) {
  console.log(`\nЗміна часу на ${minutes} хвилин`);
  addSecondsToTime(timeObj, minutes * 60);
  printTime(timeObj);
}

function changeHours(timeObj, hours) {
  console.log(`\nЗміна часу на ${hours} годин`);
  addSecondsToTime(timeObj, hours * 3600);
  printTime(timeObj);
}

printTime(time);
changeSeconds(time, 45);
changeMinutes(time, 20);
changeHours(time, 5);
