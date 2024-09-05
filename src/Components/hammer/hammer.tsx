import { useRef, useEffect, useState } from 'react';
import hammer from '../../assets/images/Hammer-game.svg';
import hammercss from './hammer.module.css';
import clickSound from '../../../public/music/hammer-whack.mp3';
import React from 'react';

const Hammer: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const clickRef = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement>(new Audio(clickSound));
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const hammerImageRef = useRef<JSX.Element | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const clicked = clickRef.current;
        const audio = audioRef.current;

        if (!cursor || !clicked) return;

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.top = `${e.pageY}px`;
                    cursor.style.left = `${e.pageX}px`;
                }
            });
        };

        const handleClick = () => {
            if (!isPlaying) {
                audio.play();
                setIsPlaying(true);
                setTimeout(() => {
                    setIsPlaying(false);
                }, 100);
            }

            clicked.style.transition = 'transform 0.1s';
            clicked.style.transform = 'rotate(-55deg)';
            setTimeout(() => {
                clicked.style.removeProperty('transform');
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPlaying]);

    if (!hammerImageRef.current) {
        hammerImageRef.current = (
            <img src={hammer} alt="hammer" />
        );
    }

    return (
        <div ref={cursorRef} className={hammercss.cursor}>
            <div ref={clickRef} className={hammercss.hammerContainer}>
                {hammerImageRef.current}
            </div>
        </div>
    );
};

export default Hammer;
