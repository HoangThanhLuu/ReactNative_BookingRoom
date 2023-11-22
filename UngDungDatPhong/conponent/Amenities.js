import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

//dùng để đổ dữ liệu xuống cho các phần ưu đãi
const Amenities = ({navigation}) => {
  const [dataName, setDataName] = useState([]);
  const dataFect = () => {
    fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/Project_CK")
      .then((res) => res.json())
      .then((json) => setDataName(json));
  };
  useEffect(() => {
    dataFect();
  }, []);
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          {dataName.map((item, index) => {
            return (
              <View
                style={{
                  backgroundColor: "#C5F1FB",
                  paddingHorizontal: 11,
                  paddingVertical: 5,
                  marginRight:25,
                   marginTop: 15,    
                   borderRadius:10,
                   justifyContent:'center',
                   alignItems:'center'             
                }}
                key={index}
              >
                <Text style={{fontSize:15,fontWeight:'600',fontStyle:'italic'}}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Amenities;
