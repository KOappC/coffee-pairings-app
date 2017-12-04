(function() {
    var infoComponent = {
        template: `
        <h1>This is the info component</h1>
        <div>
            <p> {{ $ctrl.beanInfo }} </p>
        </div>
        `,
        controller: function() {
            var $ctrl = this;
            $ctrl.beanInfo = "tastes like coffee, you drink it";
        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();