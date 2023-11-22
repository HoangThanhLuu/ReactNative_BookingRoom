import { View, Text ,SafeAreaView,Pressable,ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';



const BookingScreen = ({navigation,route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Booking`,
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
  //useSelector giúp truy cập trực tiếp vào redux store
  const bookings = useSelector((state) => state.booking.booking)
  console.log(bookings);
  return (
    
       <LinearGradient
      style={{ flex: 1, padding: 10 }}
      // Button Linear Gradient
      colors={["#C69F01", "#C5F1FB", "#192f6a"]}
    >
      <ScrollView>
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

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'500',color:'gray',fontStyle:'italic'}}>{item.firstName}</Text>
        <Text style={{fontSize:20,fontWeight:'500',color:'gray',fontStyle:'italic',marginLeft:3}}>{item.lastName}</Text>
      </View>
      <Text style={{marginVertical:5,fontSize:16,color:'#21ABBE'}}>{item.email}</Text>
      <Text style={{fontSize:16,color:'#F4C8B4',fontWeight:'800'}}>{item.phoneNo}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 7,
        }}
      >
       
       <Text style={{color:'#A59A13',fontWeight:'500'}}>Số tiền thanh toán:</Text>
        <Text style={{ marginLeft: 3 ,color:'red'}}>{item.newPrice}</Text>
      
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>
        <View style={{flexDirection:'column'}}>
        <Text style={{marginLeft:20,fontSize:17,color:'#139AA5',fontWeight:'800'}}>Ra</Text>
          <Text style={{color:'#139AA5'}}>{item.startDate}</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:20,fontSize:17,color:'#139AA5',fontWeight:'800'}}>Vào</Text>
          <Text style={{color:'#139AA5'}}>{item.endDate}</Text>
        </View>
      </View>
    </View>
  </Pressable>
 
))}

  
 </ScrollView>
</LinearGradient>

  )
}

export default BookingScreen