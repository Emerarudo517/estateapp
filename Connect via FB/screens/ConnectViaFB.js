import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ConnectViaFB = () => {
  return (
    <View style={styles.connectViaFb}>
      <View style={[styles.rectangle, styles.headerPosition]} />
      <Image
        style={[styles.fbLoginIcon, styles.timePosition]}
        resizeMode="cover"
        source={require("../assets/fb-login.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.screenShot20190429At648, styles.screenLayout]}
          resizeMode="cover"
          source={require("../assets/screen-shot-20190429-at-64830-pm.png")}
        />
        <View style={[styles.rectangle1, styles.rectangle1Position]} />
        <View style={[styles.statusBarWhite, styles.rectangle1Position]}>
          <Image
            style={styles.connectionsIcon}
            resizeMode="cover"
            source={require("../assets/connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.home}>
        <View style={[styles.rectangle2, styles.rectangle2Position]} />
        <Image
          style={[styles.screenShot20190429At6481, styles.rectangle2Position]}
          resizeMode="cover"
          source={require("../assets/screen-shot-20190429-at-64837-pm.png")}
        />
        <View style={[styles.homeIndicator, styles.rectangle2Position]}>
          <View style={styles.shape} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  screenLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangle1Position: {
    left: "0%",
    position: "absolute",
  },
  rectangle2Position: {
    left: "1.05%",
    position: "absolute",
  },
  rectangle: {
    top: -3,
    borderStyle: "solid",
    borderColor: "#979797",
    borderWidth: 1,
    height: 815,
    backgroundColor: Color.colorWhite,
  },
  fbLoginIcon: {
    top: 93,
    width: 378,
    height: 649,
  },
  screenShot20190429At648: {
    height: "44.33%",
    top: "55.67%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0.27%",
    width: "99.73%",
  },
  rectangle1: {
    height: "55.67%",
    top: "0%",
    bottom: "44.33%",
    backgroundColor: "#f4f6f9",
    right: "0.27%",
    width: "99.73%",
    left: "0%",
  },
  connectionsIcon: {
    top: 15,
    right: 14,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -5.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "center",
    width: 54,
  },
  barsstatusBardarkTime: {
    top: 8,
    left: 21,
    width: 56,
    height: 23,
    position: "absolute",
  },
  statusBarWhite: {
    right: "0%",
    height: 44,
    top: 0,
    width: "100%",
  },
  header: {
    height: 97,
    top: 0,
    overflow: "hidden",
  },
  rectangle2: {
    height: "14.29%",
    top: "85.71%",
    backgroundColor: "#f4f6f8",
    right: "0.26%",
    width: "98.68%",
    left: "1.05%",
    bottom: "0%",
  },
  screenShot20190429At6481: {
    height: "85.71%",
    width: "99.74%",
    top: "0.65%",
    right: "-0.79%",
    bottom: "13.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 34,
    opacity: 0.77,
    right: "0.26%",
    width: "98.68%",
    left: "1.05%",
  },
  home: {
    top: 735,
    left: -4,
    width: 380,
    height: 77,
    position: "absolute",
    overflow: "hidden",
  },
  connectViaFb: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ConnectViaFB;
