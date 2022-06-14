(function () {
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function isArray(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }

    if (typeof Array.prototype.indexOf === 'undefined') {
        /**
         * 获取元素在数组中的下标，如果没有，返回 -1
         * @param {Array} array
         * @param {any} element
         * @returns {number}
         */
        Array.prototype.indexOf = function indexOf(element) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                    return i;
                }
            }

            return -1;
        };
    }

    if (typeof Array.prototype.includes === 'undefined') {
        Array.prototype.includes = function includes(element) {
            return this.indexOf(element) !== -1;
        };
    }

    if (typeof Array.prototype.filter === 'undefined') {
        Array.prototype.filter = function filter(predicate, thisArg) {
            // eslint-disable-next-line consistent-this
            if (thisArg === undefined) thisArg = this;
            // eslint-disable-next-line consistent-this
            var array = this;

            const result = [];
            for (var index = 0; index < array.length; index++) {
                var element = array[index];
                if (predicate.call(thisArg, element, index, array)) {
                    result.push(element);
                }
            }
            return result;
        };
    }

    if (typeof Array.prototype.find === 'undefined') {
        Array.prototype.find = function (predicate) {
            if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }

            return undefined;
        };
    }

    if (typeof Array.prototype.map === 'undefined') {
        Array.prototype.map = function (callbackfn, thisArg) {
            // eslint-disable-next-line consistent-this
            var list = this;
            var result = [];
            for (var i = 0; i < list.length; i++) {
                var mapper = callbackfn.call(thisArg, list[i], i, list);
                result.push(mapper);
            }

            return result;
        };
    }
})();
