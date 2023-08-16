import apiSlice from "../api/apiSlice";

const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImages: builder.mutation({
      query: (formData) => ({
        headers: {
            "contentType" : "multipart/form-data"
        },
        method: "POST",
        url: "/property/upload-image",
        body: formData
      })
    }),
    uploadVideo: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: "/property/upload-video",
        body: formData,
      })
    }),
    addProperty: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/property/add-property",
        body: data,
      })
    }),
    getProperties: builder.query({
      query: () => ({
        url: "/property",
      })
    })
  }),
});

export const { useUploadImagesMutation, useUploadVideoMutation, useAddPropertyMutation, useGetPropertiesQuery } = propertyApi;