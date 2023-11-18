// import { useNavigation } from "@react-navigation/native";
// import { Pressable } from "react-native";
// import { View, Text, FlatList, Image } from "react-native";

// //dùng để nhận dữ liệu ảnh và text từ SearchScreen
// const SearchResults = ({ data, input, setInput }) => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <FlatList
//         data={data}
//         //thực hiện truyền tham đối số vào (dữ liệu)
//         renderItem={({ item }) => {
//           if (item.place.toLowerCase().includes(input.toLowerCase())) {
//             //nếu như giá trị bên data (place) == với giá trị nhập vào thanh input thì dữ liệu sẽ hiển thị ra
//             if (input === "") {
//               //nếu như không nhập gì thì không hiển thị
//               return null;
//             }
//             return (
//               <Pressable
//               onPress={() => {
//                 setInput(item.place);//nhận vào dữ liệu nhập (các thành phố)
//                 navigation.navigate('HomeScreen',
//                 {
//                   input:item.place//sau khi nhận xong chuyển về thì input sẽ hiển thị
//                 }
//                 )
//               }}
//                 style={{
//                   margin: 10,
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: 10,
//                 }}
//               >
//                 <Image
//                   style={{ width: 100, height: 100 }}
//                   source={{ uri: item.placeImage }}
//                 />

//                 <Pressable>
//                   <Text style={{ fontSize: 19, fontWeight: "600" }}>
//                     {item.place}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 16,
//                       fontWeight: "600",
//                       marginVertical: 10,
//                     }}
//                   >
//                     {item.shortDescription}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 16,
//                       fontWeight: "600",
//                       marginVertical: 10,
//                       color: "#C4C4C4",
//                     }}
//                   >
//                     {item.properties.length} properties
//                   </Text>
//                 </Pressable>
//               </Pressable>
//             );
//           }
//         }}
//       />
//     </View>
//   );
// };

// export default SearchResults;
import { StyleSheet, Text, View ,FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ({data,input,setInput}) => {
    const navigation = useNavigation();
  return (
    <View style={{padding:10}}>
       <FlatList data={data} renderItem={({item}) => {
      //place chưa trong data bên SearchScreen
      if(item.place.toLowerCase().includes(input.toLowerCase())){
               if(input === ""){
                   return null;
               }
               return (
                <Pressable onPress={() => {
                  setInput(item.place);
                  navigation.navigate("HomeScreen",{
                      input:item.place
                  })

              }} style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                  <View>
                      <Image style={{width:70,height:70}} source={{uri:item.placeImage}}/>
                  </View>
                  <View style={{marginLeft:10}}>
                      <Text style={{fontSize:15,fontWeight:"500"}}>{item.place}</Text>
                      <Text style={{marginVertical:4}}>{item.shortDescription}</Text>
                      <Text style={{color:"gray",fontSize:15}}>{item.properties.length} Properties</Text>
                  </View>
              </Pressable>
               )
           }
       }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})