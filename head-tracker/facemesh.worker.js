
importScripts('lib/tf.js');
importScripts('lib/facemesh/facemesh.js');

tf.setBackend('webgl').then((success) => {
	if (!success) {
		console.log("tf.setBackend('webgl') failed");
		close();
	}
}, (error) => {
	console.log("tf.setBackend('webgl') error", error);
	close();
});

var facemeshTensorFlowModel;

onmessage = (e) => {
	if (e.data.type === "LOAD") {
		facemesh.load(e.data.options).then((model) => {
			facemeshTensorFlowModel = model;
			postMessage({ type: "LOADED" });
		});
	} else if (e.data.type === "ESTIMATE_FACES") {
		facemeshTensorFlowModel.estimateFaces(e.data.imageData).then((predictions) => {
			postMessage({ type: "ESTIMATED_FACES", predictions });
		}, (error) => {
			console.log(error);
		});
	}
};
