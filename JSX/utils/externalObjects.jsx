/**
 * 加载外部库
 */
(function () {
    'use strict';

    if (typeof CSXSEvent === 'undefined') {
        var plugPlugLibPath = 'lib:PlugPlugExternalObject';
        try {
            new ExternalObject(plugPlugLibPath);
            if (typeof CSXSEvent === 'undefined') {
                throw new Error('Class CSXSEvent is undefined!');
            }
        } catch (e) {
            alert(e.message || 'Load ExternalObject: ' + plugPlugLibPath + ' failed!');
        }
    }

    if (typeof XMPMeta === 'undefined') {
        var XMPLibPath = 'lib:AdobeXMPScript';
        try {
            new ExternalObject(XMPLibPath);
            if (typeof XMPMeta === 'undefined') {
                throw new Error('Class XMPMeta is undefined!');
            }
        } catch (e) {
            alert(e.message || 'Load ExternalObject: ' + XMPLibPath + ' failed!');
        }
    }
})();
