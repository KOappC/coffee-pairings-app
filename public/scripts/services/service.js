(function() {
    function FlavorService($location) {

        var subFlavor = "";

        return {
            getBean: getBean,
            setBean: setBean
        };

        function getBean() {
            return subFlavor;
        }

        function setBean(info) {
            // setting subFlavor to value of sub flavor clicked
            subFlavor = info;
            console.log(subFlavor);
            // goes to info page
            $location.path("/info");
        }



    }

    angular
        .module("app")
        .factory("FlavorService", FlavorService);
})();