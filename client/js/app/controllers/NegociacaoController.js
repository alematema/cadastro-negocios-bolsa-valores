class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		let self = this;
		this._negociacoes = new Proxy(new ListaNegociacoes(), {

			get: function (target, prop, receiver) {

				if (['add', 'esvazia'].includes(prop) && (typeof (target[prop]) == typeof (Function))) {

					return function () {

						console.log(`interceptando ${prop} `);
						Reflect.apply(target[prop], target, arguments);
						self._negociacoesView.update(target);
						
					}

				}

				return Reflect.get(target, prop, receiver);

			}

		});
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

		this._resetForm();

	};

	apaga() {

		this._negociacoes.esvazia();

		this._mensagem.texto = 'Negociações apagadas com sucesso !!!';
		this._mensagemView.update(this._mensagem);

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
