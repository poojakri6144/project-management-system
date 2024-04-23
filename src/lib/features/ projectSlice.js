import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    userDetail: {
      userType: null, // teacher, student, admin, freeUser
      isUserAuthenticated: false,
      userToken: "",
    },
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;
