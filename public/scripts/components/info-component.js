(function() {
    var infoComponent = {
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
        
        <div class="flavor-body">
            <div id="final-bean">
				<h3>YOUR BEAN IS:</h3>
                <p class="your-bean"> {{ $ctrl.beanChoice }} </p>
				<h4>SIMILAR BEANS:</h4>
                <ul>
                    <li ng-repeat="items in $ctrl.simBean track by $index"> {{ items }} </li>
                </ul>
            </div>
            <div>
                <div class="show-locations" ng-click="$ctrl.getLocations(); $ctrl.toggleLocations();"> <i id="locate" class="material-icons">place</i>FIND LOCATIONS TO PURCHASE</div>
                <div class="show-pairings" ng-click="$ctrl.togglePairings();"><i id="pair" class="material-icons">local_dining</i>GET FOOD PAIRINGS</div>
            </div>
            <i id="back-button" class="material-icons" ng-click="$ctrl.goBack();">navigate_before</i>
            <div class="pairings" ng-class="{'pairings-toggle': $ctrl.activePairings}">
                <ul>
                    <h3>Pairings:</h3>
                    <li ng-repeat="foods in $ctrl.getPairings track by $index"> {{ foods }} </li>
                </ul>
            </div>
            <div class="locations" ng-class="{'locations-toggle': $ctrl.activeLocations}">
                <ul>
                    <h3>Locations:</h3>
                    <li ng-repeat="items in $ctrl.finalLoc"> {{ items }} </li>
                </ul>
            </div>
        </div>
        
        `,
        controller: function(FlavorService, $location) {
            var $ctrl = this;

            $ctrl.beanChoice = FlavorService.passBean();
            $ctrl.beanInfo = FlavorService.getBean();
            $ctrl.simBean = FlavorService.getSimBean();
            $ctrl.getPairings = FlavorService.getPairings();
            $ctrl.getLocations = function() {
                for (var i = 0; i < $ctrl.locArr.length; i++) {
                    if ($ctrl.beanChoice === $ctrl.locArr[i].name) {
                        $ctrl.finalLoc = $ctrl.locArr[i].location;
                    }
                }

            };
            $ctrl.finalLoc = "";
            $ctrl.locArr = [
                {name: "decaf brazil", location: ["Roasting Plant", "Anthology Coffee"]},
                {name: "ethiopia yirgacheffe kochere", location: ["Dessert Oasis Coffee Roasters", "ASHE Supply Co"]},
                {name: "el salvador santa ana", location: ["Urban Bean Co", "New Order Coffee"]},
                {name: "burundi aa bumoco society", location: ["Germack Coffee Roasting Co", "Fourteen East"]},
                {name: "timor hibrido de timor", location: ["Cairo Coffee", "The Bottom Line Coffee House"]},
                {name: "ethiopia sidamo gerbicho killa", location: ["Fourteen East", "The Bottom Line Coffee House"]},
                {name: "decaf peru organic", location: ["ASHE Supply Co", "Germack Coffee Roasting Co"]},
                {name: "brazil mogiana", location: ["Anthology Coffee", "Urban Bean Co"]},
                {name: "brazil cerrado", location: ["Cairo Coffee", "New Order Coffee"]},
                {name: "jamaica blue mountain", location: ["Dessert Oasis Coffee Roasters", "Roasting Plant"]},
                {name: "guatemala atitlan san pedro", location: ["New Order Coffee", "Dessert Oasis Coffee Roasters"]}

            ];

            $ctrl.activeMenu = false;
            $ctrl.toggleMenu = function() {
                $ctrl.activeMenu = !$ctrl.activeMenu;
            };

            $ctrl.activePairings = false;
            $ctrl.togglePairings = function() {
                $ctrl.activePairings = !$ctrl.activePairings;
            };

            $ctrl.activeLocations = false;
            $ctrl.toggleLocations = function() {
                $ctrl.activeLocations = !$ctrl.activeLocations;
            };

            $ctrl.goBack = function() {
                $location.path("/flavors");
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

        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();