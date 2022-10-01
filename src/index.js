import './css/style.css';

class Slider {
  slider = document.querySelector('.slider');

  currentChild = document.querySelector('.slider > img');

  previousButton = document.querySelector('.previous');

  nextButton = document.querySelector('.next');

  nextImage() {
    this.nextButton.addEventListener('click', () => {
      this.currentChild.classList.remove('animation');
      this.currentChild = this.currentChild.nextElementSibling;
      this.hideOrShowNextPrevButtons();
      this.currentChild.classList.add('animation');
      this.currentChild.scrollIntoView();
    });
  }

  prevImage() {
    if (!this.currentChild.previousElementSibling) {
      this.previousButton.style.visibility = 'hidden';
    }
    this.previousButton.addEventListener('click', () => {
      this.currentChild.classList.remove('animation');
      this.currentChild = this.currentChild.previousElementSibling;
      this.hideOrShowNextPrevButtons();
      this.currentChild.classList.add('animation');
      this.currentChild.scrollIntoView();
    });
  }

  hideOrShowNextPrevButtons() {
    if (!this.currentChild.nextElementSibling) {
      this.nextButton.style.visibility = 'hidden';
    } else {
      this.nextButton.style.visibility = 'visible';
    }
    if (!this.currentChild.previousElementSibling) {
      this.previousButton.style.visibility = 'hidden';
    } else {
      this.previousButton.style.visibility = 'visible';
    }
  }
}

const mySlider = new Slider();
mySlider.currentChild.classList.add('animation');
mySlider.nextImage();
mySlider.prevImage();
