gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// function showDescription(element) {
//     element.querySelector('.ability-description').style.display = 'block';
// }

// function hideDescription(element) {
//     element.querySelector('.ability-description').style.display = 'none';
// }

// const button = document.getElementById("runaway-btn");

// const animateMove = (element, prop, pixels) =>
//   anime({
//     targets: element,
//     [prop]: `${pixels}px`,
//     easing: "easeOutCirc"
//   });

// ["mouseover", "click"].forEach(function (el) {
//   button.addEventListener(el, function (event) {
//     const top = getRandomNumber(window.innerHeight - this.offsetHeight);
//     const left = getRandomNumber(window.innerWidth - this.offsetWidth);

//     animateMove(this, "left", left).play();
//     animateMove(this, "top", top).play();
//   });
// });

// const getRandomNumber = (num) => {
//   return Math.floor(Math.random() * (num + 1));
// };
