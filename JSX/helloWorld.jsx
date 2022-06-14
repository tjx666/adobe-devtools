mod.helloWorld = (function () {
    function helloWorld() {
        alert('Hello World!');
    }

    mod.emitter.on('helloWorld', function (data, response) {
        helloWorld();
        response();
    });
})();
