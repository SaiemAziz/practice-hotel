import React from 'react';
import { Link } from 'react-router-dom';

const Types = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-3 px-5'>
           <div className="col card bg-base-100 hover:shadow-xl hover:shadow-black image-full">
                <figure><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Single Bed!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to='/single'>
                        <button className="btn btn-success btn-outline">Book Now</button>
                    </Link>
                    </div>
                </div>
            </div> 
           <div className="col card bg-base-100 hover:shadow-xl hover:shadow-black image-full">
                <figure><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Double Bed!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to='/double'>
                        <button className="btn btn-success btn-outline">Book Now</button>
                    </Link>
                    </div>
                </div>
            </div> 
           <div className="col card bg-base-100 hover:shadow-xl hover:shadow-black image-full">
                <figure><img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Room" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Family!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to='/family'>
                        <button className="btn btn-success btn-outline">Book Now</button>
                    </Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Types;