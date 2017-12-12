(function() {
    var beansComponent = {
        template: `
            <div class="menu-bar">
                <h1 class="page-title">Flavor Town</h1>
                <i id="hamburger" class="material-icons" ng-click="$ctrl.toggleMenu();">dehaze</i>
            </div>
            
            <div class="hidden-menu" ng-class="{'menu-toggle': $ctrl.activeMenu};">
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goHome();">Home</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goFlavors();">Flavors</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goBeans();">Beans</h3>
            </div>
            
            <div class="all-beans">
                <div class="bean-details" ng-repeat="items in $ctrl.pullLibrary" ng-click="$ctrl.getBrowseBean(items.bean);">
                    {{ items.bean }}
                    <p>DESCRIPTION: {{  }}</p> 
                </div>
            </div>
`,
        controller: function($location, FlavorService) {
            var $ctrl = this;
            $ctrl.activeMenu = false;
            $ctrl.toggleMenu = function() {
                $ctrl.activeMenu = !$ctrl.activeMenu;
            };

            $ctrl.goHome = function() {
                $location.path("/home");
            };
            $ctrl.goFlavors = function() {
                $location.path("/flavors");
            };
            $ctrl.goBeans = function() {
                $location.path("/beans");
            };

            FlavorService.setLibrary().then(function() {
                $ctrl.pullLibrary = FlavorService.getLibrary();
            });

            $ctrl.beanChoice = "";
            $ctrl.getBrowseBean = function(info) {
                beanChoice = info;
                FlavorService.setBrowseBean(info).then(function() {
                    $location.path("/info");
                });

            };

            $ctrl.getDescription = function() {
                for (var i = 0; i < $ctrl.descArr.length; i++) {
                    if ($ctrl.beanChoice === $ctrl.descArr[i].name) {
                        $ctrl.finalDesc = $ctrl.descArr[i].location;
                    }
                }

            };

            $ctrl.finalDesc = "";
            $ctrl.descArr = [
                {name: "decaf brazil", description: "This coffee is milled at a state-of-the-art processing facility in Pocos de Caldas, which results in much better green prep than most standard Brazilian coffee."},
                {name: "ethiopia yirgacheffe kochere", description: "Kore is the village, or kebele, where this coffee is grown and processed, in the Kochere 'woreda' or district within Yirgacheffe."},
                {name: "el salvador santa ana", description: "A collection of coffee from a multitude of coffee producers in the region of Santa Ana in Apaneca, Llamtepeq."},
                {name: "burundi aa bumoco society", description: "The BUMOCO (Burundi High Mountain Coffee) Society owns and operates the Nyamasaka and Nyagashiha washing stations where cherries are collected from over 200 small famholders of the Burambi and Buyengero communes."},
                {name: "timor hibrido de timor", description: "The Cooperative Cafe Timor (CCT) works with very small farms in East Timor.  The majority of land owners own less than a hectare of land."},
                {name: "ethiopia sidamo gerbicho killa", description: "Sourced from family owned farms organized around the Gidibona Sheicha Cooperative located in the district of Aleto Wondo within the Sidamo zone, Southern Nations Nationalities and People's Region, Ethiopia."},
                {name: "decaf peru organic", description: "High altitudes are synonymous with high quality coffees, and the beans from this region of Peru are no exception.  Their medium body and balanced acidity are top notch, and have little competition."},
                {name: "brazil mogiana", description: "The high Mogiana region has an average annual production of more than one million bags of coffee, of which 85% is high quality beans produced at an optimal altitude and temperature."},
                {name: "brazil cerrado", description: "In July, 1985, Coopartiva de Cafeuicultorese Agropecuaristas (COCAPEC) began with almost 200 members in its first year of operations and today it has grown to over 2,000 members."},
                {name: "jamaica blue mountain", description: "The first seedling was planted in the parish of St. Andrews outside of Kingston, the coffee plant soon flourished on the slopes of Jamaica's Blue Mountain in the 18th century."},
                {name: "guatemala atitlan san pedro", description: "Throughout the harvest, many lots from San Pedro, Atitlan, are cupped and classified according to their quality and profile.  The best lots are selected to form this offering."}

            ];


        }
    };

    angular
        .module("app")
        .component("beansComponent", beansComponent);
})();