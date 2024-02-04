function storage() {
	function addIds(contestants) {
		return contestants.map(contestant => ({...contestant, id: contestant.contestant.replace(/\s/g, '-').toLowerCase()}));
	}

	const competitions
= [{
	name: 'Deltävling 1',
	expires: Date.parse('2024-02-04T01:00:00Z'),
	competitors: addIds([
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
	])},
{
	name: 'Deltävling 2',
	expires: Date.parse('2024-02-11T01:00:00Z'),
	competitors: addIds([
		{
			contestant: 'Maria Sur',
			song: 'When I\'m Gone',
			img: 'https://images.aftonbladet-cdn.se/v2/images/873fd2df-1494-4a68-9ac6-7c804468cf32?fit=crop&format=auto&h=867&q=50&w=1300&s=54fc14e2eb8778c52f9501f2848d39cbca740228',
		},
		{
			contestant: 'Engmans Kapell',
			song: 'Norrland',
			img: 'https://images.aftonbladet-cdn.se/v2/images/4baad791-10f5-45c4-a9f8-c20341b5274c?fit=crop&format=auto&h=867&q=50&w=1300&s=36b1bf3671c4045b34055882a71baf5cca045e58',
		},
		{
			contestant: 'Dear Sara',
			song: 'The silence after you',
			img: 'https://images.aftonbladet-cdn.se/v2/images/cce6b111-6748-4ba9-bbe9-c3ad60bf519a?fit=crop&format=auto&h=867&q=50&w=1300&s=c6c54c8c7c1e0cb451da2e8ae6f8e1e352b0314a',
		},
		{
			contestant: 'C-Joe',
			song: 'Ahumma',
			img: 'https://images.aftonbladet-cdn.se/v2/images/a78f49e2-d416-45a3-99a2-55ab6808a10a?fit=crop&format=auto&h=867&q=50&w=1300&s=ae5cfb024048b2ef271be48a0f497649ea89c9f1',
		},
		{
			contestant: 'Liamoo',
			song: 'Dragon',
			img: 'https://images.aftonbladet-cdn.se/v2/images/c132430b-370f-4c4e-8b40-4277deabdace?fit=crop&format=auto&h=867&q=50&w=1300&s=d0103519993edbc1afea5bac2b002a4551c0b666',
		},
		{
			contestant: 'Fröken Snusk',
			song: 'Unga & Fria',
			img: 'https://images.aftonbladet-cdn.se/v2/images/efc81cf5-1379-4959-aef3-b73fa4129a50?fit=crop&format=auto&h=867&q=50&w=1300&s=7d5c22c43104e15db100dc4cca4e1d28eb257b26',
		},
	])},
{
	name: 'Deltävling 3',
	expires: Date.parse('2024-02-18T01:00:00Z'),
	competitors: addIds([
		{
			contestant: 'Jacqline',
			song: 'Effortless',
			img: 'https://images.aftonbladet-cdn.se/v2/images/09044a8f-4f98-4990-98dd-e6628f97f56e?fit=crop&format=auto&h=867&q=50&w=1300&s=e0abf77a672cf08fbdd4e57bc709ca36d6361e4c',
		},
		{
			contestant: 'Clara Klingenström',
			song: 'Aldrig mer',
			img: 'https://images.aftonbladet-cdn.se/v2/images/06c2589c-0cd7-4df9-aecb-b93d53ee4b0d?fit=crop&format=auto&h=867&q=50&w=1300&s=d3ae45273a65839b7342022464c20937e06b3a5a',
		},
		{
			contestant: 'Kim Cesarion',
			song: 'Take my breath away',
			img: 'https://images.aftonbladet-cdn.se/v2/images/21e64929-9d64-4c65-b797-e381719b69b8?fit=crop&format=auto&h=867&q=50&w=1300&s=a991ddaf3331fa3314ab2272b0348d03e56f3f04',
		},
		{
			contestant: 'Klaudy',
			song: 'För dig',
			img: 'https://images.aftonbladet-cdn.se/v2/images/7dc3ca1b-58ca-4312-8e40-816455ffdee7?fit=crop&format=auto&h=867&q=50&w=1300&s=bd79583d03e88c32b216a9a1a1a266d03307948f',
		},
		{
			contestant: 'Gunilla Persson',
			song: 'I won\'t shake',
			img: 'https://images.aftonbladet-cdn.se/v2/images/0de1fb70-f50a-448b-a4f9-158f096ef0f2?fit=crop&format=auto&h=867&q=50&w=1300&s=6bbab534635323de2e775d1eee7d4f1135a75871',
		},
		{
			contestant: 'Cazzi Opeia',
			song: 'Give my heart a break',
			img: 'https://images.aftonbladet-cdn.se/v2/images/64831a6b-3557-418f-b57f-8d1eef940366?fit=crop&format=auto&h=867&q=50&w=1300&s=4aac99bc8a17e781bdf4958969c869387d6f811f',
		},
	])},
{
	name: 'Deltävling 4',
	expires: Date.parse('2024-02-25T01:00:00Z'),
	competitors: addIds([
		{
			contestant: 'Albin Tingvall',
			song: 'Done getting over you',
			img: 'https://images.aftonbladet-cdn.se/v2/images/bd07398c-5cef-4225-a8ec-c0af6e38abe9?fit=crop&format=auto&h=867&q=50&w=1300&s=37d2be1611eb6fadea4d884c91a14066d96a5baa',
		},
		{
			contestant: 'Lia Larsson',
			song: '30 km/h',
			img: 'https://images.aftonbladet-cdn.se/v2/images/1d39221e-1104-4367-a6c5-bb92e6b72e66?fit=crop&format=auto&h=867&q=50&w=1300&s=a6b59bbdaa496d450bc5741f7cd2fde48064c5c5',
		},
		{
			contestant: 'Dotter',
			song: 'It\'s not easy to write a love song',
			img: 'https://images.aftonbladet-cdn.se/v2/images/492e4765-15a9-429e-993e-375df19cb833?fit=crop&format=auto&h=867&q=50&w=1300&s=f8b19c8a63bd66a9bbfe515461882f3e9ae36f00',
		},
		{
			contestant: 'Scarlet',
			song: 'Circus X',
			img: 'https://images.aftonbladet-cdn.se/v2/images/5fc9c4d3-2fd1-4840-9854-18c341c54ec4?fit=crop&format=auto&h=867&q=50&w=1300&s=cfd4aed7f2fee0c4cd4a650ae5fed50315f3f6ee',
		},
		{
			contestant: 'Lasse Stefanz',
			song: 'En sång om sommaren',
			img: 'https://images.aftonbladet-cdn.se/v2/images/a9ff6717-6ef9-4800-bbdb-5e8ab7a84af2?fit=crop&format=auto&h=867&q=50&w=1300&s=41b109289035997889120ab2e2afa333e851addf',
		},
		{
			contestant: 'Danny Saucedo',
			song: 'Happy that you found me',
			img: 'https://images.aftonbladet-cdn.se/v2/images/f9b42e66-9def-4a2b-af59-ac43372369ba?fit=crop&format=auto&h=867&q=50&w=1300&s=dc2640b42d4e9086e2121d1363c3cce5338144ae',
		},
	])},
{
	name: 'Deltävling 5',
	expires: Date.parse('2024-03-03T01:00:00Z'),
	competitors: addIds([
		{
			contestant: 'Marcus & Martinus',
			song: 'Unforgettable',
			img: 'https://images.aftonbladet-cdn.se/v2/images/6de168e4-d806-4643-bc7c-e0fd6ceb0a3f?fit=crop&format=auto&h=867&q=50&w=1300&s=dd118cf4987ccfd43f36b42f002dee9ad0c253ef',
		},
		{
			contestant: 'Chelsea Muco',
			song: 'Controlla',
			img: 'https://images.aftonbladet-cdn.se/v2/images/d351d35a-2ff8-439c-b230-2a793b17ceaa?fit=crop&format=auto&h=867&q=50&w=1300&s=82ce1f18ff36549ae16f07637f1e7017256bcd90',
		},
		{
			contestant: 'Jay Smith',
			song: 'Back to my roots',
			img: 'https://images.aftonbladet-cdn.se/v2/images/a78ec249-0819-45e6-9620-3c1d9135738b?fit=crop&format=auto&h=867&q=50&w=1300&s=e9b2aaef3906cf5017fb8184e09503d54b2d64d9',
		},
		{
			contestant: 'Elecktra',
			song: 'Banne maj',
			img: 'https://images.aftonbladet-cdn.se/v2/images/f5838e0f-d058-4567-b9ca-6baa03c2848b?fit=crop&format=auto&h=867&q=50&w=1300&s=034830c2ef48ccab1f3e8500e56d4b86e7b35d8c',
		},
		{
			contestant: 'Annika Wickihalder',
			song: 'Light',
			img: 'https://images.aftonbladet-cdn.se/v2/images/cb6fbb9a-855c-44d8-b98f-b9f7fbbade50?fit=crop&format=auto&h=867&q=50&w=1300&s=f8d20c2eae94fb0fdb4e06365d5f1c814cacabb3',
		},
		{
			contestant: 'Medina',
			song: 'Que sera',
			img: 'https://images.aftonbladet-cdn.se/v2/images/436e7ced-963f-4ef5-b113-b05f20db8389?fit=crop&format=auto&h=867&q=50&w=1300&s=161d277c62f9e20cdffb9b36388f3d5b8c015184',
		},
	])}];

	window.competitions = competitions;
	const initTime = Date.now();
	const findCurrentIndex = competitions => competitions.findIndex(competition => competition.expires > initTime);

	function setWindow(storageKey, windowKey) {
		if (typeof window === 'undefined') {
			return;
		}

		window[windowKey] = JSON.parse(localStorage.getItem(storageKey));
	}

	function isDefined(value) {
		return value !== undefined && value !== null;
	}

	function get(storageKey, windowKey, fallbackFn, mapFn) {
		if (typeof window === 'undefined') {
			return;
		}

		const localStorageValue = localStorage.getItem(storageKey);
		const windowValue = window[windowKey];
		if (!isDefined(localStorageValue) && !isDefined(windowValue)) {
			localStorage.setItem(storageKey, JSON.stringify(fallbackFn()));
			setWindow(storageKey, windowKey);
		} else if (isDefined(localStorageValue) && !isDefined(windowValue)) {
			setWindow(storageKey, windowKey);
		} else if (!isDefined(localStorageValue) && isDefined(windowValue)) {
			localStorage.setItem(storageKey, JSON.stringify(windowValue));
		} else if (
			JSON.stringify(JSON.parse(localStorageValue)) !== JSON.stringify(windowValue)
		) {
			localStorage.setItem(storageKey, JSON.stringify(windowValue));
		}

		const ret = window[windowKey];
		if (mapFn) {
			return mapFn(ret);
		}

		return ret;
	}

	function store(storageKey, windowKey, data) {
		if (typeof window === 'undefined') {
			return;
		}

		const json = JSON.stringify(data);
		localStorage.setItem(storageKey, json);
		setWindow(storageKey, windowKey);
	}

	function getCompetitions() {
		return get('competitions', '__COMPETITIONS__', () => competitions);
	}

	function storeCompetitions(competitions) {
		store('competitions', '__COMPETITIONS__', competitions);
	}

	function getCurrentCompetition() {
		return get('currentCompetition', '__CURRENT_COMPETITION__', () => findCurrentIndex(window.getCompetitions()));
	}

	function storeCurrentCompetition(currentCompetition) {
		store('currentCompetition', '__CURRENT_COMPETITION__', currentCompetition);
	}

	function getContestants() {
		return get('competitions', '__COMPETITIONS__', () => getCompetitions()[getCurrentCompetition()].competitors, competitions => competitions[getCurrentCompetition()].competitors);
	}

	function storeContestants(contestants) {
		store('competitions', '__COMPETITIONS__', window.getCompetitions().map((competition, index) => {
			if (index === window.getCurrentCompetition()) {
				return {...competition, competitors: contestants};
			}

			return competition;
		}));
	}

	window.getCompetitions = getCompetitions;
	window.storeCompetitions = storeCompetitions;
	window.getCurrentCompetition = getCurrentCompetition;
	window.storeCurrentCompetition = storeCurrentCompetition;
	window.getContestants = getContestants;
	window.storeContestants = storeContestants;

	storeCompetitions(getCompetitions());
}

storage();
