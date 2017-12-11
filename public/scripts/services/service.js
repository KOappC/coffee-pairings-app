(function() {
    function FlavorService($location, $http) {

        var subFlavor = {};
        var simBean = [];
        var beanArray = [];
        var finalSimBeanArray = [];
        var beanPass = "";
        var pairings = [];
        var finalPairings = [];
        var beanLibrary = [];
        var beanAltitude = "";
        var beanRegion = "";
        var beanRoast = "";
        var beanBody = "";
        var beanAcidity = "";
        var beanFeel = "";
        var beanMethod = "";

        return {
            getBean: getBean,
            setBean: setBean,
            passBean: passBean,
            getSimBean: getSimBean,
            setSimBean: setSimBean,
            getPairings: getPairings,
            setLibrary: setLibrary,
            getLibrary: getLibrary,
            getAltitude: getAltitude,
            getRegion: getRegion,
            getRoast: getRoast,
            getBody: getBody,
            getAcidity: getAcidity,
            getFeel: getFeel,
            getMethod: getMethod
        };

        function getRoast() {
            return beanRoast;
        }

        function getBody() {
            return beanBody;
        }

        function getAcidity() {
            return beanAcidity;
        }

        function getFeel() {
            return beanFeel;
        }

        function getMethod() {
            return beanMethod;
        }

        function getBean() {
            return subFlavor;
        }

        function passBean() {
            return beanPass;
        }

        function passBeanArray() {
            return beanArray;
        }

        function setLibrary() {
            return $http({
                method: "GET",
                url: "/flavors"
            }).then(function(response) {
                beanLibrary = response.data;
            })
        }
        function getLibrary() {
            return beanLibrary;
        }

        function getAltitude() {
            return beanAltitude;
        }
        function getRegion() {
            return beanRegion;
        }

        function setBean(info) {
            subFlavor = info;
            return $http({
                method: "GET",
                url: "/beans/" + subFlavor
            }).then(function(response) {
                
                beanPass = response.data[0].bean;
                beanAltitude = response.data[0].altitude;
                beanRegion = response.data[0].region;
                beanRoast = response.data[0].roast;
                beanBody = response.data[0].body;
                beanAcidity = response.data[0].acidity;
                beanFeel = response.data[0].feel;
                beanMethod = response.data[0].method1;

                finalPairings = [];
                finalPairings.push(response.data[0].pairing1, response.data[0].pairing2);
               
              
  // this only sort of works......            
                beanArray = response.data.forEach(function(info) {
//                    console.log(finalSimBeanArray);
//                    finalSimBeanArray.push(info.bean);
//                    console.log(finalSimBeanArray);
                  
                  if (info.bean !== beanPass) {
                    finalSimBeanArray.push(info.bean);
                  }
                  
//                  else {
//                    finalSimBeanArray = ["no similar beans found"];
//                  }
//                  
//                    if (info.bean === beanPass) {
//                      finalSimBeanArray = ["no similar beans found"];
//                    } else {}
  
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