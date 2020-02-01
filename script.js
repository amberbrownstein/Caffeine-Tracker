Using Math.pow

function calc(weight, items, now){
	var blood = .07 * weight;
	blood = blood / 2.34;
	var mgCaf = 0;

	for (const i of items) {
		t = now - i.time
		mgCaf = mgCaf + i.mgCaf * Math.pow(2, -4 * t)
	}

	var mgL = mgCaf / blood
}