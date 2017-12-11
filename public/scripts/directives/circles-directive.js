(function() {
	function circleColors() {
		return {
			restrict: "A",
			link: function($scope, $element, $attrs) {

				$element.on("click", function() {
					var test = this;
					var circles = document.getElementsByClassName("little-circles");
					var narrow = document.getElementsByClassName("narrow-circles");
					if (test.innerText === "nutty") {

						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#e22149";
							narrow[i].style.border = "2px solid #e22149";
						}
					} else if (test.innerText === "roasted") {
						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#484932";
							narrow[i].style.border = "2px solid #484932";
						}
					} else if (test.innerText === "spicy") {
						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#6583bc";
							narrow[i].style.border = "2px solid #6583bc";
						}
					} else if (test.innerText === "floral") {
						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#c87029";
							narrow[i].style.border = "2px solid #c87029";
						}
					} else if (test.innerText === "sour") {
						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#f8ca34";
							narrow[i].style.border = "2px solid #f8ca34";
						}
					} else if (test.innerText === "sweet") {
						for (var i= 0; i < narrow.length; i++){
							narrow[i].style.backgroundColor = "#58549d";
							narrow[i].style.border = "2px solid #58549d";
						}
					}
				});
			}
		};
	}
	angular
		.module("app")
		.directive("circleColors", circleColors)
})();