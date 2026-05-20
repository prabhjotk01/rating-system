import { useState } from "react";
import Star from "./Star";

function StarRating() {
    const [rating, setRating] = useState(0);

    const ratingWords = {
        1: 'Poor',
        2: 'Fair', 
        3: 'Good',
        4: 'Very Good',
        5: 'Excellent'
    };

    const handleClick = (starIndex) => {
        setRating(starIndex);
    };
    
    const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rating-section">
            <h1>Rate This Product</h1>
            <div className="stars">
                {stars.map((starIndex) => (
                    <Star 
                        key={starIndex}
                        filled={starIndex <= rating}
                        onClick={() => handleClick(starIndex)}/>
                ))}
            </div>
            <h2 className="rating-word">
                {rating === 0 ? 'Select a rating' : ratingWords[rating]}
            </h2>
        </div>
  );
}

export default StarRating;
