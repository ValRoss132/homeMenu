import { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 60; 

type ScrollDirection = "up" | "down" | "none";

export const useScrollDirection = (): ScrollDirection => {
    const lastScrollY = useRef(0);
    const [lastScrollDirection, setLastDirection] = useState<ScrollDirection>("none")
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("none")
    
    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;

            const direction: Exclude<ScrollDirection, 'none'> = currentScrollY > lastScrollY.current ? "down" : "up";

            if (direction !== lastScrollDirection) {
                lastScrollY.current = currentScrollY;
                setLastDirection(direction)
                return;
            }

            if (direction === 'down' && currentScrollY - lastScrollY.current > SCROLL_THRESHOLD) {
                setScrollDirection(direction);
                lastScrollY.current = currentScrollY;
            }

            if (direction === 'up' && lastScrollY.current - currentScrollY > SCROLL_THRESHOLD) {
                setScrollDirection(direction);
                lastScrollY.current = currentScrollY
            }
        }

        window.addEventListener("scroll", updateScrollDirection)

        return () => {window.removeEventListener('scroll', updateScrollDirection)}

    }, [lastScrollDirection]);

    return scrollDirection
}