let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for (values in statistics){
   let  x = (statistics[values]%2);
   if (values[0]=='r' || x != 0 ){
       console.log(statistics[values]);
    }
}