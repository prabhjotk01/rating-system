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
  return (
   <></>
  );
}

export default StarRating;
