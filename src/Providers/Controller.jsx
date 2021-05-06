import React, { useEffect, useState } from "react";

export const Controller = React.createContext({});

export const ControllerProvider = (props) => {
  const [data, setData] = useState({
    round: 0,
    cardOne: 0,
    cardTwo: 0,
    pot: 0,
    bet: 0,
    minBet: 0,
    atlas: 1000,
    alice: 1000,
    cms: 1000,
    lhcb: 1000,
    cardTableOne: 0,
    cardTableTwo: 0,
    cardTableTree: 0,
    cardTableFour: 0,
    cardTableFive: 0
  });

  useEffect(() => {
    const cardsStorage = localStorage.getItem("cards");
    const cardsTableStorage = localStorage.getItem("cardsTable");

    if (cardsStorage) {
      const {cardOne, cardTwo} = JSON.parse(cardsStorage)
      setData({...data, cardOne: cardOne, cardTwo: cardTwo});
    } else {
      setData(data);
    }

    if (cardsTableStorage) {
      const {cardTableOne, cardTableTwo, cardTableTree, cardTableFour, cardTableFive} = JSON.parse(cardsTableStorage)
      setData({...data, cardTableOne: cardTableOne, cardTableTwo: cardTableTwo, cardTableTree: cardTableTree, cardTableFour: cardTableFour, cardTableFive: cardTableFive});
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