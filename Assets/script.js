$(document).ready(function () {

//when page loads, render local storage items
//# for textarea value, hour-* for div class row
$('#9oc').val(localStorage.getItem("hour-9"));
$('#10oc').val(localStorage.getItem("hour-10"));
$('#11oc').val(localStorage.getItem("hour-11"));
$('#12oc').val(localStorage.getItem("hour-12"));
$('#13oc').val(localStorage.getItem("hour-13"));
$('#14oc').val(localStorage.getItem("hour-14"));
$('#15oc').val(localStorage.getItem("hour-15"));
$('#16oc').val(localStorage.getItem("hour-16"));
$('#17oc').val(localStorage.getItem("hour-17"));


//functions for updating backgrounds based on current time vs scheduled time
function updateHour() {
    var currentTime = moment().hours()
    console.log(currentTime)
    //parseInt to turn strings into integers
    $('.time').each(function(){
        var hourBlock = parseInt( $(this).attr("id").split("-")[1])
        console.log(hourBlock)

        //if else sequence for updating
        if(currentTime > hourBlock) {
            $(this).addClass("past")
        } else if(currentTime === hourBlock) {
            $(this).addClass("present")
        } else{
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })


}
updateHour()


//Functions for each save button per hour
$('.saveBtn').on('click', function () {
    console.log("clicky clicky button")
    var textValue = $(this).siblings('.description').val();
    var textTime = $(this).parent().attr('id');
    console.log(textValue);
    console.log(textTime);
    localStorage.setItem(textTime, textValue);
})

//Incorporate .each jQuery




//Pull in moment function for jumbotron
var todaysDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(todaysDate);






























})