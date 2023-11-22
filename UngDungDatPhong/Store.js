
//Store.js
import { configureStore } from "@reduxjs/toolkit";
import SaveReducer from "./SaveReducer";

//dùng để tạo redux store và đăng ký reduces đã định nghĩa ở SaveReducer.js
export default configureStore({
    reducer:{
        booking:SaveReducer
    }
})
