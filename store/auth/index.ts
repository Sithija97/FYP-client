import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthInitialState, ILoginData, IUserResponse } from "../../models";
import { authService } from "../../services/auth";

const initialState: IAuthInitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginData, thunkAPI) => {
    try {
      const response = await authService.login(user);
      console.log(response);
      // return response.userData;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // const responseData = action.payload.data;
        // const userResponse: IUserResponse = {
        //   userObj: {
        //     id: responseData.id,
        //     firstName: responseData.firstName,
        //     lastName: "",
        //     fullName: "",
        //     address: "",
        //     contactNumber: "",
        //     email: "",
        //     gender: 0,
        //     isDeleted: 0,
        //     isActivated: 0,
        //     organizationId: 0,
        //     countryId: 0,
        //     createdAt: "",
        //     baseUserProducts: [],
        //     organization: undefined,
        //   },
        //   token: responseData.token, // Assuming token is available directly in the response
        // };
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      });
  },
});

export const { reset, logout } = authSlice.actions;

export default authSlice.reducer;
