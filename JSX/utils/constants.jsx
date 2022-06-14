mod.constants = (function () {
    'use strict';

    // 只有 release build 才会是 production
    var ENV = 'development';

    return {
        ENV: ENV,
        isDev: ENV !== 'production',
        EXTENSION_FOLDER: new Folder($.fileName).parent.parent.parent,
    };
})();
