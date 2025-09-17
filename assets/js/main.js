// Mobile drawer toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const drawer = document.querySelector('[data-drawer]');
if (menuBtn && drawer) {
	menuBtn.addEventListener('click', () => {
		drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
		menuBtn.setAttribute('aria-expanded', drawer.style.display === 'block');
	});
}

// Smooth anchor fix for fixed header
const header = document.querySelector('.site-header');
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', e => {
		const id = a.getAttribute('href').slice(1);
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			const top = el.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 0) - 8;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	});
});

// Lazyload fallback for older browsers
if ('loading' in HTMLImageElement.prototype === false) {
	const imgs = document.querySelectorAll('img[loading="lazy"]');
	const script = document.createElement('script');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
	script.integrity = 'sha512-q1b8i8q0g8z5vVx9VgYtW3qk9iJ2x7f1jv7+Vh4h5N3Jg2p4ZzQ5N0hZQ6o8H5p1W1o0Qb8e6J8S3oY6uN7Ryg==';
	script.crossOrigin = 'anonymous';
	document.body.appendChild(script);
	imgs.forEach(img => { img.classList.add('lazyload'); });
}

// External links: open in new tab with rel
Array.from(document.querySelectorAll('a[href^="http"]:not([href*="imnotahuman.org"])')).forEach(a => {
	a.setAttribute('target', '_blank');
	a.setAttribute('rel', 'noopener');
}); 