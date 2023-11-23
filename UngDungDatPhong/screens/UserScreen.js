//userScreen.js
import { View, Text, TextInput, Pressable,Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
//thông tin của người dùng last,first
const UserScreen = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
        Alert.alert(
          "Không Hợp lệ !",
          "Vui Lòng Nhập Thông Tin",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        );
      }

      if (firstName && lastName && email && phoneNo) {
        navigation.navigate("ConfirmationScree",{
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate,
            firstName:firstName,
            lastName:lastName,
            email:email,
            phoneNo:phoneNo

        })
    
    }


  }
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
  return (
    <LinearGradient
      style={{ flex: 1, padding: 10 }}
      // Button Linear Gradient
      colors={["#C69F01", "#C5F1FB", "#192f6a"]}
    >
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 20,
          fontWeight: "700",
          fontStyle: "italic",
          marginBottom: 30,
          marginTop: 50,
          color: "#234896",
        }}
      >
        THÔNG TIN NGƯỜI DÙNG
      </Text>
      <View style={{ flexDirection: "column", gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="vui lòng nhập"
          style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Last Name</Text>
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="vui lòng nhập"
          style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="vui lòng nhập"
          style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Phone</Text>
        <TextInput
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
          placeholder="vui lòng nhập"
          style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          marginTop: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
          padding: 10,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
            - {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
          Bạn đã tiết kiệm được {route.params.oldPrice - route.params.newPrice} VND
          </Text>
        </View>
        <Pressable
        onPress={finalStep}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Tiếp Theo
          </Text>
        </Pressable>
      </Pressable>
    </LinearGradient>
  );
};

export default UserScreen;