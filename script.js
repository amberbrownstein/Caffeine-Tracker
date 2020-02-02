class Item {
 	constructor(name, amt, time) {
 		this.name = name;
		this.amt = amt;
		this.time = time;

		switch(name) {
			case "Soda":
				this.caf = 40
				break;
			case "Green Tea":
				this.caf = 28
				break;
			case "Milk Chocolate":
				this.caf = 6
				break;
			case "Black Tea":
				this.caf = 47
				break;
			case "Energy Drink":
				this.caf = 200
				break;
			case "Dark Chocolate":
				this.caf = 23
				break;
			case "Regular Coffee":
				this.caf = 96
				break;
			case "Espresso":
				this.caf = 40
				break;
			case "Custom":
				this.caf = amt;
		} 

		this.mgCaf = amt * this.caf
  	}
}

function addRow(){
	it = [" ", "Soda", "Green Tea","Milk Chocolate", "Black Tea", "Energy Drink", "Dark Chocolate", "Regular Coffee", "Espresso", "Custom"]

	var list = document.getElementById("items")
	var row = list.insertRow();
	row.classList.add("rows");
	list.appendChild(row);

	var items = document.createElement("SELECT");
	row.appendChild(items);

	for(const i of it){
		var option = document.createElement("option");
		var t = document.createTextNode(i);
		option.appendChild(t);
		items.add(option);
	}

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
	del.addEventListener("click", function() { delItem(row); });
}

function delItem(row){
	var i = row.parentNode.parentNode.rowIndex;
 	document.getElementById("items").deleteRow(i);
}

function calc(){
	var rows = document.getElementById("items").rows;
	for (const r of rows) {
		item = new Item(r[0].value, r[1].value, r[2].value);
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
