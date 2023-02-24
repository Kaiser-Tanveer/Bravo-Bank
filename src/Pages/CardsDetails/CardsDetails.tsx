import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  type detail = {
    description: string;
    name: string;
    img: string;
    features: [];
    eligibilities: [];
  };

  const { cardType } = useParams();
  const [details, setDetails] = useState<detail>();

  useEffect(() => {
    fetch(`http://localhost:5000/cards/${cardType}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [cardType]);
  return <div>
    <h1>{details?.name}</h1>
  </div>;
};

export default CardsDetails;
