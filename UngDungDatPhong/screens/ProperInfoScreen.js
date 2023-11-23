import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { Ionicons } from "@expo/vector-icons";

import ImageProperty from "../conponent/ImageProperty";
import Amenities from "../conponent/Amenities";
//hiên thị các thông tin khi người dùng lựa chọn các phòng có cả giá tiền ,đánh giá
const ProperInfoScreen = ({ navigation, route }) => {
console.log(route.params);

    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <View
      styles={{ width: "100%", height: "100%", flex: 1, alignItems: "center" }}
    >
      {/* dùng sliderBox đã import làm băng chuyền theo chiều ngang  */}
      <View
        styles={{
          flex: 1,
          width: "96%",
          height: "100%",

          borderWidth: 2,
        }}
      >
        {/* hiển thị hình ảnh cuộn ngang */}
        <ImageProperty />

        
        <View style={{ flexDirection: "row",marginTop:10,alignItems:'center',justifyContent:'space-between',marginHorizontal:10 }}>
         <View>
             <Text style={{fontSize:18,fontWeight:'600'}}>{route.params.name}</Text>
             <View style={{flexDirection:'row',alignItems:'center',}}>
                 <Text style={{color:'blue',marginRight:5,fontWeight:'500'}}>Đánh Giá:</Text>
                 <Ionicons name="star-half" size={24} color="black" />
             </View>
         </View>
         <Text style={{color:'#21ABBE',fontWeight:'600'}}>Chuẩn Châu Âu</Text>

        </View>


        <View style={{width:'100%',height:5,marginTop:7,marginBottom:7,backgroundColor:'gray'}}></View>

        <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
              color:'#C8C8C8'
            }}
          >
           Giá cho một đêm và {route.params.adults} người lớn
          </Text>
        <View style={{ flexDirection: "row",marginLeft:10 }}>
            
          <Text
            style={{
              fontSize: 18,
              color: "red",
              textDecorationLine: "line-through",
              marginTop: 10,
              marginRight:20
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          
        </View>
        <View style={{backgroundColor:'green',width:80,alignItems:'center',marginLeft:10,marginTop:20}}>
            <Text style={{color:'white'}}>{offerPrice.toFixed(0)} % Giảm</Text>
        </View>
        <View style={{width:'100%',height:5,marginTop:7,marginBottom:7,backgroundColor:'gray'}}></View>


            {/* Ngày đến và ngày đi */}
        <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3,marginLeft:30 }}
              >
               Vào 
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3,marginLeft:30 }}
              >
                Ra
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Phòng và Số Lượng
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.rooms} Phòng, {route.params.adults} Người lớn,{" "}
              {route.params.children} trẻ em
            </Text>
          </View>
          <View style={{width:'100%',height:5,marginTop:7,marginBottom:7,backgroundColor:'gray'}}></View>
        
       
            <Text style={{color:'red',marginLeft:10,fontSize:18,fontWeight:'600',fontStyle:'italic'}}>Các Tiện Ích Được Ưa Chuộng:</Text>
            {/* dùng để các ưu đãi */}
            <Amenities/>
      




            <View style={{position:'relative'}}>
                <Pressable
                      onPress={() => navigation.navigate("RoomScreen",{
                        rooms:route.params.availableRooms,
                        oldPrice:route.params.oldPrice,
                        newPrice:route.params.newPrice,
                        name:route.params.name,
                        children:route.params.children,
                        adults:route.params.adults,
                        rating:route.params.rating,
                        startDate:route.params.selectedDates.startDate,
                        endDate:route.params.selectedDates.endDate
                      })}
                        style={{
                          backgroundColor: "#6CB4EE",
                          position: "absolute",
                          bottom: -55,
                          padding: 15,
                          width:"95%",
                          marginHorizontal:10,
                          borderRadius:15,
                          shadowColor:'black',
                          shadowOpacity:0.8,
                          shadowRadius:15
                        }}
                      >
                        <Text style={{ textAlign: "center", color: "white",fontWeight:"bold",fontSize:17 }}>
                          Chọn Phòng Trống
                        </Text>
                      </Pressable>
            </View>







      </View>
    </View>
  );
};

export default ProperInfoScreen;

const styles = StyleSheet.create({});
