import { createSlice } from "@reduxjs/toolkit";
import courseData from "../../data/courseData";

export const courseSlice = createSlice({
    name: 'course',
    initialState:{
        courses:courseData
    },
    reducers: {
      // specificBlog: (state, action) => {
      //   state.specificItem = state.blogs.find(blog => blog.id === action.payload)
      // },
    },
  })
  
  // Action creators are generated for each case reducer function
  // export const { specificBlog } = blogSlice.actions;
  
  export default courseSlice.reducer;