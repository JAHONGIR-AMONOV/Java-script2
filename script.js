let guestList = 'putin biden zeleskiy erdogan kimchenin Mirziyoyev'.toLowerCase();

let guestName = prompt('Добро пожаловать! Как вас зовут?').toLowerCase(); 

if (guestList.includes(guestName)) {
  alert('Добро пожаловать, ' + guestName + '! Мы рады видеть вас!');
} else {
  alert('К сожалению, ' + guestName + ', вас нет в списке гостей.');
}