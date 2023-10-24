import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Apartments = () => {
  return (
    <View style={[styles.apartments, styles.rectangleLayout]}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.tabBar, styles.rectanglePosition]}>
        <View style={[styles.rectangle2, styles.rectangle2ShadowBox]} />
        <View style={[styles.homeIndicator, styles.rectangle2ShadowBox]}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.home, styles.homePosition]}>
          <Image
            style={[styles.objectIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object.png")}
          />
          <Text style={[styles.home1, styles.home1Position]}>Home</Text>
        </View>
        <View style={[styles.collections, styles.homePosition]}>
          <Text style={[styles.categories, styles.saved1Typo]}>Categories</Text>
          <Image
            style={[styles.objectIcon1, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object1.png")}
          />
        </View>
        <View style={[styles.saved, styles.homePosition]}>
          <Text style={[styles.saved1, styles.saved1Typo]}>Saved</Text>
          <Image
            style={[styles.objectIcon2, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object2.png")}
          />
        </View>
        <View style={[styles.search, styles.homePosition]}>
          <Text style={[styles.search1, styles.saved1Typo]}>Search</Text>
          <Image
            style={[styles.objectIcon3, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object3.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.mapIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.header, styles.rectanglePosition]}>
        <Text style={[styles.apartments1, styles.home1Position]}>
          Apartments
        </Text>
        <View style={[styles.statusBarWhite, styles.headerChildPosition]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.headerChild, styles.objectIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-5.png")}
        />
        <Text style={[styles.home2, styles.timeTypo]}>Home</Text>
        <Image
          style={[styles.objectIcon4, styles.objectIconPosition]}
          resizeMode="cover"
          source={require("../assets/object4.png")}
        />
        <Image
          style={[styles.objectIcon5, styles.objectIconPosition]}
          resizeMode="cover"
          source={require("../assets/object5.png")}
        />
        <Image
          style={[styles.objectIcon6, styles.objectIconPosition]}
          resizeMode="cover"
          source={require("../assets/object6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  rectanglePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle2ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  homePosition: {
    bottom: "45.83%",
    position: "absolute",
    overflow: "hidden",
  },
  objectIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  home1Position: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  saved1Typo: {
    opacity: 0.5,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: "50%",
    position: "absolute",
  },
  headerChildPosition: {
    right: "0%",
    width: "100%",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  objectIconPosition: {
    bottom: "-13.64%",
    height: "113.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    borderStyle: "solid",
    borderColor: "#979797",
    borderWidth: 1,
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  rectangle1: {
    height: 716,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  rectangle2: {
    height: "100%",
    bottom: "0%",
    shadowColor: "#4a4a4a",
    top: "0%",
    backgroundColor: Color.colorWhite,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    height: 34,
    opacity: 0.77,
  },
  objectIcon: {
    width: "322.58%",
    right: "-222.58%",
    bottom: "-138.1%",
    height: "238.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  home1: {
    left: "1.61%",
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    top: "50%",
    marginTop: 8,
  },
  home: {
    width: "8.27%",
    right: "84%",
    left: "7.73%",
    top: "10.42%",
    height: "43.75%",
    bottom: "45.83%",
  },
  categories: {
    marginTop: 8,
    opacity: 0.5,
    left: "0%",
  },
  objectIcon1: {
    width: "185.19%",
    right: "-85.19%",
    bottom: "-138.1%",
    height: "238.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  collections: {
    width: "14.4%",
    right: "55.2%",
    left: "30.4%",
    top: "10.42%",
    height: "43.75%",
    bottom: "45.83%",
  },
  saved1: {
    marginTop: 6.5,
    left: "0%",
  },
  objectIcon2: {
    height: "256.41%",
    width: "333.33%",
    right: "-233.33%",
    bottom: "-156.41%",
    top: "0%",
  },
  saved: {
    height: "40.63%",
    width: "8%",
    top: "13.54%",
    right: "31.47%",
    left: "60.53%",
  },
  search1: {
    left: "1.39%",
    marginTop: 8,
    opacity: 0.5,
  },
  objectIcon3: {
    width: "277.78%",
    right: "-177.78%",
    bottom: "-138.1%",
    height: "238.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  search: {
    width: "9.6%",
    right: "6.67%",
    left: "83.73%",
    top: "10.42%",
    height: "43.75%",
    bottom: "45.83%",
  },
  tabBar: {
    top: 716,
    height: 96,
    overflow: "hidden",
  },
  mapIcon: {
    top: 83,
    height: 644,
  },
  apartments1: {
    marginTop: 13,
    left: "38.13%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "center",
    top: "50%",
  },
  barsstatusBardarkConnectIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -5.5,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorBlack,
    left: 0,
    fontSize: FontSize.size_mini,
  },
  barsstatusBardarkTime: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBarWhite: {
    height: 44,
    left: "0%",
    top: 0,
    position: "absolute",
  },
  headerChild: {
    height: "1.14%",
    top: "98.3%",
    bottom: "0.57%",
    right: "0%",
    width: "100%",
  },
  home2: {
    marginTop: 14,
    left: "8%",
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  objectIcon4: {
    width: "26.67%",
    right: "73.33%",
  },
  objectIcon5: {
    width: "96.8%",
    right: "3.2%",
  },
  objectIcon6: {
    width: "89.07%",
    right: "10.93%",
  },
  header: {
    height: 88,
    top: 0,
    overflow: "hidden",
  },
  apartments: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default Apartments;
