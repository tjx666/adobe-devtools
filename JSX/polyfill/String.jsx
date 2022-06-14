(function () {
    if (typeof String.prototype.includes === 'undefined') {
        String.prototype.includes = function includes(subStr) {
            if (typeof subStr !== 'string')
                throw new TypeError('subStr is not string, you pass ' + subStr + '!');
            return this.indexOf(subStr) !== -1;
        };
    }

    if (typeof String.prototype.endsWith === 'undefined') {
        String.prototype.endsWith = function endsWith(searchString, endPosition) {
            // This works much better than >= because
            // it compensates for NaN:
            if (!(endPosition < this.length)) endPosition = this.length;
            else endPosition |= 0; // round position
            return (
                this.substr(endPosition - searchString.length, searchString.length) === searchString
            );
        };
    }
})();
