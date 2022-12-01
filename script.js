const app = document.getElementById("app") 

const percent_types = ["Crit. Chance", "CDR"]

for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `
	<p><strong>Pokémon:</strong> ${badge.mon}</p>
    <img class="pet-photo" src="images/${badge.ico}">
	`
	let pos = {}, neg = {};

	for (let k in badge.stat) {
		let v = badge.stat[k]
		if (v < 0) {
			neg[k] = v
		} else {
			pos[k] = v
		}
	}
	for (let k in pos) {
		let v = pos[k]
		if (percent_types.includes(k)) {
			t += `<p class="pos"><strong>${k}:</strong> ${v/1}%</p>`
		} else {
			t += `<p class="pos"><strong>${k}:</strong> ${v}</p>`
		}
	}
	for (let k in neg) {
		let v = neg[k]
		if (percent_types.includes(k)) {
			t += `<p class="neg"><strong>${k}:</strong> ${v}%</p>`
		} else {
			t += `<p class="neg"><strong>${k}:</strong> ${v}</p>`
		}
	}
	for (let x of badge.type) {
		t += `<img src="images/${x}">`
	}
	a.innerHTML = t
	app.appendChild(a)
}