document.addEventListener("DOMContentLoaded", function() {

  var kittenCount = 1
  var summonKitties = document.getElementsByClassName('summon-cats');

  runSummonKitties = document.addEventListener('click', function(event){
    console.log('click');

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    })
    .done(function (responseData) {
        var img = document.createElement('img');
        var kittenPicSrc = responseData.cats[0].photo;
        img.src = kittenPicSrc

        document.querySelector('#cat'+kittenCount).append(img);
        kittenCount = kittenCount + 1;

    });
  });

});
