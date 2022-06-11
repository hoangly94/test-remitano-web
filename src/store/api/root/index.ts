import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from './funcs';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  tagTypes: ['root'],
  baseQuery: fetchBaseQuery({
    prepareHeaders,
    baseUrl: `${process.env.API_URL}`,
  }),

  endpoints: (builder) => ({
    get: builder.query({
      query: () => ({
        url: `/`,
      })
    }),
    post: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: 'POST',
        body,
      })
    }),
  }),
});

export const {
  useGetQuery,
} = rootApi;