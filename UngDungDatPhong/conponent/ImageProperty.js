import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
const ImageProperty = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2017/08/06/22/19/house-2596975_640.jpg",
        "https://cdn.pixabay.com/photo/2014/05/17/18/03/lobby-346426_640.jpg",
      ];
    
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop //chạy lặp lại
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE" //màu của dấu chấm cuộn
        ImageComponentStyle={{
          //  borderRadius: 6,
          width: "100%",
        }}
      />
    </View>
  )
}

export default ImageProperty