/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
    Monday ,
    Tuesday ,
    Wednesday ,
    Thursday ,
    Friday ,
    Saturday ,
    Sunday ,
}

const isWeekend = (weekDay: WeekDays): boolean => {
 return  weekDay === WeekDays.Saturday || weekDay === WeekDays.Sunday

};

