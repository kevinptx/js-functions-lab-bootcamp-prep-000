function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
happyHolidaysTo("Kevin")

function happyHolidaysTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
happyHolidaysTo("Christmas", "Kevin")

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
happyHolidaysTo("Thanksgiving", "60")
