import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productsApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});

 export const {useGetProductsQuery } = productsApi