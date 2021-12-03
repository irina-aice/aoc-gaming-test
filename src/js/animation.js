import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initAnimation() {
  const advantageList = document.querySelectorAll('.js-advantages-item');

  for (let i = 0; i < advantageList.length; i++) {
    const advantage = advantageList[i];
    const x = (i % 2 ? 100 : -100);

    gsap.set(advantage, {x: x, autoAlpha: 0});
    gsap.to(advantage, {
      scrollTrigger: {
        trigger: advantage,
        start: 'top 80%',
      },
      autoAlpha: 1,
      duration: 1,
      x: 0
    });
  }
}

export default initAnimation;
