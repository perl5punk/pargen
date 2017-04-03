
function WordPusher(words)
{
    this.words = words;
}

WordPusher.prototype.__getRandomNumber = function(min, max)
{
    min = Math.ceil(min) || 0;
    max = max || (this.words.length-1);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};

WordPusher.prototype.get = function(index)
{
    return this.words[index];
};

WordPusher.prototype.getAll = function()
{
    return this.words;
};

WordPusher.prototype.getRandom = function()
{
    var word = this.words[this.__getRandomNumber()];
    return word.substr(0,1).toUpperCase()+word.substr(1);
};


module.exports = {

    style: new WordPusher([
        'chrome',
        'nickle-plated'
    ]),
    modifiers: new WordPusher([
        'actuating',
        'lactator'
    ]),

    prefix: new WordPusher([
        '',
        '',
        '',
        '',
        'articulating',
        'viscous',
        'captive',
        'vacuum',
        'impulse',
        'expansion',
        'magnetic',
        'prefill',
        'backing',
        'primary',
        'secondary',
        'doubling',
        'venting'
    ]),
    adjectives: new WordPusher([
        'chamber',
        'support',
        'throttle',
        'crank',
        'disc',
        'flange',
        'cam',
        'mounting',
        'pulley',
        'fuel',
        'screen',
        'gimbal',
        'bypass',
        'brake',
        'door',
        'window',
        'muffler'
    ]),
    verbs: new WordPusher([
        'actuator',
        'tube',
        'converter',
        'articulator',
        'extension',
        'shield',
        'reducer',
        'rod',
        'filter',
        'adapter',
        'manifold',
        'knob',
        'valve',
        'pump',
        'injector',
        'dissapator',
        'arm',
        'body',
        'vane',
        'regulator',
        'nozzle',
        'seal',
        'drain',
        'inductor',
        'shunt',
        'leaver',
        'plug',
        'shoe',
        'bearing'
    ])

};
