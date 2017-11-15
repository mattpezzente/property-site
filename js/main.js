(() => {
	let imgButtons
	if (document.querySelector('button[data-img]')) {
		imgButtons = document.querySelectorAll('button[data-img]')
		for (let i = 0; i < imgButtons.length; i++) {
			imgButtons[i].addEventListener('click', changeSelected)
		}
	}
})()

function changeSelected(e) {
	e.preventDefault()
	const imgButtons = document.querySelectorAll('button[data-img]')
	const galleryImages = document.querySelectorAll('.gallery-img')
	for (let i = 0; i < imgButtons.length; i++) {
		if (imgButtons[i].classList.length > 1) {
			imgButtons[i].classList.remove('img-selector-selected')
		}
	}
	for (let i = 0; i < galleryImages.length; i++) {
		if (galleryImages[i].classList.length > 1) {
			galleryImages[i].classList.remove('img-visible')
		}
	}
	e.target.classList.add('img-selector-selected')
	galleryImages[e.target.dataset.img].classList.add('img-visible')
}