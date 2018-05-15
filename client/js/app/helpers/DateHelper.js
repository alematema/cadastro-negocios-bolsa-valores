class DateHelper {

	
	
	constructor(){
		throw new Error('Classe DateHelper não pode ser instanciada !!!');
	}

	static toDate(texto) {
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
	}


	static toText(data) {
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}


}
