function findMatching(drivers, string){
    return drivers.filter(elem => elem.toLowerCase() === string.toLowerCase());
}
 function fuzzyMatch(drivers, string) {
     const match = drivers.filter(function(drivers){
         
         if( string === drivers.slice(0,2)){
             return(drivers);
         }
         else {
             return drivers === string
     }     
 })
 return match
}

  function matchName(drivers, string) {
     const driverName = drivers.filter(function(string){
         for(let object in drivers){
             if(string === drivers[0]){
         return drivers
     }else{
     return string === drivers[4]
     }
    }
});
return driverName
}
