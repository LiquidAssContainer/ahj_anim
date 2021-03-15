export default class CollapseButton {
  constructor() {
    this.isExpanded = false;
    this.registerEvents();
  }

  registerEvents() {
    const btn = document.getElementById('collapse-btn');
    btn.addEventListener('click', () => {
      this.isExpanded = !this.isExpanded;
      const textElem = document.getElementById('hidden-text');
      const container = document.getElementsByClassName(
        'collapse_hidden-text_container',
      )[0];
      const { top, bottom } = textElem.getBoundingClientRect();
      container.style.maxHeight = this.isExpanded ? `${bottom - top}px` : 0;
    });
  }
}
