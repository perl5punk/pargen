
var PartName = require('./part-name');

function Generator(options)
{
    options = options || {};
    var defaults = {
        priceMin: 1,
        priceMax: 99,
        partNumber: true
    };
    this.options = Object.assign(defaults,options);

    this.__usedPartNumbers = [];
}

Generator.prototype.__randNum = function (min, max)
{
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};

Generator.prototype.number = function (prefix)
{
    var partNumber = null;
    while (partNumber === null || this.__usedPartNumbers.indexOf(partNumber) > 0)
    {
        partNumber = prefix+this.__randNum(1001,999999);
    }
    this.__usedPartNumbers.push(partNumber);
    return partNumber;
};

Generator.prototype.price = function (min, max)
{
    min = min || this.options.priceMin;
    max = max || this.options.priceMax;
    return this.__randNum(min, max);
};

Generator.prototype.description = function ()
{
    return 'TODO; do something here';
};

Generator.prototype.part = function ()
{
    var partName = new PartName();
    return {
        name: partName.get(),
        nameParts: partName.getNameParts(),
        number: this.number(partName.get().substr(0,3).toUpperCase()),
        description: this.description(),
        price: this.price(),
        weight: null,
        shipping: null,
        color: null
    };
};

module.exports = { generate: new Generator() };