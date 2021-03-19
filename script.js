var container = $('.container');

getCommentsEntered();

// single source of truth
//before this, check local storage and json parse for entry data
var arrayForTimes = [
    { time: "8am", entry: "" },
    { time: "9am", entry: "" },
    { time: "10am", entry: "" },
    { time: "11am", entry: "" },
    { time: "12pm", entry: "" },
    { time: "1pm", entry: "" },
    { time: "2pm", entry: "" },
    { time: "3pm", entry: "" },
    { time: "4pm", entry: "" },
    { time: "5pm", entry: "" }
];

var data = []
var date = $(`#currentDay`);
var timeNow = moment()
var dateNow = timeNow.format('ll');

date.text(dateNow);

//.each for each loop jquery
//use jquery to grab all the rows
//iterate over array using dot each adding classes
//use if statement to compare with text content of that row
//compare text with moment.hour
//if its less than past, greater than future.
// $.each('.row'){
//     if (timeNow.hour < 6) {
//         .row.addClass('past')
//     } else if (timeNow.hour > 8) {
//         .row.addClass('future')
//     // } else if (timeNow.hour >= 8 && timeNow.hour < 9){
//     //     .row.addclass('future')
//     //     .row.children[0].te
//     // }
// }


if (timeNow.hour(8)){
    $('.row').attr('class', 'future')
    $('.row').text("8am").attr('class', 'present')
} else if (timeNow.hour(9)){
    $('.row').attr('class', 'future')
    $('.row').text("9am").attr('class', 'present')
    $('.row').text("8am").attr('class', 'past')
} else if (timeNow.hour(10)){
    $('.row').attr('class', 'future')
    $('.row').text("10am").attr('class', 'present')
    $('.row').text("8am").attr('class', 'past')
    $('.row').text("9am").attr('class', 'past')
} else if (timeNow.hour(11)){
    $('.row').attr('class', 'future')
    $('.row').text("11am").attr('class', 'present')
    $('.row').text("8am").attr('class', 'past')
    $('.row').text("9am").attr('class', 'past')
    $('.row').text("10am").attr('class', 'past')
} else if (timeNow.hour(12)){
    $('.row').attr('class', 'future')
    $('.row').text("12pm").attr('class', 'present')
    $('.row').text("8am").attr('class', 'past')
    $('.row').text("9am").attr('class', 'past')
    $('.row').text("10am").attr('class', 'past')
    $('.row').text("11am").attr('class', 'past')
} else if (timeNow.hour(13)){
    $('.row').attr('class', 'past')
    $('.row').text("1pm").attr('class', 'present')
    $('.row').text("2pm").attr('class', 'future')
    $('.row').text("3pm").attr('class', 'future')
    $('.row').text("4pm").attr('class', 'future')
    $('.row').text("5pm").attr('class', 'future')
} else if (timeNow.hour(14)){
    $('.row').attr('class', 'past')
    $('.row').text("2pm").attr('class', 'present')
    $('.row').text("3pm").attr('class', 'future')
    $('.row').text("4pm").attr('class', 'future')
    $('.row').text("5pm").attr('class', 'future')
} else if (timeNow.hour(15)){
    $('.row').attr('class', 'past')
    $('.row').text("3pm").attr('class', 'present')
    $('.row').text("4pm").attr('class', 'future')
    $('.row').text("5pm").attr('class', 'future')
} else if (timeNow.hour(16)){
    $('.row').attr('class', 'past')
    $('.row').text("4pm").attr('class', 'present')
    $('.row').text("5pm").attr('class', 'future')
} else if (timeNow.hour(17)){
    $('.row').attr('class', 'past')
    $('.row').text("5pm").attr('class', 'present')
} else {
    $('.row').attr('class', 'past')
}

//function to get items from local and put them where they should be
function getCommentsEntered() {
    var commentsEntered = JSON.parse(localStorage.getItem("data"));
    //now i need to put them in objects "entry" sections of correct ....
    console.log(commentsEntered)

    //run loop through array and populate entry
    //CANNOT GET FOR LOOP TO WORK PROPERLY TO POPULATE 
    //for ( var i = 0; i <= 9; i++ ){
    //    arrayForTimes[i].entry.text(commentsEntered.entry[i])
    //}
}

function saveComment(event) {
    event.preventDefault();

    const idxOfButton =  $(this).attr("data-idx");
    var dataEntered = $(this).parents("div").siblings("div.entry").find("textarea").val();

    arrayForTimes[idxOfButton].entry = dataEntered;

    localStorage.setItem("data", JSON.stringify(arrayForTimes))
    commentData = JSON.parse(localStorage.getItem("data"))
}


for ( var i = 0; i <= arrayForTimes.length -1; i++ ){
    var hour = $(`<div class="hour"> ${arrayForTimes[i.time]}</div>`);
    var content = $(`<div class="entry"><textarea class="description" name = "comments"></textarea></div>`);
    var saveButton = $(`<div><button data-idx="${i}" type=button class="saveBtn">Save</button></div>`);    
    var row = $(`<div class="row"></div>`);
    var timeBlock = $('<div class="time-block"></div>');

    hour.text(arrayForTimes[i].time)

    row.append(hour);
    row.append(content);
    row.append(saveButton);
    timeBlock.append(row);
    container.append(timeBlock);
}    

container.on("click", ".saveBtn", saveComment)