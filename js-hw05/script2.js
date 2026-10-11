class ExtendedDate extends Date {
  getFormattedDateText() {
    const months = [
      'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
      'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    return `${this.getDate()} ${months[this.getMonth()]}`;
  }

  isFutureOrCurrent() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const currentDate = new Date(this.getTime());
    currentDate.setHours(0, 0, 0, 0);

    return currentDate >= today;
  }

  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  getNextDate() {
    const nextDate = new ExtendedDate(this.getTime());
    nextDate.setDate(this.getDate() + 1);
    return nextDate;
  }
}

const myDate = new ExtendedDate(2030, 1, 2);

console.log("Дата текстом:", myDate.getFormattedDateText());
console.log("Майбутня або поточна дата?:", myDate.isFutureOrCurrent());
console.log("Чи високосний рік?:", myDate.isLeapYear());

const nextDay = myDate.getNextDate();
console.log("Наступна дата текстом:", nextDay.getFormattedDateText());
