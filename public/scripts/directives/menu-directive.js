(function() {
    function menuDirective() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {

                // slides menu down when you click the hamburger
                $element.on("click", function() {
                    var hiddenMenu = document.getElementById("hidden-menu");
                    hiddenMenu.style.top= "0";
                })
            }
        }
    }

    angular
        .module("app")
        .directive("menuDirective", menuDirective)
})();