import './_ChipCarousel.scss';
import React, { useRef, useState } from 'react';
import Chip from '../Chip/Chip';

function ChipCarousel({ array }) {
    const carouselRef = useRef();
    const [startX, setStartX] = useState(0);

    const handleDragStart = (e) => {
        setStartX(e.clientX);
        carouselRef.current.style.transition = 'none'; 
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        const walk = (e.clientX - startX);
        carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
        setStartX(e.clientX);
    };

    const handleDragEnd = () => {
        carouselRef.current.style.transition = 'all 0.3s'; 
    };

    return (
        <div 
            className="chip-carousel"
            ref={carouselRef}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            {array.map((category, index) => (
                <Chip key={`chip-${index}`} label={category} />
            ))}
        </div>
    );
}

export default ChipCarousel;
