import React, { useEffect, useState } from "react";

export const Controller = React.createContext({});

export const ControllerProvider = (props) => {
  const [data, setData] = useState({
    round: 0,
    cardOne: 0,
    cardTwo: 0,
    pot: 0,
    bet: 0,
    minBet: 0
  });

  useEffect(() => {
    const cardsStorage = localStorage.getItem("cards");
    if (cardsStorage) {
      const {cardOne, cardTwo} = JSON.parse(cardsStorage)
      setData({...data, cardOne: cardOne, cardTwo: cardTwo});
    } else {
      setData(data);
    }
  }, []);

  return (
    <Controller.Provider value={{ data, setData }}>
      {props.children}
    </Controller.Provider>
  );
};

export const useController = () => React.useContext(Controller);