function ratingsHandler() {
	const {getContestants} = window;
	const radios = document.querySelectorAll('input[type="radio"]');
	const numCategories = 5;
	const scoresPerCategory = 10;
	const scores = Array(getContestants().length).fill(0).map(() => Array(numCategories).fill(0));
	const contestantRadios = new Array(getContestants().length).fill(0).map(() => Array(numCategories).fill(0).map(() => Array(scoresPerCategory).fill(0)));
	radios.forEach((radio, index) => {
		const value = parseInt(radio.value, 10);
		const contestant = Math.floor(index / (numCategories * scoresPerCategory));
		const category = Math.floor(index / scoresPerCategory) % numCategories;
		const score = index % scoresPerCategory;
		if (contestantRadios[contestant][category][score] === value) {
			return;
		}

		contestantRadios[contestant][category][score] = radio;
		radio.tabIndex = (contestant * 10) + category + 2;
		radio.addEventListener('change', () => {
			scores[contestant][category] = value;
			updateScores();
		});
	});
	const totals = document.querySelectorAll('input[class="total"]');
	totals.forEach((total, index) => {
		total.value = '0/50';
		total.setAttribute('tabindex', -1);
	});
	function updateScores() {
		scores.forEach((contestantScores, contestant) => {
			const total = contestantScores.reduce((a, b) => a + b, 0);
			totals[contestant].value = total + '/50';
		});
	}
}

ratingsHandler();
document.addEventListener('updateContestants', () => {
	ratingsHandler();
});
