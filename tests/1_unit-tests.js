const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
suite('function convertHandler.getNum(input)', ()=>{
    test('Whole number input', (done)=>{
    let input = '5gal';
    assert.equal(convertHandler.getNum(input), 5);
    done()
    });

    test('Decimal number input', (done)=>{
        let input = '5.5gal'

        assert.equal(convertHandler.getNum(input), 5.5);
        done()
    });

    test('fractional number input', (done)=>{
        let input = '5/5gal';
        let result = 5/5
        assert.equal(convertHandler.getNum(input), result);
        done();
    });

    test('fractional number input with decimal', (done)=>{
        let input = '5.5/5gal';
        let result = (5.5)/5;
        assert.equal(convertHandler.getNum(input), result);
        done();
    });

    test('error input', (done)=>{
        let input = '5/5/5gal';
        assert.isNaN(convertHandler.getNum(input));
        done();
    })

    test('no numerical input',(done)=>{
        let input = 'gal';
        assert.equal(convertHandler.getNum(input), 1);

        done();

    });
});

suite('function convertHandler.getUnit(input)', ()=>{
    test('return correct unit value',(done)=>{
        let input = '5gal'
        assert.equal(convertHandler.getUnit(input),'gal');

        done()
    });

    test('return error if invalid unit',(done)=>{
        let input = '5g';
        assert.equal(convertHandler.getUnit(input), undefined);

        done();
    });
});

suite('convertHandler.getReturnUnit(input)',()=>{
    test('return correct return unit', (done)=>{
        let input = 'gal';
        assert.equal(convertHandler.getReturnUnit(input), 'L');
        done();
    });
});

suite('convertHandler.spellOutUnit(input)',()=>{
    test('return spelledout unit',(done)=>{
        let input = 'gal';
        assert.equal(convertHandler.spellOutUnit(input),'gallons');
        done();
    })
});

suite('convertHandler.convert(initNum, initUnit)',()=>{
   
    test('converts gal to L',(done)=>{
        let initNum = 1;
        let gal = 'gal';
        assert.equal(convertHandler.convert(initNum, gal), 3.78541);
        done()

    })

    test('converts L to gal',(done)=>{
        let initNum = 1;
        let l = 'L';
        let lToGal = 1/3.78541;
        assert.equal(convertHandler.convert(initNum, l), lToGal.toFixed(5));
        done()

    });

    test('converts mi to km',(done)=>{
        let initNum = 1;
        let mi = 'mi';
        assert.equal(convertHandler.convert(initNum, mi), 1.60934);
        done()

    })

    test('converts km to mi',(done)=>{
        let initNum = 1;
        let km = 'km';
        let kmToMi = 1/1.60934;
        assert.equal(convertHandler.convert(initNum, km), kmToMi.toFixed(5));
        done()

    })

    test('converts lbs to kg',(done)=>{
        let initNum = 1;
        let lbs = 'lbs';
        assert.equal(convertHandler.convert(initNum, lbs), 0.45359);
        done()

    });

    test('converts kg to lbs',(done)=>{
        let initNum = 1;
        let kg = 'kg';
        let kgToLbs = 1/0.453592;
        assert.equal(convertHandler.convert(initNum, kg), kgToLbs.toFixed(5));
        done()

    });

    

})
});