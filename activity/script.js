const app = document.getElementById("app") 


for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `<p class="titlecolor"><strong>${badge.Name}</strong></p>`
	t += `<p><strong>${badge.Date}</strong></p>`
	for (let x of badge.Image) {
		t += `<img style="text-align:center" src="../images/${x}.png">`
	}	
	t += `</center>`
	a.innerHTML = t
	app.appendChild(a)
}