const app = document.getElementById("app") 


for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `<p class="titlecolor"><strong>${badge.Name}</strong></p>`

	for (let k in badge.Info) {
		let v = badge.Info[k]
			t += `<p><strong>${k}:</strong> ${v}</p>`
	}
	for (let x of badge.type) {
		t += `<img src="images/${x}.png">`
	}	
	a.innerHTML = t
	app.appendChild(a)
}