import React from 'react';
import Deal from './Deal';
import './Deals.css';

const dealsData = [ { 
  id: 1,
  image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/90/media/disneyparksjapan-prod/disneyparksjapan_v0001/1/media/dlr/attractions/incredicoaster-guests-16x9.jpg",
  title: "NagorDola"
}, { 
  id: 2,
  image: "https://d23.com/app/uploads/2020/12/1180w-600h-122120_snow-white-update-iris.jpg",
  title: "PutulNach"
}, { 
  id: 3,
  image: "https://sir.wdwnt.com/wdwnt.com/2019/06/savis-workshop-star-wars-galaxys-edge-review-custom-lightsaber-experience-may-2019_31.jpg",
  title: "Maramari"
}, { 
  id: 4,
  image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555925094/shape/mentalfloss/137197557.jpg",
  title: "BoroDolna"
}, { 
  id: 5,
  image: "https://www.ocregister.com/wp-content/uploads/2017/04/0425_fea_ocr-l-guardians-03.jpg",
  title: "PanirLaf"
}, { 
  id: 6,
  image: "https://images.unsplash.com/photo-1613546167482-b3280d75f796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  title: "RailGari"
}];

const Deals = () => {
    return (
        <div className="container pt-5 mt-5" id="deals">
        <div className="common pt-5 mt-5">
          <h2 className="mainHeader">Deals & Offers</h2>
          <p>lorem ipsum dolor sit am  ipsum dolor sit am  ipsum dolor sit am</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row mt-5">
          {
            dealsData.map(deal => <Deal key={deal._id} deal={deal}></Deal>)
          }
        </div>
      </div>
    );
};

export default Deals;