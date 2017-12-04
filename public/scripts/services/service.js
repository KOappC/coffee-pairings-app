(function() {
    function FlavorService($location) {

        var subFlavor = {};
        var simBean = [];

        return {
            getBean: getBean,
            setBean: setBean,
            // get pairings - pass in pairings for selected bean
            // similar beans
            getSimBean: getSimBean,
            setSimBean: setSimBean,
            // locations
            setLocations: setLocations
        };
        // bean choice
        function getBean() {
            return subFlavor;
        }

        function setBean(info) {
            // setting subFlavor to value of sub flavor clicked
            subFlavor = info;
            // subFlavor = info.name (name of the subFlavor) info.bean (name of bean for use in other functions)
            // MAKE THIS GO ONE STEP FURTHER AND ASSIGN TO A BEAN
            // goes to info page
            $location.path("/info");
        }

        // similar beans
        function getSimBean() {
            return simBean;
        }

        function setSimBean(info) {
            // setting broad flavor for later filtering of db
            simBean = info;
            console.log(simBean);
        }

        // locations
        function setLocations(info) {
            // setting location based on bean for later filtering of db
            // take subFlavor and filter locations with it

        }




    }

    angular
        .module("app")
        .factory("FlavorService", FlavorService);
})();