const javaNav = {
    isHidden: true,
    init() {
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom() {
      this.openBtn = document.querySelector('.openBtn');
      this.slidingContainer = document.querySelector('.slidingContainer')
    },
    bindEventListeners() {
      this.openBtn.addEventListener('click', this.slideNav.bind(this));
    },
  
    slideNav(evt) {
      this.isHidden = !(this.isHidden)
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
javaNav.init();
  
  window.javaNav = javaNav;