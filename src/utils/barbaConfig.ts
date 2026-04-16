import barba from '@barba/core';
import { gsap } from 'gsap';

let transitionComponent: React.ComponentType<{ onComplete: () => void }> | null = null;

export const setTransitionComponent = (
  component: React.ComponentType<{ onComplete: () => void }>
) => {
  transitionComponent = component;
};

export const initBarba = () => {
  barba.init({
    transitions: [
      {
        name: 'default-transition',
        async leave(data) {
          return new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: () => {
                data.current.container.remove();
                resolve();
              }
            });

            tl.to(data.current.container, {
              opacity: 0,
              y: -20,
              duration: 0.3,
              ease: 'power2.in'
            });
          });
        },
        async enter(data) {
          return new Promise((resolve) => {
            const tl = gsap.timeline({
              onComplete: () => {
                resolve();
              }
            });

            gsap.set(data.next.container, {
              opacity: 0,
              y: 20
            });

            tl.to(data.next.container, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out'
            });
          });
        }
      }
    ]
  });
};

export default initBarba;

