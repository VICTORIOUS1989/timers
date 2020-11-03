
let alarms = process.argv;
alarms.splice(0,2);
alarms.sort();

      for (let item in alarms) {
      if (item >= 0 && item !== NaN)  {
        setTimeout(() => {
          process.stdout.write('\x07');
        } , item * 1000);
        }
    }
//console.log(alarms);


//process.stdout.write('\x07');


