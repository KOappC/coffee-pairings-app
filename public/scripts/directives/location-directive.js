(function() {
    function locationDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {

                // slide panel up on info page
                $element.on("click", function () {
                    var locationBox = document.getElementById("locations");
                    locationBox.style.display= "block";
                })
            }
        }
    }

    angular
        .module("app")
        .directive("locationDirective", locationDirective)
})();