import baseApis from "../baseApis/baseApis";


export const authApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    loginPost: builder.mutation({
      query: ({ data }) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: data,
      }),
    }),
    patchNewPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: data,
      }),
    }),
    forgetEmailPost: builder.mutation({
      query: ({ data }) => {
        return {
          url: '/auth/forgot-password',
          method: 'POST',
          body: data,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: ({ data }) => ({
        url: '/auth/forget-pass-otp-verify',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('resetToken')}`,
        },
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: '/auth/activation-code-resend',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginPostMutation,
  usePatchNewPasswordMutation,
  useForgetEmailPostMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
} = authApis;
