(function() {
    function FlavorService($location, $http) {

        var subFlavor = {};
        var simBean = [];
        var beanArray = [];
        var finalSimBeanArray = [];
        var beanPass = "";
        var pairings = [];
        var finalPairings = [];

        return {
            getBean: getBean,
            setBean: setBean,
            passBean: passBean,
            getSimBean: getSimBean,
            setSimBean: setSimBean,
            getPairings: getPairings
        };
        function getBean() {
            return subFlavor;
        }

        function passBean() {
            return beanPass;
        }

        function passBeanArray() {
            return beanArray;
        }

        function setBean(info) {
            subFlavor = info;
            return $http({
                method: "GET",
                url: "/beans/" + subFlavor
            }).then(function(response) {
                beanPass = response.data[0].bean;
              
                finalPairings.push(response.data[0].pairing1, response.data[0].pairing2);
               
                beanArray = response.data.forEach(function(info) {
                    finalSimBeanArray.push(info.bean);
                });



                $location.path("/info");
                return {
                    response,
                    beanPass,
                    beanArray
                };
            });

        }

        function getSimBean() {
            return finalSimBeanArray;
        }

        function setSimBean(info) {
            simBean = info;
            return $http({
                method: "GET",
                url: "/beans/" + subFlavor
            }).then(function(response) {
                beanArray = response;
                return {
                    response,
                    beanArray
                };
            });
        }

        function getPairings() {
            return finalPairings;
        }


    }

    angular
        .module("app")
        .factory("FlavorService", FlavorService);
})();