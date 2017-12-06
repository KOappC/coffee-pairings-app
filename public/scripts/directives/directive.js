(function() {
	function circleColors() {
		return {
			restrict: "A",
			link: function($scope, $element, $attrs) {
				$element.on("click", function() {
					// $element.css("background-color", "black");
					var circles = document.getElementsByClassName("little-circles")[0];
					console.log(circles.innerText);
					if (circles.innerText === "nutty") {
						console.log("working");
						circles.css("background-color", "red");
					} else {
						console.log("hey");
					}
				});
			}
		};
	}
	angular
		.module("app")
		.directive("circleColors", circleColors)
})();