class ListaNegociacoes {

	constructor() {
		this._negociacoes = [];
	}


	add(negociacao) {
		this._negociacoes.push(negociacao);
	}

	get all() {
		return Array.from(this._negociacoes);
	}

}