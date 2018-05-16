class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._negociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('#negociacoes-view'));
		this._negociacoesView.update(this._negociacoes);
		this._mensagem = new Mensagem(); 
		this._mensagemView = new MensagemView($('#mensagem-view')); 
		this._mensagemView.update(this._mensagem); 
	};

	adiciona(event) {

		event.preventDefault();

		this._negociacoes.add(this._newNegociacao());
		this._mensagem.texto = 'Negociação adicionada com sucesso'
		this._mensagemView.update(this._mensagem);
		this._negociacoesView.update(this._negociacoes); 
		this._resetForm();

	};

	_newNegociacao() {

		return new Negociacao(
			DateHelper.toDate(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);

	};

	_resetForm() {
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}

}
