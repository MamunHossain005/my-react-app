import { useState } from "react";

export default function Gallery(){
    const[index, setIndex] = useState(0);
    const[showMore, setShowMore] = useState(false);

    function handleClickIndex(){
        setIndex(index + 1);
    }

    const handleClickShowMore = () => {
        setShowMore(!showMore);
    }
    return(
        <>
            <button onClick={handleClickIndex}>Next</button>
            <button onClick={handleClickShowMore}>{showMore?'Hide':'Show'} Details</button>
        </>
    )
}