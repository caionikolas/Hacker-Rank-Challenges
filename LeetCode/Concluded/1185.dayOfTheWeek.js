var dayOfTheWeek = function(day, month, year) {

  if (month == 1){
    month = 13
    year--
  }

  if (month == 2){
    month = 14
    year--
  }

  let D = day + 2*month + (parseInt((3*(month+1))/5))+year+parseInt(year/4)-parseInt(year/100)+parseInt(year/400)+2

  let i = parseInt(D%7)

  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  return days[i]
};
