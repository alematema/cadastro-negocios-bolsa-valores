class Bind {

	constructor(model, view, ...props) {
		
		console.log(`binding ${model} com ${view}`);

		let proxy = ProxyFactory.create(model, props, model => view.update(model));

		view.update(model);

		return proxy;

	}

}
