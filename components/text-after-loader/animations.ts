import { gsap } from 'gsap';

export const animateTitle = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: 'expo.out',
      duration: 2,
    },
  });

  tl.to('[data-hero-line]', {
    scaleX: 1,
  })
    .fromTo(
      '[data-title-first]',
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      '<15%'
    )
    .fromTo(
      '[data-title-last]',
      {
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      '<'
    );

  return tl;
};


