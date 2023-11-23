import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const ProfileScreen = ({ navigation, route }) => {
  //useSelector giúp truy cập trực tiếp vào redux store
  const profile = useSelector((state) => state.booking.booking);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Profile`,
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
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      {profile.length > 0 &&
        profile.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Pressable
              key={index}
              style={{
                flexDirection: "column",
                width: "100%",
                height: "60%",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                backgroundColor: "#309BD2",
                borderRadius: 20,
              }}
            >
              <FontAwesome name="user-circle" size={100} color="white" />
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    fontStyle: "italic",
                    color: "white",
                  }}
                >
                  {item.firstName}
                  {item.lastName}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  marginTop: 10,
                  color: "white",
                }}
              >
                Đặt Phòng Khách Sạn
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginVertical: 20,
                }}
              >
                <Text style={{ fontSize: 19, fontWeight: "600" }}>Email:</Text>
                <Text style={{ fontSize: 17, fontWeight: "400" }}>
                  {item.email}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  marginVertical: 20,
                }}
              >
                <Text style={{ fontSize: 19, fontWeight: "600" }}>Phone:</Text>
                <Text style={{ fontSize: 17, fontWeight: "400" }}>
                  {item.phoneNo}
                </Text>
              </View>
            </View>
          </View>
        ))}

      <Pressable
      onPress={() => navigation.navigate('HomeScreen')}
        style={{
          width: "90%",
          height: 50,
          borderWidth: 3,
          marginTop: "auto",
          marginBottom: 10,
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent:'center',
          alignItems:'center',
          borderRadius:20,
          borderColor:'#309BD2'
        }}
      >
        <Text style={{fontSize:20,color:'#309BD2',fontWeight:'700'}}>Thoát</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
