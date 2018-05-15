class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	};

	adiciona(event) {

		event.preventDefault();
		
		let negociacao = this.newNegociacao();
		
		let diaMesAno = DateHelper.toText(negociacao.data);
		
		this.resetForm();
		
	};

	newNegociacao() {

		return new Negociacao(
			DateHelper.toDate(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);

	};
	
	resetForm(){
		this._inputData.value='';
		this._inputQuantidade.value=1;
		this._inputValor.value=0.0;
		this._inputData.focus();
	}

}