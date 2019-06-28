function _look_around(repeat = true) 
{
    misty.MoveHeadPosition(getRandomInt(-5, 5), getRandomInt(-5, 5), getRandomInt(-5, 5), 300);
    if (repeat) misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);
}
misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);

function gaussianRand() 
{    
    var u = v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0) return gaussianRand();
    return num;
}

function gaussianRandom(start, end) 
{
    return Math.floor(start + gaussianRand() * (end - start + 1));
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}