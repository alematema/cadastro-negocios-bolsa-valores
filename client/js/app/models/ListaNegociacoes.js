class ListaNegociacoes {

	constructor(proxy) {
		this._negociacoes = [];
		this._proxy = proxy;
	}

	add(negociacao) {
		this._negociacoes.push(negociacao);
		this._proxy(this);
	}
	
	esvazia() {
		this._negociacoes = [];
		this._proxy(this);
	}

	get all() {
		return Array.from(this._negociacoes);
	}
	
	get totalVolume(){
		return this._negociacoes.reduce((totalVolume,negociacao) => totalVolume+negociacao.volume,0.0);
	}

}
