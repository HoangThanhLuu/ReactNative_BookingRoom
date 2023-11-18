import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "../conponent/Carousel";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  //sử dụng cho đăt phòng số người
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  const route = useRoute()//Sử dụng useRoute để truy cập thông tin về đường dẫn và các tham số được truyền vào màn hình hiện tại(nó sẽ truy cập vào dữ liệu được truyền SearchScreen vào) và đối tượng params chứa bất kỳ tham số hoặc dữ liệu nào đã được truyền vào màn hình
  //console.log(selectedDates); //thông báo ngày chọn ngày
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Đặt Phòng",
      headerTitleStyle: { fontSize: 24,color:'#525A5E', fontWeight: "800" },
      headerStyle: { backgroundColor: "white" },
      headerRight: () => (
        <Ionicons name="notifications" size={30} color="#525A5E" />
      ),
      headerLeft: () => (
        <MaterialIcons name="location-on" size={34} color="#525A5E" />
      ),
    });
  });
 console.log(route);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  const searchPlaces= (place) =>{
      if(!route.params || !selectedDates){//nếu khác với dữ liệu đặt phòng và chọn ngày đặt phòng
          Alert.alert(
            "Không hợp lệ!",
            "Vui lòng nhập thông tin",
           {
              text:'Đồng ý',
              onPress:() => console.log('Đồng ý'),
              style:'Đồng ý'
           }

          )
      }
      if(route.params && selectedDates){
        navigation.navigate('PlaceScreen',
        {
          rooms:rooms,
          adults:adults,
          children:children,
          selectedDates:selectedDates,
          place:place//do bên dưới onPress đã có truyền dữ liệu vào chỉ cần đặt place


        }
        )
      }
  }

  //console.log(route.params)//đối tượng params chứa bất kỳ tham số hoặc dữ liệu nào đã được truyền vào màn hình

  return (
    <>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, width: "100%" }}>
          {/* các ảnh cuộc theo chiêu ngang :npm i react-native-image-slider-box và import thêm npm i deprecated-react-native-prop-types còn thay đổi bên trong node_modules*/}
          <Carousel />
          {/* Thông tin sdt và email*/}
          <View
            style={{
              width: "100%",
             
              justifyContent: "space-between",
              flexDirection: "row",
            }}

            
          >
            <Text style={{ color: "#428C91", fontSize: 13, fontWeight: "700" }}>
              SDT:0966345012
            </Text>
            <Text style={{ color: "#428C91", fontSize: 13, fontWeight: "700" }}>
              Email:luuhoang06102002@gmail.com
            </Text>
          </View>

          <ScrollView>
            <View
              style={{
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 15,
                marginTop: 25,
                backgroundColor: "#525A5E",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              {/* chọn điểm đến */}
              <Pressable
                onPress={() => navigation.navigate('SearchScreen')}
                style={{
                  marginVertical: 15,
                  flexDirection: "row",
                  width: "95%",
                  backgroundColor: "white",
                  borderWidth:5,
                  borderColor:'#E3C000',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  borderWidth: 1,
                }}
              >
                <FontAwesome
                  style={{ marginRight: 10 }}
                  name="search"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholderTextColor="black"
                  placeholder={route?.params ? route.params.input : "Chọn điểm đến"}// route?.params route có tồn tại hay không rồi mới tới params và input
                ></TextInput>
              </Pressable>
              {/* chon ngày giờ  npm i react-native-date-ranges*/}
              <Pressable
                style={{
                  marginVertical: 15,
                  flexDirection: "row",
                  width: "95%",
                  backgroundColor: "white",
                  borderWidth:2,
                  borderColor:'#E3C000',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  borderWidth: 1,
                }}
              >
                <FontAwesome5
                  style={{ marginRight: 10 }}
                  name="calendar-alt"
                  size={24}
                  color="black"
                />
                <DatePicker
                  style={{
                    width: 350,
                    height: 30,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "transparent",
                    color: "black",
                  }}
                  //cái này là điều chỉnh các màu bên lịch
                  customStyles={{
                    placeholderText: {
                      fontSize: 15,
                      color:'black',
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                    headerStyle: {
                      backgroundColor: "#003580",
                    },
                    contentText: {
                      fontSize: 15,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                    },
                  }}
                  selectedBgColor="#0047AB" //mã màu
                  customButton={(onConfirm) => customButton(onConfirm)} //lưu trữ dữ liệu của ngày
                  onConfirm={(
                    startDate,
                    endDate //bắt đầu chọn từ ngày nào đến ngày nào
                  ) => setSelectedDates(startDate, endDate)}
                  allowFontScaling={false}
                  placeholderTextColor="black"
                  placeholder={"Chọn ngày đặt phòng"}
                  mode={"range"}
                />
              </Pressable>
              {/* chọn phòng và số người */}
              <Pressable
                style={{
                  marginVertical: 15,
                  flexDirection: "row",
                  width: "95%",
                  backgroundColor: "white",
                  borderWidth:2,
                  borderColor:'#E3C000',
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  borderWidth: 1,
                }}
              >
                <FontAwesome5
                  onPress={() => setModalVisibile(!modalVisibile)}
                  style={{ marginRight: 10 }}
                  name="user-alt"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholderTextColor="black"
                  placeholder={`${rooms} Phong- ${adults} Người lớn- ${children} Trẻ em `}
                ></TextInput>
              </Pressable>
              {/* button  search */}
              <TouchableOpacity
                onPress={() => searchPlaces(route?.params.input)}
                style={{
                  marginVertical: 15,
                  flexDirection: "row",
                  width: "50%",
                  backgroundColor: "#C5F1FB",
                  paddingVertical: 15,
                  paddingHorizontal: 15,
                  borderRadius: 15,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#CC9230",
                    fontWeight: "700",
                    fontSize: 17,
                    shadowColor: "rgba(0,0,0,0.7)",
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    shadowOffset: { width: 2, height: 3 },
                  }}
                >
                  Tìm kiếm
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* bottom modal phải import vào npm install react-native-modals
       */}
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)} //tVì vậy, khi người dùng chạm vào bên ngoài phương thức (trên phông nền), phương thức sẽ  đóng
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Áp Dụng"
              style={{
                marginBottom: 20,
                color: "red",
                backgroundColor: "#818383",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Chọn phòng và số lượng" />}
        modalAnimation={
          // moda này nó sẽ trượt từ dưới lên
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)} //onHardwareBackPresslà một chức năng được sử dụng trong React Native để xử lý sự kiện nhấn nút quay lại phần cứng Android(có thể mở hoặc đóng hộp thoại trong trường hợp nà là mở)
        visible={modalVisibile} //dùng để hiện modal lên
        onTouchOutside={() => setModalVisibile(!modalVisibile)} //chúng ta nhấn bên ngoài thì nó cũng có thể đóng lại
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          {/* số lượng phòng */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Phòng</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1,rooms-1))}//Math.maxt là sẽ trả về số lớn nhất trong () VD:(2,1,7) trả về 7 , còn 1 ở đây là số tối thiểu nhỏ nhất trong 2 số(1,rooms-1)
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
               onPress={() => setRooms((c) => c + 1)}//khi cái đó số thay đổi là nó là một cái động tác function 
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Người lớn</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Trẻ em</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;
