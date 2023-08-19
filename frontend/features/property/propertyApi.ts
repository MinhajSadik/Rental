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
    }),
    getProperty: builder.query({
      query: (id) => ({
        url: `/property/${id}`,
      })
    }),
    deleteProperty: builder.mutation({
      query: (id) => ({
        method: "DELETE" ,
        url: `/property/${id}`,
      })
    }),
    updateProperty: builder.mutation({
      query: (id) => ({
        method: "PATCH" ,
        url: `/property/update-property/${id}`,
      })
    })
  }),
});

export const { useUploadImagesMutation, useUploadVideoMutation, useAddPropertyMutation, useGetPropertiesQuery, useGetPropertyQuery, useDeletePropertyMutation, useUpdatePropertyMutation  } = propertyApi;