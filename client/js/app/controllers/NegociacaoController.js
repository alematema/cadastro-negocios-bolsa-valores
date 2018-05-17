class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		let self = this;
		this._negociacoes = ProxyFactory.create(new ListaNegociacoes(),
																						['add', 'esvazia'],
																						model => this._negociacoesView.update(model) 
		);
		this._negociacoesView = new NegociacoesView($('#negociacoes-view'));
		this._negociacoesView.update(this._negociacoes);
		this._mensagem = ProxyFactory.create(new Mensagem(),
																				 ['texto'],
																				 model => this._mensagemView.update(model)
																				);
		this._mensagemView = new MensagemView($('#mensagem-view'));
		this._mensagemView.update(this._mensagem);

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
