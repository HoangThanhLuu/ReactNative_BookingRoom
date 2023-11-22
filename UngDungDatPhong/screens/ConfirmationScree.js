import { View, Text ,ImageBackground, Pressable} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../SaveReducer';
//dùng để đặt vé bước cuối cùng 
const ConfirmationScree = ({navigation,route}) => {
 console.log(route.params);
 useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: true,
    title: "Confirmation",
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#818383",
    },
    headerStyle: {
      backgroundColor: "white",
      height: 110,
      borderBottomColor: "transparent",
      shadowColor: "transparent",
    },
  });
}, []);

const dispatch = useDispatch();
const handledBooking =() => {
  dispatch(savedPlaces(route.params));
  navigation.navigate("MyTabs")
}



  return (

    <View style={{flex:1,width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <ImageBackground style={{ flex: 1, width: '100%', height: '60%', resizeMode: 'contain',marginRight:10 ,position:'relative'}} source={require('../assets/AnhBai.jpg')}>
        <Pressable style={{position:'absolute',top:120,left:40}}>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" ,color:'#D8EFDF'}}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                marginTop: 7,
              }}
            >
                <Text>{route.params.rating}</Text>
              <Ionicons name="star-half" size={27} color="blue" />
              
              
                <Text
                  style={{
                    textAlign: "center",
                    color: "#E3C000",
                    fontSize: 15,
                  }}
                >
                  Cấp độ Đánh giá
                </Text>
              
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17B169",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
              marginLeft:40
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Du Lịch 
            </Text>
          </View>
        </View>

        <View
          style={{
            marginLeft: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 3,marginLeft:20,color:'blue' }}>
              Vào:
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#139AA5" }}
            >
              {route.params.startDate}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 3 ,color:'#C8C'}}>
              Ra:
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#139AA5" }}
            >
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View style={{  marginLeft: 12, }}>
          <Text style={{ fontSize: 16, fontWeight: "900", marginBottom: 3,color:'#F4C8B4' }}>
          Phòng và Khách:
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#9CDCFE" }}>
            {route.params.rooms} Phòng {route.params.adults} Người Lớn{" "}
            {route.params.children} Trẻ em
          </Text>
        </View>

        <Pressable
         onPress={handledBooking}
          style={{
            backgroundColor: "#003580",
            width: 120,
            padding: 5,
            marginHorizontal: 12,
            marginBottom: 20,
            borderRadius:4,
            marginTop:4
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"bold"}}>Đặt Phòng</Text>
        </Pressable>
      </Pressable>
        
        </ImageBackground>
    </View>
    
    
  )
}

export default ConfirmationScree