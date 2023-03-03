import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'

const LoanRequest = () => {

    const {id} = useParams()
    
    const {isLoading, refetch, data: accounts = [], } = useQuery({
        queryKey: ["/myAccounts", id],
        queryFn: async () => {
          const res = await fetch( `http://localhost:5000/myAccounts/${id}` );
          const data = await res.json();
          return data;
        },
      });
      console.log(accounts);

  return (
    <div>LoanRequest</div>
  )
}

export default LoanRequest