
var words = require('./words');

function PartName()
{

    this.prefix = words.prefix.getRandom();
    this.adjective = words.adjectives.getRandom();
    this.verb = words.verbs.getRandom();

}

PartName.prototype.get = function()
{
    var parts = [this.prefix,this.adjective,this.verb];
    return parts.join(' ').trim();
};

PartName.prototype.getNameParts = function()
{
    return { prefix: this.prefix, adjective: this.adjective, verb: this.verb };
};
module.exports = PartName;