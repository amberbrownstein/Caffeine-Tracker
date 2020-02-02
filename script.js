class Item {
 	constructor(name, amt, time) {
 		this.name = name;
		this.amt = amt;
		this.time = time;

		switch(name) {
			case "Soda":
				this.caf = 45
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
				this.caf = 158
				break;
			case "Dark Chocolate":
				this.caf = 23
				break;
			case "Regular Coffee":
				this.caf = 95
				break;
			case "Espresso":
				this.caf = 64
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

	var del = document.createElement("INPUT");
	del.setAttribute("type", "button");
	del.value = "delete";
	row.appendChild(del);
	del.addEventListener("click", function() { delItem(row); });
}

function delItem(row){
 	document.getElementById("items").removeChild(row);
}

function calc(){
	var rows = document.getElementById("items").rows;
	var items = new Array();

	for (const r of rows) {
		var cells = r.children;
		var item = new Item(cells[0].value, cells[1].value, cells[2].value);
		items.push(item);
	}

	var blood = .07 * document.getElementById("weight").value / 2.34;
	var mgCaf = equation(blood, items);
	var out = document.getElementById("out");
	out.innerHTML = "Your current caffeine level is approximately " + mgCaf + "mg/L.";
	var end = filter(mgCaf, blood).toFixed(2);
	if(mgCaf >= 80){
		var txt = document.createTextNode('You have consumed lethal amounts of caffeine. It will take ' + end + ' hours to return to normal levels.');
		out.appendChild(txt);
	}
	else if(mgCaf > 15){
		var txt = document.createTextNode('You are probably starting to feel the negative side effects of caffeine. It will probably take around ' + end + ' hours before these effects start to diminish.');
		out.appendChild(txt);
	}
	else{
		var txt = document.createTextNode('You can consume ' + end + ' more mg of caffeine before you may start to feel adverse side effects.');
		out.appendChild(txt);
	}
}

function equation(blood, items){
	var now = new Date();
	var mgCaf = 0;

	var dd = String(now.getDate()).padStart(2, '0');
	var mm = String(now.getMonth() + 1).padStart(2, '0');
	var yyyy = now.getFullYear();

	var today = mm + '/' + dd + '/' + yyyy;

	for (const i of items) {
		var t = Date.parse(today + ' ' + i.time);
		t = now - t;
		t = t / (1000 * 60 * 60);
		t = t / 5.7;
		mgCaf = mgCaf + parseFloat(i.mgCaf) * Math.pow(2, 0 - t);
	}

	return (mgCaf / blood).toFixed(2);
}

function filter(start, blood){
	if(start > 15)
		return 5.7 * Math.log2(start/15)
	else return (15 - start) * blood
}