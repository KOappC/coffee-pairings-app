(function() {
    function menuDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {

                // slides menu down when you click the hamburger
                $element.on("click", function() {
                    var hiddenMenu = document.getElementById("hidden-menu");
                    hiddenMenu.style.display= "block";
                })
            }
        }
    }

    angular
        .module("app")
        .directive("menuDirective", menuDirective)
})();