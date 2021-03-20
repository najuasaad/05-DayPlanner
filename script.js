var container = $('.container');



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

var date = $(`#currentDay`);
var timeNow = moment().hour();
var dateNow = moment().format('ll');

var calendarData = JSON.parse( localStorage.getItem("data"));

date.text(dateNow);

for ( var i = 0; i <= arrayForTimes.length -1; i++ ){
    var hour = $(`<div class="hour"> ${arrayForTimes[i.time]}</div>`);
    var content = $(`<div class="entry"><textarea id=${arrayForTimes[i]} class="description"></textarea></div>`);
    var saveButton = $(`<div><button data-idx="${i}" type=button class="saveBtn">Save</button></div>`);    
    var row = $(`<div class="row"></div>`);
    var timeBlock = $('<div class="time-block"></div>');
    
    hour.text(arrayForTimes[i].time)
    
    //timeBlock.addclass(${i});
    row.append(hour);
    row.append(content);
    row.append(saveButton);
    timeBlock.append(row);
    container.append(timeBlock);
}    
//.each for each loop jquery
//use jquery to grab all the rows
//iterate over array using dot each adding classes
//use if statement to compare with text content of that row
//compare text with moment.hour
//if its less than past, greater than future.
// arrayForTimes.forEach(function(arrayForTimes, i) {
//     if (arrayForTimes[i] === timeNow-8) {
//         $("#" + i).addClass("present");
//     } else if (arrayForTimes[i] < timeNow-8) {
//         $("#" + i).addClass("past")
//     } else {
//         $("#" + i).addClass("future")
//     }
// });

arrayForTimes.forEach(function(e, i) {
    if (moment().get('hour') - 8 > i) {
        $("#" + i).addClass('past')
    }
    if (moment().get('hour') - 8 < i) {
        $("#" + i).addClass('future')
    }
    if (moment().get('hour') - 8 == i) {
        $("#" + i).addClass('present')
    }
})  


getCommentsEntered();

//function to get items from local and put them where they should be
function getCommentsEntered() {
    var commentsEntered = JSON.parse(localStorage.getItem("data"));
    //now i need to put them in objects "entry" sections of correct ....
    console.log(commentsEntered)
    
    //run loop through array and populate entry
    //CANNOT GET FOR LOOP TO WORK PROPERLY TO POPULATE 
    // for ( var i = 0; i <= 9; i++ ){
    //    arrayForTimes[i].entry.text = commentsEntered.entry[i])
    // }
    commentsEntered.forEach(function(e, i) {
        if (e !== null) {
            $("#" + i).text(commentsEntered[i].entry)
        }
    })
}

function saveComment(event) {
    event.preventDefault();

    const idxOfButton =  $(this).attr("data-idx");
    var dataEntered = $(this).parents("div").siblings("div.entry").find("textarea").val();

    arrayForTimes[idxOfButton].entry = dataEntered;

    localStorage.setItem("data", JSON.stringify(arrayForTimes))
}



container.on("click", ".saveBtn", saveComment)