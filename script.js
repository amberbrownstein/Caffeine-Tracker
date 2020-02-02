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

function addRow(){
	var list = document.getElementById("items")
	var row = list.insertRow();
	row.classList.add("rows");
	list.appendChild(row);

	var items = document.createElement("SELECT");
	row.appendChild(items);

	var option = document.createElement("option");
	var t = document.createTextNode("Soda");
	option.appendChild(t);
	items.add(option);

	var amt = document.createElement("INPUT");
	amt.setAttribute("type", "number");
	amt.setAttribute("name", "amt");
	row.appendChild(amt);

	var time = document.createElement("INPUT");
	time.setAttribute("type", "time");
	amt.setAttribute("name", "time");
	row.appendChild(time);

	var del = row.insertCell(-1)
	del.setAttribute("type", "button");
	del.innerHTML = "delete";
	row.appendChild(del);
	del.addEventListener("click", function() { deleteItem(row); });
}

function delItem(row){
	var i = row.parentNode.parentNode.rowIndex;
 	document.getElementById("items").deleteRow(i);
}

function calc(){var rows = document.getElementById(items).rows;
	for (const r of rows) {
		item = new Item(r.name, r.amt, r.time);
		items.push(item);
	}

	var mgCaf = equation(document.getElementById("weight"), items, Date.now());
	var out = document.getElementById("out");
	out.innerHTML = "Your current caffeine level is approximately " + mgCaf + "mg/L.";
}

function equation(weight, items, now){
	var blood = .07 * weight;
	blood = blood / 2.34;
	var mgCaf = 0;

	for (const i of items) {
		t = now - i.time;
		mgCaf = mgCaf + i.mgCaf * Math.pow(2, -4 * t);
	}

	return mgCaf / blood;
}
