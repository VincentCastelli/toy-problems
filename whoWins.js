var players = {
    Ben: '5, 2',
    Amy: '4, 3',
    Sam: '3, 10',
};

var sumCardTotal = function (str) {
    var total = str.split(', ').map(Number).reduce(function(acc, curr) {
        return acc + curr;
    });
    return total;
};

var whoWins = function (obj, card, array) {
    var finalArray = [];
    
    if (card === ('J' || 'Q' || 'K' || 'A')) {

        card = 10;
    }
    if (array.length > 0) {
        Object.keys(obj).forEach(function(name, i) {
            if (name === array[i]) {
                obj[name] = obj[name] + ', ' + card;
                finalArray.push([name, obj[name]]);
            } else {
                finalArray.push([name, obj[name]]);
            }
        });
    }

    for (var i = 0; i < finalArray.length; i++) {
        finalArray[i].push(sumCardTotal(finalArray[i][1]));
        finalArray[i].splice(1,1);
    }

    finalArray.sort(function(val1, val2) {

        if (val1[1] === val2[1]) {

            var x = val1[0].toLowerCase();
            var y = val2[0].toLowerCase();
            
            if (x < y) {
              return -1;    
            } else if (x > y) {
              return 1; 
            } else {
              return 0;
            }
        }
        return val2[1] - val1[1];
    });
   
    console.log(finalArray);
};


whoWins(players, 3, ['Ben', 'Amy']);
// should return [['Sam', 13], ['Amy', 10], ['Ben', 10]]