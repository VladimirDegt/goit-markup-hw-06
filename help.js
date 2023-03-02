//! modern-normalize
https://github.com/sindresorhus/modern-normalize
https://cdnjs.com/libraries/modern-normalize

//? паттерн скрытия элемента
.visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
}

//? паттерн фиксации панели навигации
<header class="scroll"></header>
div.header {
    display: flex;
}
const { height: pageHeaderHeight } = document
.querySelector('.scroll')
.getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;