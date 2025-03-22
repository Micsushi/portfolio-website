import { useEffect, useRef } from 'react';

type AnimationType = 'heartBeat' | 'shakeY' | 'fadeInDown' | 'flash' | 'pulse' | 'none';

const useAnimation = <T extends HTMLElement = HTMLElement>(
    animationType: AnimationType = 'flash', 
    scrollDelay: number = 200, 
    hoverAnimationType: AnimationType = 'none'
) => {
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const element = elementRef.current;

        // Scroll-triggered animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate__animated', `animate__${animationType}`);
                        }, scrollDelay);
                    } else {
                        entry.target.classList.remove('animate__animated', `animate__${animationType}`);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (element) observer.observe(element);

        // Hover-triggered animation
        const handleHover = () => {
            if (element) {
                element.classList.add('animate__animated', `animate__${hoverAnimationType}`);
                element.addEventListener('animationend', () => {
                    element.classList.remove('animate__animated', `animate__${hoverAnimationType}`);
                }, { once: true });
            }
        };

        if (element) {
            element.addEventListener('mouseenter', handleHover);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
                element.removeEventListener('mouseenter', handleHover);
            }
        };
    }, [animationType, scrollDelay, hoverAnimationType]);

    return elementRef;
};

export default useAnimation;