(function () {
    var emitter = mod.emitter;
    var descriptorInfo = mod.descriptorInfo;
    var layerHelper = mod.layer;

    emitter.on('layer.getActiveLayerDescriptorInfo', function (data, response) {
        var descriptorInfoString = '';

        if (app.documents.length !== 0 && activeDocument.activeLayer) {
            var descriptorInfoObject = descriptorInfo.getProperties(
                layerHelper.getLayerDesc(activeDocument.activeLayer.id),
            );
            descriptorInfoString = JSON.stringify(
                descriptorInfoObject,
                function (key, value) {
                    if (value === null) return null;

                    if (typeof value === 'object') {
                        if (value.constructor === Object || value.constructor === Array) {
                            return value;
                        } else {
                            return '<' + value.constructor.name + '>';
                        }
                    } else {
                        return value;
                    }
                },
                4,
            );
        }

        response(emitter.createResponse(0, descriptorInfoString));
    });
})();
