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
		slideSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];
			
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

		paginationNode.querySelector('.active').classList.remove('active');
		paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
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

	paginationNode.onclick = function(e) {
		e.preventDefault();
		let link = e.target;

		if (link.tagName !== 'A') { return; }

		currentSlideIndex = +link.dataset['slider__item'];
		__self.__render();
	};

	this.__createButtons = function() {
		for (let i = 0; i < imagesCount; i++) {
			let li = document.createElement('li');
			li.className = 'slider__pagination-item';

			let a = document.createElement('a');
			a.href = '#';
			a.innerHTML = i;
			a.setAttribute('data-slider__item', i);

			li.appendChild(a);

			paginationNode.appendChild(li);
		}
		paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
	};

	this.__init = function() {
		if (options.direction === 'vertical') {
			sliderImagesNode.style.whiteSpace = 'normal';
		}

		this.__createButtons();
		this.__render();
	}
	
	this.__init();

};