import { configureStore } from "@reduxjs/toolkit"
import { encryptApi } from "./api/getApi"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
    reducer: {
        [encryptApi.reducerPath]: encryptApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(encryptApi.middleware),
})

setupListeners(store.dispatch)