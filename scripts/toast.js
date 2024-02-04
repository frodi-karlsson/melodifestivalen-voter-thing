function showToast(message) {
	const toastContainer = document.querySelector('.toastContainer');
	const toast = toastContainer.querySelector('.toast');
	toast.textContent = message;
	toastContainer.classList.add('show');
	setTimeout(() => {
		toastContainer.classList.remove('show');
	}, 3000);
}

document.addEventListener('show-toast', e => {
	showToast(e.detail.message);
});
