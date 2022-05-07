const { useState, useEffect } = require("react")

const useTour = (initial) => {
    const [tour, setTour] = useState(initial);
    useEffect(() => {
        fetch('tour.json')
            .then(res => res.json())
            .then(data => setTour(data));
    }, []);
    return [tour];
}

export default useTour;