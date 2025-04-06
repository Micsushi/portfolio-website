import { useEffect, useRef } from 'react';

type AnimationType = 'heartBeat' | 'shakeY' | 'fadeInDown' | 'flash' | 'pulse' | 'none';

const useAnimation = <T extends HTMLElement = HTMLElement>(
    animationType: AnimationType = 'flash', 
    scrollDelay: number = 200
) => {
    const elementRef = useRef<T>(null);
    const hasAnimated = useRef(false); 

    useEffect(() => {
        const element = elementRef.current;
        if (!element || hasAnimated.current) return; 

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        element.classList.add('animate__animated', `animate__${animationType}`);
                        hasAnimated.current = true; 
                        observer.disconnect(); 
                    }, scrollDelay);
                }
            },
            { threshold: 1 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [animationType, scrollDelay]);

    return elementRef;
};

export default useAnimation;