
var container = $('.container');
var arrayForTimes = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var comment = "";
var date = $(`#currentDay`);
var now = moment().format('LL');
var time = moment().format('LT');

date.text(now);

//if statement for time? does this go in for loop?
// if(time >= 8 || time <9){
//     row.addclass("present"))
// }


function saveComment(event) {
    event.preventDefault();
    console.log(event)
    localStorage.setItem("comment", $(this).siblings("textarea").val())
    console.log($(this).siblings("textarea").val())
}


for ( i = 0; i<=arrayForTimes.length -1; i++ ){
    var hour = $(`<div class="hour"> ${arrayForTimes[i]}`);
    var content = $(`<div"><input type="text" class="description"></input></div>`);
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
//add middle element (button) change saveBotton to parent
//user event delegation to move this to global
