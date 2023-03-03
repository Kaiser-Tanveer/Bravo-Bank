import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyCards = () => {

    const {user} = useContext(AuthContext);

    const {
        isLoading,
        refetch,
        data: cards = [],
    } = useQuery({
        queryKey: ["/userAccount", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/userAccount?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(cards);

    return (
        <div>
            <h1 className='text-4xl text-center py-10'>My Cards Shows here..</h1>

            {
                cards?.map((card: {cards: string, cardStatus: string}) =>
                <div>
                    {
                        card?.cardStatus === 'success' ?
                        <img src={card?.cards} alt=""  />
                        :
                        ''
                    }
                </div>
                )
            }
        </div>
    );
};

export default MyCards;