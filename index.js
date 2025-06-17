document.querySelectorAll('.accordion__header__wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        const item = wrapper.closest('.accordion__item');
        item.classList.toggle('active');
        document.querySelectorAll('.accordion__item').forEach(i => {
            if (i !== item) i.classList.remove('active');
        });
    });
});