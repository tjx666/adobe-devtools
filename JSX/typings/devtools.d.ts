var mod: {
    emitter: Emitter;
    document: {
        traverseLayers(
            documentId: number,
            visit: (layerDesc: ActionDescriptor, docDesc: ActionDescriptor) => void,
        ): void;
    };
};

interface Emitter {
    on: (eventName: string, callback: EmitResponse) => void;
    emit: (eventName: string, data: any, onResponse: EmitResponse) => void;
    webEmit: (eventName: string, data: any) => void;
    createResponse: (code?: number, data?: any, message?: string) => ResponseData;
    message: (content: string) => void;
}


