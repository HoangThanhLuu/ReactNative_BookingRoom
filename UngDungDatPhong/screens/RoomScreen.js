import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../conponent/Amenities";
import { Ionicons } from "@expo/vector-icons";
//phòng cho người dùng lựa chọn phòng (có ban công ,có bồn tắm ,có tivi,...)

const RoomScreen = ({ route, navigation }) => {
  console.log(route);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "800",
        color: "#21ABBE",
      },
      headerStyle: {
        backgroundColor: "white",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 10,
              backgroundColor: "#FEFBE9",
              borderRadius: 10,
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}
              >
                {item.name}
              </Text>
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>
              Thanh toán tại đây
            </Text>
            <Text
              style={{
                marginTop: 3,
                color: "green",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Giảm giá\Quá rẻ
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}>{route.params.newPrice}</Text>
            </View>
            <Amenities />

            {/* nếu như người dùng nhấp vào Lựa chọn thì sẽ hiển thị cái icon đánh dấu mục lựa chọn */}
            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Lựa chọn
                </Text>

                {/* //dùng để khi người dùng nhấp vào icon thì nó sẽ tắt cái icon đi */}

                <AntDesign
                  onPress={() => setSelected([])}
                  name="checkcircleo"
                  size={30}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                  borderRadius: 10,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  Lựa Chọn
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {/* dùng để khi người dùng nhấp vào lựa chọn thì mới hiện lưu trữ lên (khi nhấp vào thì nó sẽ lưu trữ cái người dùng vừa lựa chọn) */}
      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("UserScreen", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              //bên ProfileScreen do nó lấy dữ liệu từ placeScreen nên cần có selectedDates còn roomScreen lấy dữ liệu từ ProfileScreen thì không cần ProfileScreen
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            backgroundColor: "#007FFF",
            padding: 8,
            marginBottom: 30,
            borderRadius: 3,
            marginHorizontal: 15,
            height: 40,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Lưu Trữ
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomScreen;
