
var container = $('.container');
var arrayForTimes = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var data = []
//.push will add items to array
var date = $(`#currentDay`);
var timeNow = moment()
var dateNow = timeNow.format('ll');
var timeColor = moment.duration({hours: 1})

date.text(dateNow);

//if timeNow is between 8 and 9, grab hour div with text matching, add class present, 
//remove other classes
//add classes to all different divs with all different text matching
//or if hour is less than 8, set all div class row to future
//if hour is 8,

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
}  else if (timeNow.hour(16)){
    $('.row').attr('class', 'past')
    $('.row').text("4pm").attr('class', 'present')
    $('.row').text("5pm").attr('class', 'future')
}  else if (timeNow.hour(17)){
    $('.row').attr('class', 'past')
    $('.row').text("5pm").attr('class', 'present')
} else {
    $('.row').attr('class', 'past')
}




function saveComment(event) {
    event.preventDefault();
    console.log(event)

    data.push($('input[name="comments"]'))
    localStorage.setItem("data", JSON.stringify(data))
    var commentData = JSON.parse(localStorage.getItem("data"))
    //populate placeholder using $this
    $(this).siblings("textarea").attr("placeholder", commentData)

    //localStorage.setItem("data", $(this).siblings("textarea").val())
    //console.log($(this).siblings("textarea").val())

    //.prop gets property values?
}


for ( i = 0; i<=arrayForTimes.length -1; i++ ){
    var hour = $(`<div class="hour"> ${arrayForTimes[i]}`);
    var content = $(`<div"><input type="text" class="description" name = "comments"></input></div>`);
    var saveButton = $(`<div><button type=button class="saveBtn">Save</button></div>`);    
    var row = $(`<div class="row"></div>`);
    var timeBlock = $('<div class="time-block"></div>');


    hour.text(arrayForTimes[i])

    row.append(hour);
    row.append(content);
    row.append(saveButton);
    timeBlock.append(row);
    container.append(timeBlock);
}    

container.on("click", ".saveBtn", saveComment)

