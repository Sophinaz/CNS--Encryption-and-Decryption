import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const encryptApi = createApi({
  reducerPath: "encryptApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/api/` }),
  endpoints: (builder) => ({
    encryptWithAES: builder.mutation({
      query: (data) => ({
        url: "aes/encrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    decryptWithAES: builder.mutation({
      query: (data) => ({
        url: "aes/decrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    encryptWith3DES: builder.mutation({
      query: (data) => ({
        url: "3des/encrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    decryptWith3DES: builder.mutation({
      query: (data) => ({
        url: "3des/decrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    encryptWithOTP: builder.mutation({
      query: (data) => ({
        url: "otp/encrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),

    decryptWithOTP: builder.mutation({
      query: (data) => ({
        url: "otp/decrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),
    decryptWithRSA: builder.mutation({
      query: (data) => ({
        url: "rsa/decrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),
    encryptWithRSA: builder.mutation({
      query: (data) => ({
        url: "rsa/encrypt",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
    }),
  }),
});

export const {
  useEncryptWithAESMutation,
  useDecryptWithAESMutation,
  useEncryptWith3DESMutation,
  useDecryptWith3DESMutation,
  useEncryptWithOTPMutation,
  useDecryptWithOTPMutation,
  useDecryptWithRSAMutation,
  useEncryptWithRSAMutation,
} = encryptApi;
