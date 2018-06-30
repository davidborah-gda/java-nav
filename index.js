const modal = {
    isHidden: true,
    init() {
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom() {
      this.openBtn = document.querySelector('.close');
    },
    bindEventListeners() {
      this.openBtn.addEventListener('click', this.slideNav.bind(this));
    },
  
    slideNav(evt) {
      this.isHidden = false;
      this.clickedArrow = evt.target.openBtn;
      this.render();
    },
  
    render() {
      if (this.isHidden) {
        this.slidingContainer.classList.add('hidden');
      } else {
        this.slidingContainer.classList.remove('hidden');
      }
    },
  };
  modal.init();
  
  window.modal = modal;