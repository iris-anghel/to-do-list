//get Day and Date
var todayDate = new Date();
var days =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = days[todayDate.getDay()];
var date = document.getElementById("weekDay");
date.innerHTML = today + ', ';

var dtToday = new Date().toLocaleString().slice(0,10); 
var tDate = document.getElementById("currentDate");
tDate.innerHTML = dtToday;

//add focus to the input
function inputTextFocus() {
    var inputText = document.getElementById("toDoText");
    inputText.focus();
}
window.addEventListener('load', inputTextFocus);


$(document).ready(function() {
    
        $('#addButton').on('click', function(){
            var toAdd = $('#toDoText').val();
            
            if( toAdd !== '') {
                $('ul').append('<li>' + toAdd + '<span class="todo-item-done">  &#10004;</span></li>');

                localStorage.setItem('li', JSON.stringify($('ul').html()));
                $('#toDoText').val('');
            }

        });
            
          $('#toDoText').keyup(function(event){
          if(event.which == 13){
            $("#addButton").click();
          }      
        });

            
         $(document).on('click', 'li', function() {
             $(this).fadeOut('slow');
         });
        
    });
