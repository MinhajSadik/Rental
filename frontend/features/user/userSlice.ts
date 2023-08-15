import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface IUser {
    user: {
        name: string,
        email: string,
        phoneNumber: string,
        password: string,
        role: string,
        IDCard: {
            front: string,
            back: string
        },
        isVerified: boolean,
        profile: string
    },
    loading: boolean

}

export const initialState: IUser = {
    user: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "",
      IDCard: {
          front: "",
          back: ""
      },
      isVerified: false,
      profile: ""
    },
    loading: false
};

export const loginUser = createAsyncThunk(
  "auth/userLogin",
  async (userData: { emailOrPhone: string; password: string }) => {
    const result = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      userData
    );
    return result;
  }
);

export const loggedInUser = createAsyncThunk<AxiosResponse<any, any>, void>(
  "auth/loggedInUser",
  async () => {
    const user = await axios.get(
      "http://localhost:5000/api/v1/user/auth",
      {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      }
    );
    return user;
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      const data = action?.payload?.data?.data;
      JSON.stringify(localStorage.setItem("accessToken", data?.accessToken));
      state.user = data?.user;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loggedInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        loggedInUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        const data = action?.payload?.data?.data;
        state.user = data?.user;
        state.loading = false;
      }
    );
    builder.addCase(loggedInUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;