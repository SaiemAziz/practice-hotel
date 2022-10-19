import React from 'react';

const Double = () => {
    return (
        <div className="card glass bg-base-300 w-2/3 mx-auto">
        <figure><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Room" className='w-full' /></figure>
        <div className="card-body">
            <h2 className="card-title mx-auto text-3xl">Double Bed Room</h2>
            <p>Want to book this room right now?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Payment!</button>
            </div>
        </div>
        </div>
    );
};

export default Double;