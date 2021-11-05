/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    let result = 0;
    let preNum = map.get(s[0])
    for(let i = 1; i<s.length; i++){
        if(preNum < map.get(s[i])) {
            result -= preNum
        }else{
            result += preNum
        }
        preNum = map.get(s[i])
    }
    result += preNum
    return result;
};


var romanToIntObject = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    let preNum = map[s[0]]
    for(let i = 1; i<s.length; i++){
        if(preNum < map[s[i]]) {
            result -= preNum
        }else{
            result += preNum
        }
        preNum = map[s[i]]
    }
    result += preNum
    return result;
};

console.log(romanToInt('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCMXCIV'))
