class NegociacoesView {

	constructor(elemento) {
		this._elemento = elemento;
	};

	_template(model) {

		return `<table class="table table-hover table-bordered">
								<thead>
									<tr>
										<th>DATA</th>
										<th>QUANTIDADE</th>
										<th>VALOR</th>
										<th>VOLUME</th>
									</tr>
								</thead>

								<tbody>
									${model.all.map( negociacao => `

													<tr>
														<td>${DateHelper.toText(negociacao.data)}</td>
														<td>${negociacao.quantidade}</td>
														<td>${negociacao.valor}</td>
														<td>${negociacao.volume}</td>
													</tr>	
 
										`).join('')}
								</tbody>

								<tfoot>
										<td colspan='3'></td>
										<td>${model.totalVolume}</td>
								</tfoot>
				    </table> `;
	};

	update(model) {
		this._elemento.innerHTML = this._template(model);
	};

}
