mod.layer = (function () {
    /**
     * @param {number} layerId
     * @returns {ActionDescriptor}
     */
    function getLayerDesc(layerId) {
        var layerReference = new ActionReference();
        layerReference.putIdentifier(stringIDToTypeID('layer'), layerId);
        return executeActionGet(layerReference);
    }

    return {
        getLayerDesc: getLayerDesc,
    };
})();
