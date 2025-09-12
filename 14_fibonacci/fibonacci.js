const fibonacci = function(seriesElement) {
    //1, 1, 2, 3, 5, 8

    let fibArray = []
    if (typeof(seriesElement) !== "number") {
        seriesElement = Number(seriesElement);
    }

    if (seriesElement < 0) {
        return "OOPS";
    }

    if (seriesElement === 0) {
        return 0;
    }  else {
        for (let i = 0; i < seriesElement; i++) {
            if (i < 2) {
                fibArray.push(1);
            } else {
                fibArray.push(fibArray[i-2] + fibArray[i-1]);
                console.log(fibArray);
            }
        }

        let fibValue =  fibArray.slice(-1).pop();
        console.log(typeof(fibValue));
        return fibValue;
    }

};

// Do not edit below this line
module.exports = fibonacci;
