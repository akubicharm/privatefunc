module.exports = async function (context, inBlob) {
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", inBlob.length, "Bytes");

    context.bidings.outBlob = context.bindings.inBlob;
    context.done();
};