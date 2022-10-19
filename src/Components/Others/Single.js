import React from 'react';

const Single = () => {
    return (
        <div className="card glass bg-base-300 w-2/3 mx-auto">
        <figure><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Room" className='w-full'/></figure>
        <div className="card-body">
            <h2 className="card-title mx-auto text-3xl">Single Bed Room</h2>
            <p>Want to book this room right now?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Payment!</button>
            </div>
        </div>
        </div>
    );
};

export default Single;