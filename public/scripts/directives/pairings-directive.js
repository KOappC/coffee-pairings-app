(function() {
    function pairingsDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {

                // slide panel up on info page
                $element.on("click", function () {
                    var pairingsBox = document.getElementById("pairings");
                    pairingsBox.style.display= "block";
                })
            }
        }
    }

    angular
        .module("app")
        .directive("pairingsDirective", pairingsDirective)
})();