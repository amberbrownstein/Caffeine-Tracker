Using Math.pow
var items = new Array();

class Item {
 	constructor(name, amt, time) {
 		this.name = name;
		this.amt = amt;
		this.time = time;

		switch(name) {
			case soda:
				this.caf = 40
				break;
			case green_tea:
				this.caf = 28
				break;
			case milk_chocolate:
				this.caf = 6
				break;
			case black_tea:
				this.caf = 47
				break;
			case energy_drink:
				this.caf = 200
				break;
			case dark_chocolate:
				this.caf = 23
				break;
			case regular_coffee:
				this.caf = 96
				break;
			case espresso:
				this.caf = 40
				break;
			case custom:
				this.caf = amt;
		} 

		this.mgCaf = amt * this.caf
  	}
}

function displayItems(){

}

function addRow(){

}

function delItem(){

}

function calc(weight, items, now){
	var blood = .07 * weight;
	blood = blood / 2.34;
	var mgCaf = 0;

	for (const i of items) {
		t = now - i.time
		mgCaf = mgCaf + i.mgCaf * Math.pow(2, -4 * t)
	}

	return mgCaf / blood
}