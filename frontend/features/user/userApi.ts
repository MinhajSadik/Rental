import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generateOTP: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "user/generate-otp",
        body: data,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "user/verify-otp",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: "user/change-password",
        body: data,
      }),
    })
  }),
});

export const { useGenerateOTPMutation, useVerifyOTPMutation, useChangePasswordMutation } = userApi;