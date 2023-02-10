function ConvertHandler() {
  
  this.getNum = function(input) {
    let regex = /\d+\.*\d*|\//g;
    let result = input.match(regex);
    if (!result){
      result = 1;
      return result
    } else {
    if (result.length === 3){
    result = Number(result[0])/Number(result[2])
      return result
    } else {
      result = Number(result)
      if (result !== 0){
        return result
      } else {
        result = 1;

        return result;
      }
    }
  }
  };
  
  this.getUnit = function(input) {
    if (!(/\dL$|^L$/i).test(input)){
      let regel =/[^\d]*$/
    let regex = /^lbs$|^kg$|^mi$|^km$|^gal$/i
    let regy = input.match(regel).join()
    if (regy.match(regex)){
    let initUnit = regy.match(regex).join().toLowerCase();
    
    return initUnit
    }
    } else {
      initUnit ='L'

      return initUnit

    }
   
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if((/kg/i).test(initUnit)){
      result = 'lbs'

      return result

    } else if ((/lbs/i).test(initUnit)){
      result = 'kg'

      return result

    } else if ((/gal/i).test(initUnit)){
      result = 'L'

      return result

    } else if (initUnit === 'L'){
      result = 'gal'

      return result
    } else if((/km/i).test(initUnit)){
      result = 'mi'

      return result
    } else if ((/mi/i).test(initUnit)){
      result = 'km'

      return result

    } else {
      return null

    }
    
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (unit === 'gal'){
     result ='gallons';

     return result;
    } else if (unit === 'L'){
      result = 'liters';

      return result;
    } else if (unit === 'kg'){
      result = 'kilograms'

      return result;
    } else if (unit === 'lbs'){
      result = 'pounds'

      return result;
    } else if (unit === 'km'){
      result = 'kilometers'

      return result;

    } else if (unit === 'mi'){
      result = 'miles';

      return result;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initUnit === 'km'){
      result = initNum/miToKm
      return Number(result.toFixed(5))

    } else if (initUnit === 'mi'){
      result = initNum * miToKm

      return Number(result.toFixed(5))
    } else if (initUnit === 'gal'){
      result = initNum * galToL

      return Number(result.toFixed(5))
    } else if (initUnit === 'L'){
      result = initNum/galToL;

      return Number(result.toFixed(5))
    } else if (initUnit === 'lbs'){
      result = initNum * lbsToKg;

      return Number(result.toFixed(5))
    } else if (initUnit === 'kg'){
      result = initNum/lbsToKg;

      return Number(result.toFixed(5))
    }
    
    
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
