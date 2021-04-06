function scuberGreetingForFeet(feet){

  let greeting;

  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let msg;
  switch (tip) {
    case 'generous':
      msg = 'Thank you so much.';
     break;
    case 'not as generous':
      msg = 'Thank you.';
     break;
    default:
      msg = 'Bye.'    
  }
  return msg;
}