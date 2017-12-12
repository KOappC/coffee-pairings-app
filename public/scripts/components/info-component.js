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
                <p class="your-bean"> {{ $ctrl.beanChoice || $ctrl.beanFromBrowse.browseBean }}</p>
                <div class="extra-details">
                    <h5>DETAILS:</h5>
                    <ul> {{  }}
                        <li>Region: {{ $ctrl.beanRegion || $ctrl.beanFromBrowse.browseChoice.region }}</li>
                        <li>Altitude: {{ $ctrl.beanAltitude || $ctrl.beanFromBrowse.browseChoice.altitude }}</li>
                        <li>Processing Method: {{ $ctrl.beanMethod || $ctrl.beanFromBrowse.browseChoice.method1 }}</li>
                        <li>Roast Level: {{ $ctrl.beanRoast || $ctrl.beanFromBrowse.browseChoice.roast }}</li>
                        <li>Body: {{ $ctrl.beanBody || $ctrl.beanFromBrowse.browseChoice.body }}</li>
                        <li>Acidity: {{ $ctrl.beanAcidity || $ctrl.beanFromBrowse.browseChoice.acidity }}</li>
                        <li>Mouth Feel: {{ $ctrl.beanFeel || $ctrl.beanFromBrowse.browseChoice.feel }}</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <div class="show-sim-beans" ng-click="$ctrl.toggleSimBeans();">
                    <i id="sim" class="material-icons">local_cafe</i>
                    <p>GET SIMILAR BEANS</p>
			        <div class="sim-beans" ng-class="{'sim-beans-toggle': $ctrl.activeSimBeans}">
			            <h4>SIMILAR BEANS:</h4>
                        <ul>
                            <li ng-repeat="items in $ctrl.simBean track by $index"> {{ items }} </li>
                        </ul>
                    </div>
                </div>
                <div class="show-pairings" ng-click="$ctrl.togglePairings();">
                    <i id="pair" class="material-icons">local_dining</i>
                    <p>GET FOOD PAIRINGS</p>
                    <div class="pairings" ng-class="{'pairings-toggle': $ctrl.activePairings}">
                        <h4>PAIRINGS:</h4>
                        <ul>
                            <li ng-repeat="foods in $ctrl.getPairings track by $index"> {{ foods }} </li>
                    <!--    <li> {{ $ctrl.beanFromBrowse.browseChoice.pairing1 }} </li>
                            <li> {{ $ctrl.beanFromBrowse.browseChoice.pairing2 }} </li>     -->
                        </ul>
                    </div>
                </div>
                <div class="show-locations" ng-click="$ctrl.getLocations(); $ctrl.toggleLocations();">
                    <i id="locate" class="material-icons">place</i>
                    <p>FIND LOCATIONS</p>
                    <div class="locations" ng-class="{'locations-toggle': $ctrl.activeLocations}">
                        <h4>LOCATIONS:</h4>
                        <ul>
                            <li ng-repeat="items in $ctrl.finalLoc"> {{ items }} </li>
                        </ul>
                    </div>
                </div>
            </div>
			<div class="back-container" ng-click="$ctrl.goBack();">
				BACK
                <i id="back-button" class="material-icons">navigate_before</i>
			</div>
        </div>
        
        `,
        controller: function(FlavorService, $location) {
            var $ctrl = this;

            $ctrl.beanChoice = FlavorService.passBean();
            $ctrl.beanInfo = FlavorService.getBean();
            $ctrl.beanAltitude = FlavorService.getAltitude();
            $ctrl.beanRegion = FlavorService.getRegion();
            $ctrl.beanRoast = FlavorService.getRoast();
            $ctrl.beanBody = FlavorService.getBody();
            $ctrl.beanAcidity = FlavorService.getAcidity();
            $ctrl.beanFeel = FlavorService.getFeel();
            $ctrl.beanMethod = FlavorService.getMethod();
            $ctrl.beanFromBrowse = FlavorService.getBrowseBean();


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

            $ctrl.activeSimBeans = false;
            $ctrl.toggleSimBeans = function() {
                $ctrl.activeSimBeans = !$ctrl.activeSimBeans;
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