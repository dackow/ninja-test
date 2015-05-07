'use strict';


var postManBaseFactory = postManBase.provider('Routing', function($stateProvider){

 var vm = this;
 vm.populateStates = populateStates;

function populateStates(states) {
	states.forEach(function(item){
		$stateProvider.state(item.name, {
			url: item.url,
			templateUrl: item.templateUrl,
			controller: item.controller
		});			
	});

}

this.$get = function() {
	return vm;
}

});





