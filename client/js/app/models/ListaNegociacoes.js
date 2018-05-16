class ListaNegociacoes {

	constructor() {
		this._negociacoes = [];
	}


	add(negociacao) {
		this._negociacoes.push(negociacao);
	}
	
	esvazia() {
		this._negociacoes = [];
	}

	get all() {
		return Array.from(this._negociacoes);
	}
	
	get totalVolume(){
		return this._negociacoes.reduce((totalVolume,negociacao) => totalVolume+negociacao.volume,0.0);
	}

}
