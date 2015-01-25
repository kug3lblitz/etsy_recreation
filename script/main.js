(function(){
	'use strict';

	var legos = rawLegoData.results;

	$(document).ready(function(){

		var $output = $('.data');


		$(".sort-dropdown").change(function(sort) {
			if ($(".sort-dropdown option:selected").text() == "Lowest Price") {
				legos = _.sortBy(legos, function(lego) {
					return +lego.price;
				});
			} else if ($(".sort-dropdown option:selected").text() == "Highest Price") {
				legos = _.sortBy(legos, function(lego) {
					return +lego.price;
				}).reverse();
			}
			changeOrder(legos);
		});

		function changeOrder(data) {
			$output.empty();
			data.forEach(function(lego) {
				var legoInfo = renderTemplate('lego-item', {
					image: lego.Images[0].url_170x135,
					title: lego.title,
					titleURL: lego.url,
					shopName: lego.Shop.shop_name,
					price: lego.price,
					currency: lego.currency_code
				});
				$output.append(legoInfo);
			});
		}

		legos.forEach(function(lego){
			var legoInfo = renderTemplate('lego-item', {
				image: lego.Images[0].url_170x135,
				title: lego.title,
				titleURL: lego.url,
				shopName: lego.Shop.shop_name,
				price: lego.price,
				currency: lego.currency_code
			});
			$output.append(legoInfo);
		});

	});

	/*
	Templete function
	*/
	function renderTemplate(name, data) {
		var $template = $('[data-template-name=' + name + ']').text();
		$.each(data, function(prop, value) {
			$template = $template.replace('<% ' + prop + ' %>', value);
		});
		return $template;
	}

})();
