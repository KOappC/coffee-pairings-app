(function() {
    function FlavorService($location, $http) {

        var subFlavor = {};
        var simBean = [];
        var beanArray = [];
        var finalSimBeanArray = [];
        var beanPass = "";

        return {
            // holds the bean choice
            getBean: getBean,
            setBean: setBean,
            passBean: passBean,
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

        // pass single bean to info-component
        function passBean() {
            return beanPass;
        }

        // pass array of similar beans
        function passBeanArray() {
            return beanArray;
        }

        function setBean(info) {
            // setting subFlavor to value of sub flavor clicked
            subFlavor = info;
            // subFlavor = info.name (name of the subFlavor) info.bean (name of bean for use in other functions)
            // goes to info page
            return $http({
                method: "GET",
                url: "/beans/" + subFlavor
            }).then(function(response) {

                // assign beanPass/the bean chosen
                beanPass = response.data[0].bean;

                // pushing the similar beans to the finalSimBeanArray
                beanArray = response.data.forEach(function(info) {
                    finalSimBeanArray.push(info.bean);
                    return info.bean;
                });
                console.log(finalSimBeanArray);
                $location.path("/info");
                return {
                    response,
                    beanPass,
                    beanArray
                };
            });

        }

        // similar beans
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
                console.log(beanArray);
                return {
                    response,
                    beanArray
                };
            });
        }

        // locations





    }

    angular
        .module("app")
        .factory("FlavorService", FlavorService);
})();