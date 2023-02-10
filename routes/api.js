'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res)=>{
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let unitInit = convertHandler.spellOutUnit(initUnit);
    let unitReturn = convertHandler.spellOutUnit(returnUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let string = convertHandler.getString(initNum, unitInit, returnNum, unitReturn);

 console.log(initUnit)
    if (isNaN(initNum) && returnUnit === null){
      res.send('invalid number and unit')
    }
else if (isNaN(initNum)){
res.send('invalid number')
} else if (returnUnit === null){
  res.send('invalid unit')
} else {
console.log(initNum)
    res.send({
      initNum:initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string
    })
  }
  })

};
