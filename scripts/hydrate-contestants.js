function hydrateContestants() {
	const {getDefaultContestants, getContestants, storeContestants} = window;
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
		name.className = 'ratingName';
		name.textContent = category;
		name.style.visibility = isHeader ? 'hidden' : 'visible';

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
				score.ariaLabel = category + ' ' + (i + 1);
				score.addEventListener('updateSummary', () => {
					fillSummary();
				});
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
		const totalWrapper = document.createElement('div');
		totalWrapper.className = 'totalWrapper';
		totalWrapper.id = 'totalWrapper' + contestant.id;
		const total = document.createElement('p');
		total.name = 'total';
		total.textContent = '0/50';
		total.className = 'total';
		total.id = 'total' + contestant.id;
		totalWrapper.appendChild(total);
		return totalWrapper;
	}

	function createContestant(contestant) {
		const container = document.createElement('div');
		container.className = 'contestant';
		container.id = contestant.id;

		const img = document.createElement('img');
		img.className = 'contestantImg';
		img.src = contestant.img;
		img.alt = contestant.contestant;

		const name = document.createElement('h1');
		name.textContent = contestant.contestant;

		const song = document.createElement('h2');
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

		alert('För många deltagare!');
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
		name.placeholder = 'Deltagare';
		name.required = true;
		name.id = 'contestant-' + form.id;
		const nameLabel = document.createElement('label');
		nameLabel.textContent = 'Deltagare';
		nameLabel.htmlFor = name.id;

		const song = document.createElement('input');
		song.className = 'expandableInput';
		song.type = 'text';
		song.name = 'song';
		song.value = contestant?.song || '';
		song.placeholder = 'Låt';
		song.required = true;
		song.id = 'song-' + form.id;
		const songLabel = document.createElement('label');
		songLabel.textContent = 'Låt';
		songLabel.htmlFor = song.id;

		const img = document.createElement('input');
		img.className = 'expandableInput';
		img.type = 'text';
		img.name = 'img';
		img.placeholder = 'Bildlänk';
		img.value = contestant?.img || '';
		img.required = true;
		img.id = 'img-' + form.id;
		const imgLabel = document.createElement('label');
		imgLabel.textContent = 'Bildlänk';
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
		submit.value = 'Spara';
		buttonDiv.appendChild(submit);

		const remove = document.createElement('input');
		remove.type = 'button';
		remove.role = 'button';
		remove.value = 'Ta bort';
		remove.addEventListener('click', () => {
			const contestant = form.getAttribute('data-name');
			const contestants = getContestants().filter(c => c.contestant !== contestant);
			document.dispatchEvent(new CustomEvent('show-toast', {detail: {message: 'Deltagare borttagen'}}));
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

			document.dispatchEvent(new CustomEvent('show-toast', {detail: {message: 'Deltagare sparad'}}));
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

	function fillSummary() {
		const scores = window.getScores?.() || [];
		const summary = document.getElementById('summary');
		summary.innerHTML = '';
		scores.forEach(score => {
			const contestant = document.createElement('div');
			contestant.className = 'contestantSummary';
			const name = document.createElement('h2');
			name.className = 'contestantSummaryName';
			name.textContent = getContestants().find(c => c.id === score.id).contestant;
			const scoreDiv = document.createElement('div');
			scoreDiv.className = 'contestantSummaryScores';
			score.scores.forEach(s => {
				const category = document.createElement('div');
				category.className = 'contestantSummaryCategory';
				const categoryName = document.createElement('p');
				categoryName.textContent = s.category;
				categoryName.className = 'contestantSummaryCategoryName';
				const categoryValue = document.createElement('p');
				categoryValue.textContent = s.value;
				categoryValue.className = 'contestantSummaryCategoryValue';
				category.appendChild(categoryName);
				category.appendChild(categoryValue);
				scoreDiv.appendChild(category);
			});
			const total = document.createElement('p');
			total.className = 'contestantSummaryTotal';
			total.textContent = score.total;
			contestant.appendChild(name);
			contestant.appendChild(scoreDiv);
			contestant.appendChild(total);
			summary.appendChild(contestant);
		});
	}

	// Main functions

	function renderContestants(contestants) {
		const container = getContainer();
		clearChildren(container);
		contestants.forEach(contestant => {
			container.appendChild(createContestant(contestant));
		});
		createExpandableForms();
		fillSummary();
	}

	const updateEmitter = new CustomEvent('updateContestants');

	function updateContestants(contestants) {
		storeContestants(contestants);
		renderContestants(contestants);
		document.dispatchEvent(updateEmitter);
	}

	if (getContestants().length === 0) {
		storeContestants(getDefaultContestants());
	}

	if (getContestants().length === 0) {
		storeContestants(getDefaultContestants());
	}

	renderContestants(getContestants());
}

hydrateContestants();

document.addEventListener('updateCompetitions', () => {
	hydrateContestants();
});
