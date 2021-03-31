import React, { useContext } from 'react';
import { userContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser);
    return (
        <div>
            <h3>This is Check Out Page</h3>
        </div>
    );
};

export default CheckOut;