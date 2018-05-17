class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		
		this._negociacoesView = new NegociacoesView($('#negociacoes-view'));
		this._mensagemView = new MensagemView($('#mensagem-view'));
		
		this._negociacoes = new Bind(new ListaNegociacoes(),this._negociacoesView,['add','esvazia']);
		this._mensagem = new Bind(new Mensagem(), this._mensagemView,['texto']);

	};

	adiciona(event) {

		event.preventDefault();

		this._negociacoes.add(this._newNegociacao());
		this._mensagem.texto = 'Negociação adicionada com sucesso'
		
		this._resetForm();

	};

	apaga() {

		this._negociacoes.esvazia();
		this._mensagem.texto = 'Negociações apagadas com sucesso !!!';
		
	}

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
