import React, { useState } from 'react';
import clickButton from '../../../public/music/buttonclick.wav'; 

interface Props {
    name: string
}

export default function MainButton({ name }: Props): React.JSX.Element {
    const btnClass: string = 'btn';
    let btnName: string = '';
    let btnBoxName: string = '';
    const [isPlaying, setIsPlaying] = useState(false);
    
    switch (name) {
        case 'Start':
            btnName = 'start';
            break;
        case 'Yes':
            btnName = 'yes';
            btnBoxName = 'yes';
            break;
        default:
            btnName = '';
    }

    const handleClick = (): void => {
        if (!isPlaying) {
            const audio = new Audio(clickButton);
            audio.play();
            setIsPlaying(true);
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }
    };

    return (
        <>
            <div className={`btn__box ${btnBoxName}`}>
                <div className="btn__layer-1">
                    <div className="btn__layer-2">
                        <div className="btn__layer-3">
                            <button type='button' className={`${btnClass} ${btnName}`} onClick={handleClick}>{name}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
