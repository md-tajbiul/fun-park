import React, { useEffect, useState } from 'react';
import Deal from './Deal';
import './Deals.css';
import '../Header/HeaderMain/HeaderMain.css';
import FakeData from '../../FakeData/FakeData';

const Deals = () => {
  const [deals, setDeals] = React.useState([]);
    useEffect(() => {
        setDeals(FakeData);
    }, []);
    return (
        <div className="container pt-5 mt-5" id="deals">
        <div className="common pt-5 mt-5">
          <h2 className="mainHeader">Deals & Offers</h2>
          <p>lorem ipsum dolor sit am  ipsum dolor sit am  ipsum dolor sit am</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row mt-5">
          {
            deals.map(deal => <Deal key={deal._id} deal={deal}></Deal>)
          }
        </div>
      </div>
    );
};

export default Deals;