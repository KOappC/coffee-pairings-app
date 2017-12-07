(function() {
    var beansComponent = {
        template: `
            <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Coffee Title</h1>
                <i id="hamburger" class="material-icons">dehaze</i>
            </div>
            
            <div class="hidden-menu">
                <h3 ng-click="$ctrl.goHome();">Home</h3>
                <h3 ng-click="$ctrl.goFlavors();">Flavors</h3>
                <h3 ng-click="$ctrl.goInfo();">Info</h3>
                <h3 ng-click="$ctrl.goBeans();">Beans</h3>
            </div>
            
            <div class="all-beans"> <!-- ng-repeat the beans from DB -->
                <p>all the coffees from the database</p>
            </div>
`,
        controller: function($location) {
            var $ctrl = this;
            // need to pull all beans from the database and display here

            // nav functions
            $ctrl.goHome = function() {
                $location.path("/home");
            };
            $ctrl.goFlavors = function() {
                $location.path("/flavors");
            };
            $ctrl.goInfo = function() {
                $location.path("/info");
            };
            $ctrl.goBeans = function() {
                $location.path("/beans");
            };
        }
    };

    angular
        .module("app")
        .component("beansComponent", beansComponent);
})();