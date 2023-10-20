document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.001}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .001}deg;
		`
	})
})
// function redirectToPage() {
//     location.replace("index.html")
// }

