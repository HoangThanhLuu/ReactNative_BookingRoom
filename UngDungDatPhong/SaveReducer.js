


//SaveReducer.js
import { createSlice } from "@reduxjs/toolkit";
//dùng để nhận dữ liệu từ ConfirmationScree.js khi người dùng bấm đặt phòng thì dispacher gửi action nó gửi yêu cầu đến đây(dùng để đưa dữ liệu trừ Scren này sang screen khác)

export const SavedSlice = createSlice({
    name:"booking",
    initialState:{
        booking:[], // Trạng thái khởi tạo có một mảng bookings rỗng
    },
    reducers:{
        savedPlaces:(state,action) => {
            state.booking.push({...action.payload})
        }
    }
});


export const {savedPlaces} = SavedSlice.actions

export default SavedSlice.reducer
