(function() {
    var infoComponent = {
        template: `
        <h1>This is the info component</h1>
        <div>
            <p> {{ $ctrl.beanInfo }} </p>
        </div>
        <div>
            <button>pairings</button>
            <button>locations</button>
        </div>
        `,
        controller: function(FlavorService) {
            var $ctrl = this;
            // pull in and return bean selection
            $ctrl.beanInfo = FlavorService.getBean();
        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();