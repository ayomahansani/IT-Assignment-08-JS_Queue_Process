var array = ["A", "B", "C", "D", "E", "F"];

function replaceValues() {

    // remove the last value of array and get that value
    let lastValue = array.pop();

    // add that value to the start of array
    array.unshift(lastValue);

    // update the elements
    $("#value1").text(array[0]);
    $("#value2").text(array[1]);
    $("#value3").text(array[2]);
    $("#value4").text(array[3]);
    $("#value5").text(array[4]);
    $("#value6").text(array[5]);

}

setInterval(replaceValues, 1100);