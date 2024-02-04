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
		radio.addEventListener('change', () => {
			scores[contestant][category] = value;
			updateScores();
			radio.dispatchEvent(new Event('updateSummary'));
		});
	});
	const totals = document.querySelectorAll('.total');
	totals.forEach((total, index) => {
		total.textContent = '0/50';
	});
	function updateScores() {
		scores.forEach((contestantScores, contestant) => {
			const total = contestantScores.reduce((a, b) => a + b, 0);
			totals[contestant].textContent = total + '/50';
		});
	}
}

function getScores() {
	const {getContestants} = window;
	const scores = [];
	getContestants().forEach((contestant, index) => {
		const obj = {};
		const radios = document.querySelectorAll('input[type="radio"][name^="' + contestant.id + '"]:checked');
		const total = document.querySelectorAll('.total')[index];
		const categoryScores = [];
		radios.forEach((radio, index) => {
			const value = parseInt(radio.value, 10);
			const category = radio.name.split('-').pop();
			categoryScores.push({category, value});
		});
		obj.id = contestant.id;
		obj.total = total.textContent;
		obj.scores = categoryScores;
		scores.push(obj);
	});
	return scores;
}

window.getScores = getScores;

ratingsHandler();
document.addEventListener('updateContestants', () => {
	ratingsHandler();
});
