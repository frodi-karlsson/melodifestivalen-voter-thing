function ratingsHandler() {
	const {State} = window;
	const {RATING_CATEGORIES, SCALE_LENGTH} = window.Config;
	const numCategories = RATING_CATEGORIES.length - 1;

	function createRating(category, contestant, isHeader) {
		const rating = document.createElement('div');
		rating.className = 'rating';

		const name = document.createElement('p');
		name.className = 'ratingName';
		name.textContent = category;
		name.style.visibility = isHeader ? 'hidden' : 'visible';

		const scores = document.createElement('div');
		scores.className = 'scores';

		const categoryIndex = RATING_CATEGORIES.indexOf(category) - 1;
		for (let i = 0; i < SCALE_LENGTH; i++) {
			const score = isHeader ? document.createElement('p') : document.createElement('input');
			score.className = 'score';
			if (isHeader) {
				score.textContent = i + 1;
			} else {
				if (contestant.scores[categoryIndex] === i + 1) {
					score.checked = true;
				}

				score.type = 'radio';
				score.name = contestant.id + '-' + category;
				score.value = i + 1;
				score.ariaLabel = category + ' ' + (i + 1);
				score.addEventListener('change', () => {
					State.set('contestants',
						State.get('contestants')
							.map(c => c.id === contestant.id ? {
								...c,
								scores: c.scores.map((s, j) => j === categoryIndex ? i + 1 : s),
							} : c),
					);
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

		RATING_CATEGORIES.forEach((category, i) => {
			form.appendChild(createRating(category, contestant, i === 0));
		});

		return form;
	}

	function createTotal(contestant) {
		const totalWrapper = document.createElement('div');
		totalWrapper.className = 'totalWrapper';
		totalWrapper.id = 'totalWrapper' + contestant.id;
		const total = document.createElement('p');
		total.name = 'total';
		total.textContent = contestant.scores.reduce((acc, score) => acc + score, 0) + ' / ' + (SCALE_LENGTH * numCategories);
		total.className = 'total';
		total.id = 'total' + contestant.id;
		totalWrapper.appendChild(total);
		return totalWrapper;
	}

	function renderRatings(contestant) {
		const container = document.getElementById(contestant.id);
		const ratingArea = document.createElement('div');
		ratingArea.className = 'ratingArea';
		ratingArea.id = 'ratingArea_' + contestant.id;
		ratingArea.appendChild(createRatings(contestant));
		ratingArea.appendChild(createTotal(contestant));
		container.appendChild(ratingArea);
	}

	function onUpdate() {
		const contestants = State.get('contestants');
		const ratingAreas = document.querySelectorAll('.ratingArea');
		ratingAreas.forEach(ratingArea => {
			ratingArea.remove();
		});
		contestants.forEach(contestant => {
			renderRatings(contestant);
		});
	}

	onUpdate();
	State.on('update', onUpdate);
}

ratingsHandler();
