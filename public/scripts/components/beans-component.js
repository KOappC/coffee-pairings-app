(function() {
    var beansComponent = {
        template: `
            <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Coffee Title</h1>
            </div>
            
            <div class="all-beans"> <!-- ng-repeat the beans from DB -->
                <p>all the coffees from the database</p>
            </div>
`,
        controller: function() {
            var $ctrl = this;
            // need to pull all beans from the database and display here
        }
    };

    angular
        .module("app")
        .component("beansComponent", beansComponent);
})();