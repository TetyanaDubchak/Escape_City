
// About
const aboutText = document.querySelector('.about-text');
const aboutBtn = document.querySelector('.about-btn');

aboutBtn.addEventListener('click', () => {
    const isExpanded = aboutText.classList.toggle('expanded');
    aboutBtn.textContent = isExpanded ? 'Менше' : 'Детальніше';
})
