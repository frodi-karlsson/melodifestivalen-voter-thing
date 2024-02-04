function hydrateContestants() {
	const {State, Util} = window;
	// Hydration functions

	function getContainer() {
		return document.getElementById('contestants');
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

		container.prepend(infoAndImg);
		return container;
	}

	// Main functions

	function renderContestants(contestants) {
		const container = getContainer();
		Util.clearChildren(container);
		contestants.forEach(contestant => {
			container.appendChild(createContestant(contestant));
		});
	}

	const contestants = State.get('contestants');
	renderContestants(contestants);
	window.State.on('update', () => {
		renderContestants(State.get('contestants'));
	});
}

hydrateContestants();
