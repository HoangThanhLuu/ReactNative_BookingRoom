import { View, Text ,SafeAreaView,Pressable} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { MaterialIcons } from "@expo/vector-icons";


const BookingScreen = () => {
  //useSelector giúp truy cập trực tiếp vào redux store
  const bookings = useSelector((state) => state.booking.booking)
  console.log(bookings);
  return (
    <SafeAreaView>
    {bookings.length > 0 && bookings.map((item,index) => (
  <Pressable
  key={index}
    style={{
      backgroundColor: "white",
      marginVertical:10,
      marginHorizontal:20,
      borderColor: "#E0E0E0",
      borderWidth: 1,
      padding: 14,
      borderRadius: 6,
    }}
  >
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 7,
        }}
      >
        <MaterialIcons name="stars" size={24} color="green" />
        <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
          {item.rating}
        </Text>
        <Text style={{ marginLeft: 3 }}>•</Text>
        <View
          style={{
            padding: 6,
            borderRadius: 4,
            width: 100,
            backgroundColor: "#0039a6",

            marginLeft: 4,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 13,
              fontWeight: "400",
            }}
          >
            Genius Level
          </Text>
        </View>
      </View>
    </View>
  </Pressable>
))}
</SafeAreaView>
  )
}

export default BookingScreen