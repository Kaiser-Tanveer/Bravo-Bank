import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Account = () => {
    const account = useLoaderData();
    console.log(account)
    // const {_id, accountType, name, img, facilities} = account;
    return (
        <section>
            {/* <img src={img} alt="" /> */}
            <div>
                {
                    // facilities.map(facility => <div>{facility.title}</div>)
                }
            </div>
        </section>
    );
};

export default Account;