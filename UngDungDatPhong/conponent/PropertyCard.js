import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//nơi nhận dữ liệu để hiện List Thông tin của đặt phòng(giá tiền ,địa chỉ ,Tên khách sạn...)
const PropertyCard = ({
  rooms,
  children,
  adults,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("PropertyInfoScreen", {
            name: property.name,
            property: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            rooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{
            height: height / 8,
            width: "99%",
            resizeMode: "center",
            position: "relative",
            marginTop: 40,
            borderRadius: 45,
          }}
          source={{ uri: property.image }}
        ></Image>
        <View
          style={{
            width: "78%",
            height: 190,
            borderLeftWidth: 4,
            borderRightWidth: 4,
            borderBottomWidth: 10,
            borderColor: "#00BDD5",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 3,
            }}
          >
            {/* Tên Khách Sạn */}
            <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
                shadowColor: "red",
                shadowRadius: 10,
              }}
            >
              {property.name}
            </Text>
            <AntDesign
              style={{ color: "red" }}
              name="hearto"
              size={24}
              color="black"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "blue", marginRight: 25, fontWeight: "700" }}>
              Đánh Giá
            </Text>
            {/* Đánh Giá */}
            <Ionicons name="star-half" size={24} color="black" />
            <Text style={{ marginLeft: 5, color: "gray" }}>
              {property.rating}
            </Text>
          </View>

          {/* Địa chỉ chỉ cho phép độ dài 0-50*/}
          <Text
            style={{
              width: "90%",
              marginLeft: 10,
              marginTop: 7,
              color: "gray",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          {/* Giá Phòng */}
          <Text
            style={{
              color: "#1593C6",
              fontSize: 16,
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            Giá Phòng 1 đêm và {adults} người lớn
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 5,
                textDecorationLine: "line-through",
                color: "red",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <AntDesign name="arrowright" size={18} color="gray" />
            <Text
              style={{
                marginLeft: 10,
                marginRight: 30,
                color: "black",
                fontWeight: "600",
              }}
            >
              {property.newPrice * adults}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#139AA5",
              width: 175,
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 3,
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>
              Giá ưu đãi thời gian có hạn
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
