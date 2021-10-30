const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 6;
    break;
    case 'wednesday':
    return 10;
    break;
    case 'thursday':
    return 5;
    break;
    case 'friday':
    return 16;
    break;
    case 'saturday':
    return 4
    break;
    case 'sunday':
    return 9;
    break;
    default:
    return 'Error!'
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!') 
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You got an extra ' + (actualSleepHours - idealSleepHours) + ' hours of sleep this week this week!')
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less of sleep  than you should have this week!')
    } else {
      console.log("error!")
    };
};

calculateSleepDebt()






















