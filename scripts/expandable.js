function expandable() {
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
}

expandable();
