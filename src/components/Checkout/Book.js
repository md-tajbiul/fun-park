import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useForm } from "react-hook-form";
import ProcessPayment from '../Checkout/ProcessPayment';

const Book = ({loggedInUser, title}) => {
  const [value, onChange] = useState(new Date());
    const { register, handleSubmit } = useForm();

  const [customerData, setCustomerData] = useState(null);

    const onSubmit = data => {
      setCustomerData(data); 
      document.getElementById('formBtn').style.display = 'none'
    }

    const handlePaymentSuccess = paymentId => {
      

    }
    
    return (
      <div>
        <div style={{display: customerData ? 'none' : 'block'}} className="d-flex flex-column align-items-center">
      <h3>Booking Information-</h3>
      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
      <label>Your Name (You Can Change)</label>
           <input type="text" defaultValue={loggedInUser.displayName} {...register('name', { required: true })} name="name" placeholder="Your Name" className="form-control" />
      </div>
      <div className="form-group">
      <label>Your Email (You Can Change)</label>
         <input type="email" defaultValue={loggedInUser.email} {...register('email', { required: true })} name="email" placeholder="Email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Ride Title (Fixed)</label>
         <input type="text" value={title} {...register('title', { required: false })} name="title" className="form-control" />
      </div>
     <div className="form-group row">
             <label>Pick Your Free Time</label>
           <DateTimePicker 
            onChange={onChange}
            value={value}
          />
          <h4 className="mt-4 text-right">Total: $15</h4>
      </div>
        <input type="submit" id="formBtn" value="Checkout" className="btn btn-success float-right"/>
    </form>
    </div>

      <div style={{display: customerData ? 'block' : 'none'}} className='w-50 mx-auto'>
        <div>
          <h3>Checkout-</h3>
          <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}/>
        </div>
      </div>
      </div>
    );
};

export default Book;