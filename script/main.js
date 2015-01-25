(function(){
  'use strict';

  var beers = rawBeerData.beers;

  $(document).ready(function(){

    var $list = $('.beers-list');

    beers.forEach(function(beer){
      var beerText = renderTemplate('beer-item', {
        name: beer.name,
        brewery: beer.brewery.name
      });
      $list.append(beerText);
    });

  });

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

})();
