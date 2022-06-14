(function setup() {
    'use strict';

    // 开启 debug 模式
    $.level = 2;
    // 开启严格模式禁止对对象只读属性进行写操作
    $.strict = true;

    // 设置 JSX engin 内存缓存 100MB
    var MAX_MEMORY_CACHE_SIZE = 1024 * 1024 * 100;
    // 默认是 100k
    if ($.memCache < MAX_MEMORY_CACHE_SIZE) {
        $.memCache = MAX_MEMORY_CACHE_SIZE;
    }

    // 回收资源
    if ($.global.mod) {
        try {
            $.global.mod.emitter.emitter.removeAllListeners();
        } catch (error) {
            $.writeln('occur error when recycle old resource...');
            $.writeln($.global.mod.exception.getErrorDetails(error));
        } finally {
            $.global.mod = undefined;
            $.gc();
        }
    }

    // reset ps-export API entry
    $.global.mod = {};

    // define some global variable
    $.global.s2t = stringIDToTypeID;
    $.global.c2t = charIDToTypeID;

    // polyfill
    // @include './polyfill/json2.jsx'
    // @include './polyfill/String.jsx'
    // @include './polyfill/Array.jsx'
    // @include './polyfill/Object.jsx'

    // utils
    // @include './utils/constants.jsx'
    // @include './utils/exception.jsx'
    // @include './utils/externalObjects.jsx'
    // @include './utils/EventEmitter.jsx'
    // @include './utils/emitter.jsx'

    // @include './helloWorld.jsx'

    if (mod.constants.ENV === 'production') {
        $.level = 0;
    }
})();
