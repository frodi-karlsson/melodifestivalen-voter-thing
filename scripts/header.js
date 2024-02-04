function header() {
	const {State} = window;
	const selectionContainer = document.getElementById('competitionSelectionContainer');
	const select = document.createElement('select');
	select.id = 'competitionSelection';
	select.name = 'competitionSelection';
	const competitions = State.get('competitions');
	const currentCompetitionIndex = State.get('currentCompetition');
	const currentCompetition = competitions[currentCompetitionIndex];
	select.value = currentCompetition.name;
	competitions.forEach((competition, index) => {
		const option = document.createElement('option');
		option.id = 'competitionSelection' + index;
		option.value = competition.name;
		option.textContent = competition.name;
		select.appendChild(option);
	});
	function setSelected() {
		select.value = currentCompetition.name;
		select.setAttribute('data-index', currentCompetitionIndex);
	}

	setSelected();
	select.addEventListener('change', e => {
		const index = e.target.selectedIndex;
		select.setAttribute('data-index', index);
		State.set('currentCompetition', index);
		document.dispatchEvent(new CustomEvent('show-toast', {detail: {message: 'Ändrade till ' + e.target.value}}));
	});
	selectionContainer.appendChild(select);
}

header();
