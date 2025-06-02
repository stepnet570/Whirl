const headers = document.querySelectorAll('.accordion__header');
document.querySelectorAll('.accordion__header__wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const item = wrapper.closest('.accordion__item');
        item.classList.toggle('active');
    });
});