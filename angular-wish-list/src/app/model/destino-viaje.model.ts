export class DestinoViaje{
	private selected: boolean;
	public servicios : string[];
	constructor(public nombre: string, public imagenUrl: string){
		this.servicios = ['Jacuzzi','Desayuno']
	}

	isSelected(): boolean{
		return this.selected;
	}

	setSelect(input: boolean){
		this.selected = input;
	}

}
