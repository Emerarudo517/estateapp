import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Houses = () => {
  return (
    <View style={[styles.houses, styles.housesLayout]}>
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
          <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.collections, styles.homePosition]}>
          <Text style={[styles.categories, styles.timePosition]}>
            Categories
          </Text>
          <Image
            style={[styles.objectIcon1, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object1.png")}
          />
        </View>
        <View style={[styles.saved, styles.homePosition]}>
          <Text style={[styles.saved1, styles.timePosition]}>Saved</Text>
          <Image
            style={[styles.objectIcon2, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object2.png")}
          />
        </View>
        <View style={[styles.search, styles.homePosition]}>
          <Text style={[styles.search1, styles.timePosition]}>Search</Text>
          <Image
            style={[styles.objectIcon3, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object3.png")}
          />
        </View>
      </View>
      <View style={[styles.searchesBlock, styles.searchesBlockLayout]}>
        <View style={[styles.oneMissionBay, styles.searchesBlockLayout]}>
          <Image
            style={[styles.photo1Icon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo-1.png")}
          />
          <Text style={[styles.oneMissionBay1, styles.textPosition1]}>
            One Mission Bay
          </Text>
          <Text style={styles.sanFrancisco}>San Francisco, CA</Text>
          <Text style={[styles.daysAgo, styles.textTypo]}>14 days ago</Text>
          <Text style={[styles.text, styles.textTypo]}>$2,950,000</Text>
        </View>
        <View style={[styles.steinerSt, styles.sussexStPosition]}>
          <Image
            style={[styles.photo2Icon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo-2.png")}
          />
          <Text style={[styles.steinerSt1, styles.daysPosition]}>
            1410 Steiner St
          </Text>
          <Text style={[styles.daysAgo1, styles.daysPosition]}>9 days ago</Text>
          <Text style={[styles.sanFranciscoCopy, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.text1, styles.textPosition]}>$3,279,000</Text>
        </View>
        <View style={[styles.sussexSt, styles.sussexStPosition]}>
          <Image
            style={[styles.photo2Icon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo-3.png")}
          />
          <Text style={[styles.sussexSt1, styles.daysPosition]}>
            246 Sussex St
          </Text>
          <Text style={[styles.daysAgo2, styles.daysPosition]}>7 days ago</Text>
          <Text style={[styles.sanFranciscoCopy1, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.text2, styles.textPosition]}>$1,259,000</Text>
        </View>
        <View style={[styles.marketSt, styles.sussexStPosition]}>
          <Image
            style={[styles.photo2Icon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo-4.png")}
          />
          <Text style={[styles.marketSt1, styles.agoPosition]}>
            1206 Market St
          </Text>
          <Text style={[styles.hoursAgo, styles.agoPosition]}>2 hours ago</Text>
          <Text style={[styles.sanFranciscoCopy1, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.text3, styles.textTypo]}>$379,000</Text>
        </View>
        <View style={[styles.eurekaSt, styles.sussexStPosition]}>
          <Image
            style={[styles.photo2Icon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/photo-5.png")}
          />
          <Text style={[styles.eurekaSt1, styles.agoPosition]}>
            463 Eureka St
          </Text>
          <Text style={[styles.daysAgo3, styles.agoPosition]}>4 days ago</Text>
          <Text style={[styles.sanFranciscoCopy3, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.text4, styles.textPosition]}>$3,795,000</Text>
        </View>
      </View>
      <View style={[styles.header, styles.rectanglePosition]}>
        <Text style={[styles.houses1, styles.houses1Typo]}>Houses</Text>
        <View style={[styles.statusBarWhite, styles.headerChildPosition]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
        <Image
          style={[styles.headerChild, styles.objectIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.objectIcon4, styles.objectIconPosition]}
          resizeMode="cover"
          source={require("../assets/object4.png")}
        />
        <Text style={[styles.home2, styles.homeTypo]}>Home</Text>
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
  housesLayout: {
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
  homeTypo: {
    textAlign: "center",
    color: Color.colorMediumseagreen,
    top: "50%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  timePosition: {
    color: Color.colorBlack,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  searchesBlockLayout: {
    width: 343,
    position: "absolute",
  },
  textPosition1: {
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
  },
  sussexStPosition: {
    width: 341,
    left: 2,
    position: "absolute",
    overflow: "hidden",
  },
  daysPosition: {
    left: "26.98%",
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  sanTypo: {
    left: "25.81%",
    opacity: 0.4,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    left: "79.77%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  agoPosition: {
    left: "26.1%",
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  houses1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  headerChildPosition: {
    right: "0%",
    width: "100%",
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
    top: -3,
    height: 716,
    backgroundColor: Color.colorWhite,
  },
  rectangle2: {
    shadowColor: "#4a4a4a",
    bottom: "0%",
    height: "100%",
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
    maxWidth: "100%",
    top: "0%",
  },
  home1: {
    left: "1.61%",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorMediumseagreen,
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
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    marginTop: 8,
    left: "0%",
  },
  objectIcon1: {
    width: "185.19%",
    right: "-85.19%",
    bottom: "-138.1%",
    height: "238.1%",
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
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: "0%",
  },
  objectIcon2: {
    height: "256.41%",
    width: "333.33%",
    right: "-233.33%",
    bottom: "-156.41%",
    top: "0%",
    maxWidth: "100%",
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
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    marginTop: 8,
  },
  objectIcon3: {
    width: "277.78%",
    right: "-177.78%",
    bottom: "-138.1%",
    height: "238.1%",
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
  photo1Icon: {
    width: "23.03%",
    right: "76.97%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  oneMissionBay1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: "26.24%",
    color: Color.colorDarkslategray,
    marginTop: -37,
  },
  sanFrancisco: {
    opacity: 0.4,
    fontSize: FontSize.size_sm,
    marginTop: 21,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "26.24%",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  daysAgo: {
    marginTop: -7,
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    left: "26.24%",
  },
  text: {
    left: "79.88%",
    marginTop: 21,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  oneMissionBay: {
    height: 74,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  photo2Icon: {
    width: "22.58%",
    right: "77.42%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  steinerSt1: {
    marginTop: -34.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  daysAgo1: {
    marginTop: -4.5,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    opacity: 0.5,
  },
  sanFranciscoCopy: {
    marginTop: 23.5,
  },
  text1: {
    marginTop: 23.5,
  },
  steinerSt: {
    top: 107,
    height: 79,
  },
  sussexSt1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    marginTop: -37,
  },
  daysAgo2: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    marginTop: -7,
    opacity: 0.5,
  },
  sanFranciscoCopy1: {
    marginTop: 21,
  },
  text2: {
    marginTop: 21,
  },
  sussexSt: {
    top: 212,
    height: 74,
  },
  marketSt1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    marginTop: -37,
  },
  hoursAgo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    marginTop: -7,
    opacity: 0.5,
  },
  text3: {
    left: "82.99%",
    marginTop: 21,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  marketSt: {
    top: 319,
    height: 74,
  },
  eurekaSt1: {
    marginTop: -36.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  daysAgo3: {
    marginTop: -6.5,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    opacity: 0.5,
  },
  sanFranciscoCopy3: {
    marginTop: 21.5,
  },
  text4: {
    marginTop: 20.5,
  },
  eurekaSt: {
    top: 425,
    height: 75,
  },
  searchesBlock: {
    top: 104,
    left: 17,
    height: 500,
  },
  houses1: {
    marginTop: 13,
    left: "42.4%",
    fontSize: 17,
    color: Color.colorBlack,
    textAlign: "center",
    top: "50%",
    position: "absolute",
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
    fontSize: FontSize.size_mini,
    left: 0,
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
  objectIcon4: {
    width: "89.07%",
    right: "10.93%",
  },
  home2: {
    marginTop: 14,
    left: "8%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorMediumseagreen,
    top: "50%",
  },
  objectIcon5: {
    width: "26.67%",
    right: "73.33%",
  },
  objectIcon6: {
    width: "96.8%",
    right: "3.2%",
  },
  header: {
    height: 88,
    top: 0,
    overflow: "hidden",
  },
  houses: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default Houses;
