import baseApis from '../baseApis/baseApis';

export const orderApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: ({ search }) => (
        {
          url: `/order/get-all`,
          method: 'GET',
          params: { search },
        }
      ),
      providesTags: ['order'],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, data }) => (
        {
          url: `/order/update/${id}`,
          method: 'PATCH',
          body: data,
        }
      ),
      invalidatesTags: ['order'],
    }),
  }),
});

export const { useGetAllOrderQuery, useUpdateOrderStatusMutation } = orderApis;
