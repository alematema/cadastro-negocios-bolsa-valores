class DateHelper {

	
	constructor(){
		throw new Error('Classe DateHelper não pode ser instanciada !!!');
	}

	static toDate(text) {
		
		if( ! /\d{4}-\d{2}-\d{2}/.test(text) )
			throw new Error(text + ' deve estar no formato aaaa/mm/dd');
		
		return new Date(...text.split('-').map((item, indice) => item - indice % 2));
	}


	static toText(date) {
		return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	}


}
