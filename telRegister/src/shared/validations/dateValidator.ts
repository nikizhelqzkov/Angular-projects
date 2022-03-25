import { AbstractControl } from '@angular/forms';

export function ValidateDateOfBirth(control: AbstractControl) {
  const dateNow = new Date();
  const invalid = { invalidDate: 'Date of Birth have to be before today date' };
  const [dayNow, monthNow, yearNow] = [
    dateNow.getDay(),
    dateNow.getMonth(),
    dateNow.getFullYear(),
  ];
  const currentDate = new Date(control.value);
  const [currentDay, currentMonth, currentYear] = [
    currentDate.getDay(),
    currentDate.getMonth(),
    currentDate.getFullYear(),
  ];
  if (currentYear > yearNow) {
    return invalid;
  } else if (currentYear === yearNow) {
    if (currentMonth > monthNow) {
      return invalid;
    } else if (currentMonth === monthNow) {
      return currentDay <= dayNow ? null : invalid;
    }
  }
  return null;
}
