function expandable() {
	const {State, Util} = window;
	const expandable = document.getElementById('expandable');
	const expandableButton = document.getElementById('expandable-button');
	expandableButton.addEventListener('click', () => {
		expandable.classList.toggle('expanded');
		if (expandable.classList.contains('expanded')) {
			expandableButton.textContent = 'Göm deltagarredigering';
		} else {
			expandableButton.textContent = 'Redigera deltagare';
		}
	});

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
			const contestants = State
				.get('contestants')
				.filter(c => c.contestant !== contestant);
			document.dispatchEvent(new CustomEvent('show-toast', {detail: {message: 'Deltagare borttagen'}}));
			State.set('contestants', contestants);
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
				State.set('contestants',
					State.get('contestants')
						.map(c => c.id === contestant.id ? contestant : c),
				);
			} else {
				State.set('contestants',
					State
						.get('contestants')
						.concat({
							...contestant,
							id: contestant
								.contestant
								.replace(/\s/g, '-')
								.toLowerCase(),
						}),
				);
			}

			const forms = document.querySelectorAll('.expandableForm');
			const contestants = State.get('contestants');
			if (forms.length <= contestants.length) {
				createExpandableFormSection();
			}

			document.dispatchEvent(new CustomEvent('show-toast', {detail: {message: 'Deltagare sparad'}}));
		});
		container.appendChild(form);
	}

	function createExpandableForms() {
		const container = getExpandableContainer();
		Util.clearChildren(container);
		const contestants = State.get('contestants');
		contestants.forEach(contestant => {
			createExpandableFormSection(contestant);
		});
		createExpandableFormSection();
	}

	createExpandableForms();
	State.on('update', () => {
		createExpandableForms();
	});
}

expandable();
