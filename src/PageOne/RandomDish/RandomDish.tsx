import React, { FunctionComponent, useState } from 'react';
import { useAppDispatch } from '../../App.hooks';
import { startLoading, stopLoading } from '../../AppLoadingIndicator/AppLoadingIndicator.slice';
import './RandomDish.scss';

interface OwnProps {
}

type Props = OwnProps;

const RandomDish: FunctionComponent<Props> = (props) => {
  const [dish, setDish] = useState<Record<string, string> | null>(null);
  const dispatch = useAppDispatch();

  const fetchRandomDish = () => {
    dispatch(startLoading())
    fetch('https://random-data-api.com/api/food/random_food')
      .then(r => r.json())
      .then(result => {
        setDish(result);
        dispatch(stopLoading());
      });
  }

  return (
    <div className="random-dish">
      <button onClick={fetchRandomDish}>Fetch random dish</button>

      {dish && <div className="random-dish__data">
        {Object.entries(dish).map(([key, value]) => (
          <div className="dish-data__entry" key={key}>
            <div className="dish-data__key">{key}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default RandomDish;
