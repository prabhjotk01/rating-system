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
   <></>
  );
}

export default StarRating;
