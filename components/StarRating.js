const StarRating = ({ rating }) => {
    // Convert the rating to a scale of 5
    const scaledRating = Math.round(rating * 2) / 2; // Round to the nearest 0.5
    
    // Generate an array of stars based on the scaled rating
    const stars = Array.from({ length: 5 }, (_, index) => {
      const isFullStar = index < scaledRating;
      const isHalfStar = scaledRating - index === 0.5;
      return (
        <span key={index}>
          {isFullStar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              width="24"
              height="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : isHalfStar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              width="24"
              height="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21zM12 15.4L8.29 17.64 9.35 13.5 6 10.36l4.66-.4L12 6l1.34 3.96 4.66.4-3.34 2.64 1.06 4.14L12 15.4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              width="24"
              height="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </span>
      );
    });
  
    return <div>{stars}</div>;
  };
  
  export default StarRating;
  