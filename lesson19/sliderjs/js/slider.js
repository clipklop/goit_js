/*
 *
 */


function Slider(selector, options) {

	let __self = this;

  let sliderNode = document.querySelector(selector),
      sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
      prevSliderNode   = sliderNode.querySelector('.slider__pager-previous'),
      nextSliderNode   = sliderNode.querySelector('.slider__pager-next'),
      paginationNode   = sliderNode.querySelector('.slider__pagination');

  let currentSlideIndex = options.currentSlideIndex || 0,
      imagesCount       = sliderImagesNode.children.length,
			slideSize         = sliderImagesNode.offsetWidth;
			
	this.prevSlide = function() {
		if (currentSlideIndex === 0) {
			currentSlideIndex = imagesCount - 1;	
			return;		
		}
		currentSlideIndex--;
	}

	this.nextSlide = function() {
		if (currentSlideIndex === imagesCount - 1) {
			currentSlideIndex = 0;			
			return;
		}		
		currentSlideIndex++;
	}

	this.__render = function() {
		sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';
	}
	
	prevSliderNode.onclick = function() {
		__self.prevSlide();
		__self.__render();
	};

	nextSliderNode.onclick = function() {
		__self.nextSlide();
		__self.__render();
	};

};