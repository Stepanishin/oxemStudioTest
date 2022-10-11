import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRequest } from '../../types/IRequest'


export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://hookb.in'}),
    refetchOnFocus: true,
    endpoints: (builder) => ({
      addNewRequest: builder.mutation<string, string>({
        query: (newRequest:string) => ({
            url: '/eK160jgYJ6UlaRPldJ1P',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: newRequest
        })
      }),
    })
  })

  export const { useAddNewRequestMutation } = fetchApi