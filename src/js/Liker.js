export default class Liker {
  constructor() {
    this.btn = document.getElementsByClassName('liker-btn')[0];
    this.registerEvents();
  }

  createLikeElem() {
    const like = document.createElement('div');
    like.className = 'like_wrapper left-to-right';
    like.innerHTML = '<div class="like flying-up"></div>';

    const btnRect = this.btn.getBoundingClientRect();
    like.style.top = `${btnRect.top}px`;
    like.style.left = `${btnRect.left + btnRect.width / 2 - 10}px`;

    const random = Math.floor(Math.random() * 4) + 1;
    like.style.animationName = `flying${random}`;

    like.addEventListener('animationend', ({ target }) => {
      target.remove();
    });

    return like;
  }

  registerEvents() {
    this.btn.addEventListener('click', () => {
      const likerSection = document.getElementsByClassName('liker-section')[0];
      const like = this.createLikeElem();
      likerSection.appendChild(like);
    });
  }
}
