export default class CallbackChat {
  constructor() {
    this.openBtn = document.getElementsByClassName('chat_toggle-btn')[0];
    this.closeBtn = document.getElementsByClassName('chat_close-btn')[0];
    this.chatElem = document.getElementsByClassName('chat')[0];
    this.registerEvents();
  }

  openChat() {
    this.openBtn.classList.add('closing');

    this.chatElem.classList.remove('hidden');
    this.chatElem.classList.add('opening');
  }

  closeChat() {
    this.chatElem.classList.add('closing');

    this.openBtn.classList.remove('hidden');
    this.openBtn.classList.add('opening');
  }

  onAnimationEnd({ target }) {
    if (target.classList.contains('opening')) {
      target.classList.remove('opening');
    }
    if (target.classList.contains('closing')) {
      target.classList.remove('closing');
      target.classList.add('hidden');
    }
  }

  registerEvents() {
    this.openBtn.addEventListener('click', () => this.openChat());
    this.closeBtn.addEventListener('click', () => this.closeChat());

    this.chatElem.addEventListener('animationend', (e) => {
      this.onAnimationEnd(e);
    });

    this.openBtn.addEventListener('animationend', (e) => {
      this.onAnimationEnd(e);
    });
  }
}
