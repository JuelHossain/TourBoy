const { useState, useEffect } = require("react");

const useServices = (initial) => {
  const [Services, setServices] = useState(initial);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [Services, setServices];
};

export default useServices;
