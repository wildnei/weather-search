
// document.ready only loads the page when all the files are ready

$(document).ready(function () {

    // This function makes the button search for the text that is input into the #search-value by using .val()
    $("#searchBtn").on("click", function () {
        var searchVal = $("#searchVal").val();
        console.log(searchVal);
    })


})


function makeRow(text) {
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
}

function weatherSearch(searchValue) {
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=6cef74d58bd50efac7724912c2da304b&units=imperial",
        dataType: "json",
        success: function(data) {
            if (history.indexOf(searchValue) === -1) {
                history.pushState(searchValue);
                window.localStorage.setItem("history", JSON.stringify(history))
                
                makeRow(searchValue);
            }
        }
        }
}

weatherSearch()

console.log(weatherSearch);