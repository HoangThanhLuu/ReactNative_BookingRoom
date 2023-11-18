import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
//nơi nhận dữ liệu để hiện List các phòng
const PropertyCard = ({
  rooms,
  children,
  adults,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ height: height / 4, width: "95%", resizeMode: "center",position:'relative' }}
          source={{ uri: property.image }}
        ></Image>
        <View style={{width:'95%',bottom:0,height:'60%',backgroundColor:'yellow',position:'absolute'}}>

</View>

      </Pressable>
    </View>
  );
};

export default PropertyCard;
