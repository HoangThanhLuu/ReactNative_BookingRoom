import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg",
    "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg",
    "https://cdn.pixabay.com/photo/2014/11/11/22/54/living-room-527646_640.jpg",
    "https://cdn.pixabay.com/photo/2014/05/17/18/03/lobby-346426_640.jpg"


];
  return (
    <View >
        {/* dùng sliderBox đã import làm băng chuyền theo chiều ngang  */}
      <SliderBox
       
        images={images}
        autoPlay
        circleLoop//chạy lặp lại 
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"//màu của dấu chấm cuộn
        ImageComponentStyle={{
        //  borderRadius: 6,
          width: "100%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});