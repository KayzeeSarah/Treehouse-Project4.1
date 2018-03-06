
var $li = $('li');

$('#search').keyup(function(){

  const input = $(this).val().toLowerCase();
  console.log(input);

  $li.each(function(){
    const currentLi = $(this);

    const currentA = currentLi.children(':first');
    console.log(currentA.attr('data-title').toLowerCase().indexOf(input));
    if(currentA.attr('data-title').toLowerCase().indexOf(input) === -1) {

      currentLi.hide();
    } else {
      currentLi.show();

    }

  });



});
