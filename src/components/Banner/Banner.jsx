import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Banner() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div>
      <div ref={sliderRef} className="keen-slider h-[calc(100vh-100px)]">
        <div className="keen-slider__slide number-slide1">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img1}` + ')',
            }}
          ></div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img2}` + ')',
            }}
          ></div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img3}` + ')',
            }}
          ></div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img4}` + ')',
            }}
          ></div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img5}` + ')',
            }}
          ></div>
        </div>
        <div className="keen-slider__slide number-slide6">
          <div
            className=" w-full bg-green-300 h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(' + `${img6}` + ')',
            }}
          ></div>
        </div>
      </div>

      <div
        ref={thumbnailRef}
        className="keen-slider thumbnail mt-4 h-20 min-w-[60%] mx-auto"
      >
        <div className="keen-slider__slide number-slide1">
          <div className="h-24">
            <img className="w-40 h-full" src={img1} alt="" />
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="h-24">
            <img className="w-40 h-full" src={img2} alt="" />
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="h-24">
            <img className="w-40 h-full" src={img3} alt="" />
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="h-24">
            <img className="w-40 h-full" src={img4} alt="" />
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div className="h-24">
            <img className="w-40 h-full" src={img5} alt="" />
          </div>
        </div>
        <div className="keen-slider__slide number-slide6">
          <div className="h-24">
            <img className="w-40 h-full" src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
