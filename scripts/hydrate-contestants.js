function hydrateContestants() {
	const placeholderContestants
= [
	{
		contestant: 'Adam Woods',
		song: 'Supernatural',
		img: 'https://images.aftonbladet-cdn.se/v2/images/5feeb24b-6bf3-4f2d-bf62-accee8fc310a?fit=crop&format=auto&h=867&q=50&w=1300&s=13491121d9d464fe0bc8e039298cedf1168a661f',
	},
	{
		contestant: 'Samir & Viktor',
		song: 'Hela världen väntar',
		img: 'https://images.aftonbladet-cdn.se/v2/images/5851781b-6bbf-4242-aff9-c31ca5dbcca5?fit=crop&format=auto&h=1267&q=50&w=1900&s=2784fd3505608362b46ef921ba8d8203147d7ef0',
	},
	{
		contestant: 'Melina Borglowe',
		song: 'Min Melodi',
		img: 'https://images.aftonbladet-cdn.se/v2/images/132d1afa-760a-4178-888a-1640dc050dfc?fit=crop&format=auto&h=867&q=50&w=1300&s=62e384037a832c6194191f57c813ea8490ce7db9',
	},
	{
		contestant: 'Elisa Lindström',
		song: 'Forever Yours',
		img: 'https://images.aftonbladet-cdn.se/v2/images/7d3461c7-0c91-4116-87cc-9f1b98d2c793?fit=crop&format=auto&h=867&q=50&w=1300&s=4bca7802aa2993608cefb981bd7ce79a5a4c4d78',
	},
	{
		contestant: 'Lisa Ajax',
		song: 'Awful Liar',
		img: 'https://images.aftonbladet-cdn.se/v2/images/46b06501-bc63-4a0c-a483-21b27cc057db?fit=crop&format=auto&h=867&q=50&w=1300&s=ef4b1daf92d9c9522eb881d3eea14e1ea0b7138f',
	},
	{
		contestant: 'Smash Into Pieces',
		song: 'Heroes are calling',
		img: 'https://images.aftonbladet-cdn.se/v2/images/285e58d2-db40-4da2-bdd5-f77d77c9dd67?fit=crop&format=auto&h=899&q=50&w=1300&s=a1b49d609248a4a4c7bdb439018bd1b63a9b8ab5',
	},
].map(contestant => ({...contestant, id: contestant.contestant.replace(/\s/g, '-').toLowerCase()}));

	// Storage functions

	function setWindowContestants() {
		if (typeof window === 'undefined') {
			return;
		}

		const parsed = JSON.parse(localStorage.getItem('contestants'));

		window.__CONTESTANTS__ = parsed;
	}

	function getContestants() {
		if (typeof window === 'undefined') {
			return;
		}

		if (window.__CONTESTANTS__) {
			return window.__CONTESTANTS__;
		}

		if (localStorage.getItem('contestants')) {
			setWindowContestants();
			return getContestants();
		}

		return [];
	}

	window.getContestants = getContestants;

	function storeContestants(contestants) {
		if (typeof window === 'undefined') {
			return;
		}

		const json = JSON.stringify(contestants);
		localStorage.setItem('contestants', json);
		setWindowContestants();
	}

	// Hydration functions

	function getContainer() {
		return document.getElementById('contestants');
	}

	function clearChildren(container) {
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
	}

	const categories = ['Betyg', 'Kläder', 'Koreografi', 'Sång', 'Musik', 'Scennärvaro'];
	const scaleLength = 10;

	function createRating(category, id, isHeader) {
		const rating = document.createElement('div');
		rating.className = 'rating';

		const name = document.createElement('p');
		name.className = 'rating-name';
		name.textContent = category;

		const scores = document.createElement('div');
		scores.className = 'scores';

		for (let i = 0; i < scaleLength; i++) {
			const score = isHeader ? document.createElement('p') : document.createElement('input');
			score.className = 'score';
			if (isHeader) {
				score.textContent = i + 1;
			} else {
				score.type = 'radio';
				score.name = id + '-' + category;
				score.value = i + 1;
			}

			scores.appendChild(score);
		}

		rating.appendChild(name);
		rating.appendChild(scores);
		return rating;
	}

	function createRatings(contestant) {
		const form = document.createElement('form');
		form.className = 'ratings';
		form.id = 'ratings-' + contestant.id;
		form.setAttribute('data-id', contestant.id);
		form.setAttribute('data-name', contestant.contestant);

		categories.forEach((category, i) => {
			form.appendChild(createRating(category, contestant.id, i === 0));
		});

		return form;
	}

	function createTotal(contestant) {
		const total = document.createElement('input');
		total.type = 'text';
		total.name = 'total';
		total.value = '0/50';
		total.className = 'total';
		total.readOnly = true;
		total.id = 'total' + contestant.id;
		return total;
	}

	function createContestant(contestant) {
		const container = document.createElement('div');
		container.className = 'contestant';
		container.id = contestant.id;

		const img = document.createElement('img');
		img.className = 'contestantImg';
		img.src = contestant.img;
		img.alt = contestant.contestant;

		const name = document.createElement('h2');
		name.textContent = contestant.contestant;

		const song = document.createElement('p');
		song.textContent = contestant.song;

		const info = document.createElement('div');
		info.className = 'info';
		info.appendChild(name);
		info.appendChild(song);

		const infoAndImg = document.createElement('div');
		infoAndImg.className = 'infoAndImg';
		infoAndImg.appendChild(info);
		infoAndImg.appendChild(img);

		const ratingArea = document.createElement('div');
		ratingArea.className = 'ratingArea';
		ratingArea.appendChild(createRatings(contestant));
		ratingArea.appendChild(createTotal(contestant));

		container.appendChild(infoAndImg);
		container.appendChild(ratingArea);

		return container;
	}

	// Expandable form
	function getExpandableContainer() {
		return document.getElementById('expandable-content');
	}

	const usedExpandableIds = [];
	function getExpandableId() {
		for (let i = 0; i < 100; i++) {
			if (!usedExpandableIds.includes(i)) {
				usedExpandableIds.push(i);
				return i;
			}
		}

		alert('Too many contestants!');
		throw new Error('Too many contestants!');
	}

	function createExpandableFormSection(contestant) {
		const container = getExpandableContainer();
		const form = document.createElement('form');
		form.className = 'expandableForm';
		form.id = 'expandableForm-' + (contestant?.id || getExpandableId());
		form.setAttribute('data-id', contestant?.id || '');
		form.setAttribute('data-name', contestant?.contestant || '');

		const fields = document.createElement('div');
		fields.className = 'expandableFields';

		const name = document.createElement('input');
		name.className = 'expandableInput';
		name.type = 'text';
		name.name = 'contestant';
		name.value = contestant?.contestant || '';
		name.placeholder = 'Contestant';
		name.required = true;
		const nameLabel = document.createElement('label');
		nameLabel.textContent = 'Contestant';
		nameLabel.htmlFor = name.id;

		const song = document.createElement('input');
		song.className = 'expandableInput';
		song.type = 'text';
		song.name = 'song';
		song.value = contestant?.song || '';
		song.placeholder = 'Song';
		song.required = true;
		const songLabel = document.createElement('label');
		songLabel.textContent = 'Song';
		songLabel.htmlFor = song.id;

		const img = document.createElement('input');
		img.className = 'expandableInput';
		img.type = 'text';
		img.name = 'img';
		img.placeholder = 'Image URL';
		img.value = contestant?.img || '';
		img.required = true;
		const imgLabel = document.createElement('label');
		imgLabel.textContent = 'Image URL';
		imgLabel.htmlFor = img.id;

		const nameField = document.createElement('div');
		nameField.className = 'expandableField';
		nameField.appendChild(nameLabel);
		nameField.appendChild(name);
		fields.appendChild(nameField);
		const songField = document.createElement('div');
		songField.className = 'expandableField';
		songField.appendChild(songLabel);
		songField.appendChild(song);
		fields.appendChild(songField);
		const imgField = document.createElement('div');
		imgField.className = 'expandableField';
		imgField.appendChild(imgLabel);
		imgField.appendChild(img);
		fields.appendChild(imgField);

		const buttonDiv = document.createElement('div');
		buttonDiv.className = 'expandableButtons';

		const submit = document.createElement('input');
		submit.type = 'submit';
		submit.role = 'button';
		submit.value = 'Submit';
		buttonDiv.appendChild(submit);

		const remove = document.createElement('input');
		remove.type = 'button';
		remove.role = 'button';
		remove.value = 'Remove';
		remove.addEventListener('click', () => {
			const contestant = form.getAttribute('data-name');
			const contestants = getContestants().filter(c => c.contestant !== contestant);
			updateContestants(contestants);
		});

		buttonDiv.appendChild(remove);

		form.appendChild(fields);
		form.appendChild(buttonDiv);

		form.addEventListener('submit', event => {
			event.preventDefault();
			const formData = new FormData(form);
			const contestant = {
				id: form.getAttribute('data-id'),
				img: formData.get('img'),
				contestant: formData.get('contestant'),
				song: formData.get('song'),
			};
			if (contestant.id) {
				updateContestants(getContestants().map(c => c.id === contestant.id ? contestant : c));
			} else {
				updateContestants(getContestants().concat({...contestant, id: contestant.contestant.replace(/\s/g, '-').toLowerCase()}));
			}

			const forms = document.querySelectorAll('.expandableForm');
			const contestants = getContestants();
			if (forms.length <= contestants.length) {
				createExpandableFormSection();
			}
		});
		container.appendChild(form);
	}

	function createExpandableForms() {
		const container = getExpandableContainer();
		clearChildren(container);
		const contestants = getContestants();
		contestants.forEach(contestant => {
			createExpandableFormSection(contestant);
		});
		createExpandableFormSection();
	}

	// Main functions

	function renderContestants(contestants) {
		const container = getContainer();
		clearChildren(container);
		contestants.forEach(contestant => {
			container.appendChild(createContestant(contestant));
		});
		createExpandableForms();
	}

	const updateEmitter = new Event('updateContestants');

	function updateContestants(contestants) {
		storeContestants(contestants);
		renderContestants(contestants);
		document.dispatchEvent(updateEmitter);
	}

	if (getContestants().length === 0) {
		storeContestants(placeholderContestants);
	}

	if (getContestants().length === 0) {
		storeContestants(placeholderContestants);
	}

	renderContestants(getContestants());
}

hydrateContestants();
