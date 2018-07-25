/*
**
**/


function Slider(selector, options) {

	let __self = this;

  let sliderNode = document.querySelector(selector),
      sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
      prevSliderNode   = sliderNode.querySelector('.slider__pager-previous'),
      nextSliderNode   = sliderNode.querySelector('.slider__pager-next'),
      paginationNode   = sliderNode.querySelector('.slider__pagination');

  let currentSlideIndex = options.currentSlideIndex || 0,
      imagesCount       = sliderImagesNode.children.length,
			slideSize         = sliderImagesNode[(options.direction === 'vertical') ? 'marginTop': 'marginLeft'];
			
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
		let directionStyle = (options.direction === 'vertical') ? 'marginTop': 'marginLeft';
		sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';
	}
	
	prevSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.prevSlide();
		__self.__render();
	};

	nextSliderNode.onclick = function(e) {
		e.preventDefault();
		__self.nextSlide();
		__self.__render();
	};

	if (options.direction === 'vertical') {
		sliderImagesNode.style.whiteSpace = 'normal';
	}

	this.__render();

};