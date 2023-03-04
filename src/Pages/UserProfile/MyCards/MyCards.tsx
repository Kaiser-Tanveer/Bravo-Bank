import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyCards = () => {

    const { user } = useContext(AuthContext);

    const {
        isLoading,
        refetch,
        data: cards = [],
    } = useQuery({
        queryKey: ["/userAccount", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://bravo-bank-server.vercel.app/userAccount?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(cards);

    return (
        <div className=''>
            {
                cards?.map((card: { cards: string, cardStatus: string, user: string }) =>
                    <div>
                        {
                            card?.cardStatus === 'success' ?
                                <div className='py-20'>
                                    <img src={card?.cards} alt="" className='w-96 mx-auto' />
                                    <h5 className='text-center text-2xl -mt-10 text-gray-100 font-semibold tracking-widest uppercase'>{card.user}</h5>
                                </div>
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