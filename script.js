Using Math.pow

class Item {
 	constructor(name, amt, time) {
 		this.name = name;
		this.amt = amt;
		this.time = time;

		switch(name) {
			case cola:
				this.caf = 9.7
				break;
			case green_tea:
				this.caf = 12.1
				break;
			case milk_chocolate:
				this.caf = 20
				break;
			case black_tea:
				this.caf = 22.5
				break;
			case energy_drink:
				this.caf = 32
				break;
			case dark_chocolate:
				this.caf = 59
				break;
			case black_coffee:
				this.caf = 74.7
				break;
			case white_coffee:
				this.caf = 86.9
				break;
			case capuccino:
				this.caf = 101.9
				break;
			case espresso:
				this.caf = 194
				break;
			case custom:
				this.caf = amt;
		} 

		this.mgCaf = amt * this.caf
  	}
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