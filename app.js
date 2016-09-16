(function(){
	var app = angular.module('ShoppingCart',[ ]);

	app.controller('CartController', function(){
		this.product = fruit;
	});

	var fruit = 
		{
			name: 'banana',
			price: 0.49,
			information: 'very fresh bananas',
		}
})();