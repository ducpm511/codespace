import { configureStore } from '@reduxjs/toolkit';
import  blogSlice  from './features/blogSlice';
import  courseSlice  from './features/courseSlice';
// import AuthProvider from '../hooks/useFirebase';

export const store = configureStore({
  reducer: {
    blogs:blogSlice,
    courses: courseSlice,
    // auth:AuthProvider(),
  },
})