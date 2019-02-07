class Post {
	constructor(element) {
		this.element = element;
		this.button = element.querySelector('.open-button');
		this.button.addEventListener('click', () => this.openPost());
	}
	openPost() {
		this.element.classList.toggle('open-post');

		if (this.element.classList.contains('open-post')) {
			this.button.textContent = 'Close';
		} else {
			this.button.textContent = 'Open';
		}
	}
}

const posts = document.querySelectorAll('.post').forEach((post) => new Post(post));
