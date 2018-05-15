class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._negociacoes = new ListaNegociacoes();

	};

	adiciona(event) {

		event.preventDefault();
		
		this._negociacoes.add(this._newNegociacao());
		
		console.log(this._negociacoes.all);
		
		let diaMesAno = DateHelper.toText(negociacao.data);
		
		this._resetForm();
		
	};

	_newNegociacao() {

		return new Negociacao(
			DateHelper.toDate(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);

	};
	
	_resetForm(){
		this._inputData.value='';
		this._inputQuantidade.value=1;
		this._inputValor.value=0.0;
		this._inputData.focus();
	}

}