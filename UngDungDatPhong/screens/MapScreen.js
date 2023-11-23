import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef,useEffect, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
//bản đồ mapppp
const MapScreen = ({route,navigation}) => {
    const {searchResults} = route?.params;
    const mapView = useRef(null);
    console.log(searchResults);
     const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
      coordinates.push({
          latitude:Number(prop.latitude),
          longitude:Number(prop.longitude)
      })
  }));
  //dùng để khi người dùng nhấn vào map thì nó sẽ phóng tó bản đồ(đi tới vị trí đã được định) lên hiện ra các đường 
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates,{
        edgePadding:{
            top:190,
            left:190,
            bottom:190,
            right:190,
        }
    });
  },[])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
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
  return (
    <View>
     
        <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker 
            //hiển thị tên của địa điểm  
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
             
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                    {/* hiển thị giá tiền lên khi muốn tìm kiếm địa điểm nào */}
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  )
}

export default MapScreen