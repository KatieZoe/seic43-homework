$(document).ready(function () {

    //hiding reload button and list display
    $('#reload').css('display', 'none')
    $('#list-div').css('display', 'none');

  const astronautsInSpace = function (event) {
    event.preventDefault();

    $.ajax('http://api.open-notify.org/astros.json').done(function (data) {
      const number = data.number;

      //display list and reload button
      $('#changing-button').on('click', function (toList){
        $('#list-div').css('display', 'block');
        $('#reload').css('display', 'block')

        //populate list items with data
        const people = data.people.map((e) => {
          $('#list').append(`<li>${e.name}</li>`);
        });

        //reload page when "WHAT?" button is clicked
        $('#reload').click(function() {
          location.reload();
        });

      });

      //display number of astronauts and button text change 
      $('#number').text(number);
      $('#changing-button').text('Who?');

    });
  };

$('#changing-button').on('click', astronautsInSpace);
});
