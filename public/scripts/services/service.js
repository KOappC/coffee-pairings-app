(function() {
    function FlavorService($location, $http) {

        var subFlavor = {};
        var simBean = [];

        return {
            // holds the bean choice
            getBean: getBean,
            setBean: setBean,
            // similar beans
            getSimBean: getSimBean,
            setSimBean: setSimBean
            // get pairings (maybe needed)
            // locations (maybe needed)
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
            return $http({
                method: "GET",
                url: "/beans/" + subFlavor
            }).then(function(response) {
                console.log(response);
                return response;
            });
            // $location.path("/info");

            /*      NEED TO DO
                    pass this sql command to DB

            ﻿   select * from tasting where narrow1 = subFlavor
                OR narrow2 = 'subFlavor;

            */

        }

        // similar beans
        function getSimBean() {
            return simBean;
        }

        function setSimBean(info) {
            // setting broad flavor for later filtering of db
            simBean = info;
        }

        // locations





    }

    angular
        .module("app")
        .factory("FlavorService", FlavorService);
})();