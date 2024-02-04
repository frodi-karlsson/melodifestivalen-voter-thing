function expandable() {
	const expandable = document.getElementById('expandable');
	const expandableButton = document.getElementById('expandable-button');
	expandableButton.addEventListener('click', () => {
		expandable.classList.toggle('expanded');
		if (expandable.classList.contains('expanded')) {
			expandableButton.textContent = 'Hide Edit Form';
		} else {
			expandableButton.textContent = 'Show Edit Form';
		}
	});
}

expandable();
