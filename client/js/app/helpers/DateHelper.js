class DateHelper {

	
	constructor(){
		throw new Error('Esta classe não pode ser instaciada !!!');
	}

	static toDate(texto) {
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
	}


	static toText(data) {
		let diaMesAno = data.getDate() +
			'/' + (data.getMonth() < 9 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) +
			'/' + data.getFullYear();

		return diaMesAno;
	}


}
