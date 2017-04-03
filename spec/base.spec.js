
var assert      = require('assert');

var pargen      = require('../core');

describe('single part creation',function(){


    var testPart = pargen.generate.part();


    it('part properties',function(){

        assert.equal(Object.keys(testPart).join('-'),'name-nameParts-number-description-price-weight-shipping-color','part missing or had unexpected properties, got \''+testPart+'\'');

    });


});

describe('generate many parts creation',function() {

    it('generate',function(){

        for (var i = 0; i < 500; i++)
        {
            var part = pargen.generate.part();
            console.warn(part.name + ' ('+part.number+') $'+part.price);
            assert(part.name.length > 0,2,'Expected a part name, got nothing');
        }

    });

});