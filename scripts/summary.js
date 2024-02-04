function summary() {
	const {State, Util} = window;
	const {RATING_CATEGORIES} = window.Config;
	const categories = RATING_CATEGORIES.slice(1);

	function fillSummary() {
		const summary = document.getElementById('summary');
		Util.clearChildren(summary);
		const scores = State.get('contestants').map(contestant => ({
			contestant: contestant.contestant,
			scores: contestant.scores,
			total: contestant.scores.reduce((acc, score) => acc + score, 0),
		}));
		scores.forEach((scoreObj, index) => {
			const contestant = document.createElement('div');
			contestant.className = 'contestantSummary';
			const name = document.createElement('h2');
			name.className = 'contestantSummaryName';
			name.textContent = State
				.get('contestants')[index]
				.contestant;
			const scoreDiv = document.createElement('div');
			scoreDiv.className = 'contestantSummaryScores';
			scoreObj.scores.forEach((s, i) => {
				const category = document.createElement('div');
				category.className = 'contestantSummaryCategory';
				const categoryName = document.createElement('p');
				categoryName.textContent = categories[i];
				categoryName.className = 'contestantSummaryCategoryName';
				const categoryValue = document.createElement('p');
				categoryValue.textContent = s;
				categoryValue.className = 'contestantSummaryCategoryValue';
				category.appendChild(categoryName);
				category.appendChild(categoryValue);
				scoreDiv.appendChild(category);
			});
			const total = document.createElement('p');
			total.className = 'contestantSummaryTotal';
			total.textContent = scoreObj.total;
			contestant.appendChild(name);
			contestant.appendChild(scoreDiv);
			contestant.appendChild(total);
			summary.appendChild(contestant);
		});
	}

	fillSummary();
	State.on('update', fillSummary);
}

summary();
