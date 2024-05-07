var color = ["red", "green", "blue", "lightpink", "yellow", "plum"];

function replaceColor() {

    // remove the last value of array and get that value
    let lastColor = color.pop();

    // add that value to the start of array
    color.unshift(lastColor);

    // update the elements using css
    $("#box-1").css("background-color", color[0]);
    $("#box-2").css("background-color", color[1]);
    $("#box-3").css("background-color", color[2]);
    $("#box-4").css("background-color", color[3]);
    $("#box-5").css("background-color", color[4]);
    $("#box-6").css("background-color", color[5]);

}

setInterval(replaceColor, 400);