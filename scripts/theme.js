function color() {
	const darkToggle = document.getElementById('dark');
	if (localStorage.getItem('dark') === 'true') {
		document.body.classList.add('dark');
		darkToggle.checked = true;
	} else {
		document.body.classList.remove('dark');
		darkToggle.checked = false;
	}

	darkToggle.addEventListener('change', () => {
		document.body.classList.toggle('dark');
		localStorage.setItem('dark', darkToggle.checked);
	});
}

color();
