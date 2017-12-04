(function() {
    var narrowComponent = {
        template: `
            <h1>list of all beans</h1>
            <div>
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
        .component("narrowComponent", narrowComponent);
})();