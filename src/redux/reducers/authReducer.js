// import redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authentication query from firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// initialState initial value assign
const initialState = {
  user: null,
  error: false,
  message: "",
  loading: false,
};

// firebase authentication 
const auth = getAuth();

// login methods
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }
);

// log out sign out methods 
export const logout = createAsyncThunk("auth/logout", async () => {
  return await signOut(auth);
});

// create sign up with email password apply using firebase query
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    return res;
  }
);

// set initial value for error, loading

const setErrorAndResetState = (state, message) => {
  state.user = null;
  state.error = true;
  state.message = message;
  state.loading = false;
};

// create Slice for authenticaion
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      const { user } = action.payload;
      state.user = user;
    },
    clearError(state) {
      state.error = false;
      state.loading = false;
    },
  },
// create extra reducer 
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        setErrorAndResetState(state, action.error.message);
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        setErrorAndResetState(state, action.error.message);
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        setErrorAndResetState(state, action.error.message);
      });
  },
});

// use for useSelector variable export  
export const getUser = (state) => state.auth.user;
export const getLoadingState = (state) => state.auth.loading;
export const getError = (state) => state.auth.error;
export const getErrorMessage = (state) => state.auth.message;

// action export 

export const { setAuthUser, clearError } = authSlice.actions;

// reducer export 
export default authSlice.reducer;
