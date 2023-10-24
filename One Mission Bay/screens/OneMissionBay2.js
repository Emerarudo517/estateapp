import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OneMissionBay2 = () => {
  return (
    <View style={[styles.oneMissionBay2, styles.rectangleLayout]}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={styles.extraInfo}>
        <Text style={[styles.rentOrBuy, styles.rentPosition]}>Rent or Buy</Text>
        <Text style={[styles.rent, styles.bdTypo]}>Rent</Text>
        <Text style={[styles.bedrooms, styles.bdPosition]}>Bedrooms</Text>
        <Text style={[styles.bd, styles.bdPosition]}>3bd</Text>
        <Text style={[styles.closeToPublic, styles.noPosition1]}>
          Close to Public Transportation
        </Text>
        <Text style={[styles.no, styles.noPosition]}>No</Text>
        <Text style={[styles.newConstruction, styles.noCopyPosition]}>
          New Construction
        </Text>
        <Text style={[styles.noCopy, styles.noCopyPosition]}>No</Text>
        <Text style={[styles.baths, styles.baPosition]}>Baths</Text>
        <Text style={[styles.ba, styles.baPosition]}>3ba</Text>
        <Text style={[styles.extraInfo1, styles.location1Typo]}>
          Extra info
        </Text>
      </View>
      <View style={[styles.tabBar, styles.rectanglePosition]}>
        <View style={[styles.rectangle2, styles.rectangle2ShadowBox]} />
        <View style={[styles.homeIndicator, styles.rectangle2ShadowBox]}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.home, styles.homePosition]}>
          <Image
            style={[styles.objectIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object.png")}
          />
          <Text style={[styles.home1, styles.homeTypo]}>Home</Text>
        </View>
        <View style={[styles.collections, styles.homePosition]}>
          <Text style={[styles.categories, styles.timeClr]}>Categories</Text>
          <Image
            style={[styles.objectIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object1.png")}
          />
        </View>
        <View style={[styles.saved, styles.homePosition]}>
          <Text style={[styles.saved1, styles.timeClr]}>Saved</Text>
          <Image
            style={[styles.objectIcon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object2.png")}
          />
        </View>
        <View style={[styles.search, styles.homePosition]}>
          <Text style={[styles.search1, styles.timeClr]}>Search</Text>
          <Image
            style={[styles.objectIcon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object3.png")}
          />
        </View>
      </View>
      <View style={[styles.location, styles.rectanglePosition]}>
        <Image
          style={[styles.mapIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/map.png")}
        />
        <Text style={[styles.location1, styles.location1Typo]}>Location</Text>
      </View>
      <View style={styles.oneMissionBay}>
        <Text
          style={[styles.theLushInterior, styles.timeTypo]}
        >{`The lush interior courtyard invites you to swim, dine or relax, while the interior amenities provide numerous options for exercise, entertainment or business. Prominent design, fabulous finishes & the ultimate open floor plan, this home features 3 bed, 2 bath + 2 powder rooms.`}</Text>
        <Text style={[styles.oneMissionBay1, styles.location1Typo]}>
          One Mission Bay
        </Text>
      </View>
      <View style={[styles.header, styles.rectanglePosition]}>
        <Image
          style={[styles.michaelBrowning246513UnsplaIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/michaelbrowning246513unsplash.png")}
        />
        <View style={[styles.statusBarWhite, styles.iconPosition1]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Text style={[styles.home2, styles.timeTypo]}>Home</Text>
        <Image
          style={[styles.objectIcon4, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/object4.png")}
        />
        <Image
          style={[styles.heartOvalIcon, styles.ovalIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart-oval.png")}
        />
        <Image
          style={[styles.writeOvalIcon, styles.ovalIconLayout]}
          resizeMode="cover"
          source={require("../assets/write-oval.png")}
        />
        <Image
          style={[styles.bulletsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/bullets.png")}
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
  rentPosition: {
    textAlign: "center",
    fontSize: FontSize.size_smi,
    top: "50%",
    marginTop: -47.5,
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  bdTypo: {
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  bdPosition: {
    marginTop: -17.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_smi,
    top: "50%",
    position: "absolute",
  },
  noPosition1: {
    marginTop: 12.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_smi,
    top: "50%",
    position: "absolute",
  },
  noPosition: {
    left: "91.73%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
  },
  noCopyPosition: {
    marginTop: 42.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_smi,
    top: "50%",
    position: "absolute",
  },
  baPosition: {
    marginTop: 72.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_smi,
    top: "50%",
    position: "absolute",
  },
  location1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorDarkslategray,
    top: "50%",
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
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  homePosition: {
    bottom: "45.83%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: "50%",
  },
  timeClr: {
    color: Color.colorBlack,
    textAlign: "center",
    top: "50%",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconPosition: {
    top: "63.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    right: "0%",
    width: "100%",
  },
  ovalIconLayout: {
    bottom: "2.4%",
    top: "82.8%",
    width: "9.87%",
    height: "14.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: 0,
    borderStyle: "solid",
    borderColor: "#979797",
    borderWidth: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  rectangle1: {
    top: -3,
    height: 719,
    backgroundColor: Color.colorWhite,
  },
  rentOrBuy: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: "5.91%",
  },
  rent: {
    left: "89.37%",
    opacity: 0.5,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    top: "50%",
    marginTop: -47.5,
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  bedrooms: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: "5.91%",
  },
  bd: {
    left: "90.55%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
  },
  closeToPublic: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: "5.91%",
  },
  no: {
    marginTop: 12.5,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_smi,
    top: "50%",
    position: "absolute",
  },
  newConstruction: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: "5.91%",
  },
  noCopy: {
    left: "91.73%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
  },
  baths: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: "5.91%",
  },
  ba: {
    left: "90.75%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
  },
  extraInfo1: {
    marginTop: -87.5,
    left: "0%",
  },
  extraInfo: {
    top: 539,
    left: 20,
    width: 254,
    height: 175,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle2: {
    shadowColor: "#4a4a4a",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    left: "0%",
  },
  home1: {
    left: "1.61%",
    fontSize: FontSize.size_2xs,
    position: "absolute",
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
    fontSize: FontSize.size_2xs,
    position: "absolute",
    marginTop: 8,
    left: "0%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  objectIcon1: {
    width: "185.19%",
    right: "-85.19%",
    bottom: "-138.1%",
    height: "238.1%",
    maxWidth: "100%",
    top: "0%",
    left: "0%",
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
    fontSize: FontSize.size_2xs,
    position: "absolute",
    left: "0%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  objectIcon2: {
    height: "256.41%",
    width: "333.33%",
    right: "-233.33%",
    bottom: "-156.41%",
    top: "0%",
    left: "0%",
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
    fontSize: FontSize.size_2xs,
    position: "absolute",
    marginTop: 8,
    opacity: 0.5,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  objectIcon3: {
    width: "277.78%",
    right: "-177.78%",
    bottom: "-138.1%",
    height: "238.1%",
    maxWidth: "100%",
    top: "0%",
    left: "0%",
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
    height: "83.19%",
    top: "16.81%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    left: "0%",
  },
  location1: {
    marginTop: -119,
    left: "5.33%",
  },
  location: {
    top: 286,
    height: 238,
    overflow: "hidden",
  },
  theLushInterior: {
    height: "70.06%",
    top: "29.94%",
    textAlign: "left",
    left: "0%",
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_mini,
    width: "100%",
  },
  oneMissionBay1: {
    marginTop: -78.5,
    left: "1.45%",
  },
  oneMissionBay: {
    top: 107,
    left: 15,
    width: 344,
    height: 157,
    position: "absolute",
    overflow: "hidden",
  },
  michaelBrowning246513UnsplaIcon: {
    bottom: "-63.2%",
    right: "0%",
    width: "100%",
    height: "100%",
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
    textAlign: "center",
    top: "50%",
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
    top: 158,
    height: 44,
    left: "0%",
    position: "absolute",
  },
  home2: {
    marginTop: 91,
    left: "8%",
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: "50%",
  },
  objectIcon4: {
    height: "40%",
    width: "26.67%",
    right: "73.33%",
    bottom: "-3.2%",
  },
  heartOvalIcon: {
    right: "4%",
    left: "86.13%",
  },
  writeOvalIcon: {
    right: "16.53%",
    left: "73.6%",
  },
  bulletsIcon: {
    height: "3.2%",
    width: "25.07%",
    top: "92.8%",
    right: "37.33%",
    bottom: "4%",
    left: "37.6%",
  },
  header: {
    top: -158,
    height: 250,
    overflow: "hidden",
  },
  oneMissionBay2: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default OneMissionBay2;
