import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Reviews = () => {
  return (
    <View style={[styles.reviews, styles.reviewsLayout]}>
      <View style={[styles.rectangle, styles.rectanglePosition]} />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
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
          <Text style={[styles.home1, styles.homeFlexBox]}>Home</Text>
        </View>
        <View style={[styles.collections, styles.homePosition]}>
          <Text style={[styles.categories, styles.saved1Typo]}>Categories</Text>
          <Image
            style={[styles.objectIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object1.png")}
          />
        </View>
        <View style={[styles.saved, styles.homePosition]}>
          <Text style={[styles.saved1, styles.saved1Typo]}>Saved</Text>
          <Image
            style={[styles.objectIcon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object2.png")}
          />
        </View>
        <View style={[styles.search, styles.homePosition]}>
          <Text style={[styles.search1, styles.saved1Typo]}>Search</Text>
          <Image
            style={[styles.objectIcon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/object3.png")}
          />
        </View>
      </View>
      <View style={styles.reviews1}>
        <Image
          style={[styles.profilePictureIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/profile-picture.png")}
        />
        <Image
          style={[styles.starsIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/4-stars.png")}
        />
        <Text style={[styles.weveVisitedThis, styles.aFewSecondsClr]}>
          We’ve visited this house last week and it’s a pretty cozy home.
        </Text>
        <Text style={styles.florianMarcu}>Florian Marcu</Text>
        <Text style={[styles.aFewSeconds, styles.aFewSecondsClr]}>
          a few seconds ago
        </Text>
        <Text style={[styles.reviews2, styles.reviews2Typo]}>Reviews</Text>
      </View>
      <View style={styles.extraInfo}>
        <Text style={[styles.rentOrBuy, styles.rentPosition]}>Rent or Buy</Text>
        <Text style={[styles.rent, styles.rentPosition]}>Rent</Text>
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
        <Text style={[styles.yearBuilt, styles.textPosition]}>Year Built</Text>
        <Text style={[styles.text, styles.textPosition]}>{`<2000`}</Text>
        <Text style={[styles.squareFeet, styles.sqftPosition]}>
          Square feet
        </Text>
        <Text style={[styles.sqft, styles.sqftPosition]}>{`>2000sqft`}</Text>
        <Text style={[styles.extraInfo1, styles.reviews2Typo]}>Extra info</Text>
      </View>
      <View style={[styles.location, styles.rectanglePosition]}>
        <Image
          style={[styles.mapIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/map.png")}
        />
        <Text style={[styles.location1, styles.reviews2Typo]}>Location</Text>
      </View>
      <View style={[styles.header, styles.rectanglePosition]}>
        <View style={styles.statusBarWhite}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
          </View>
        </View>
        <Text style={[styles.home2, styles.homeFlexBox]}>Home</Text>
        <Image
          style={[styles.objectIcon4, styles.iconLayout]}
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
  reviewsLayout: {
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeFlexBox: {
    textAlign: "center",
    top: "50%",
  },
  saved1Typo: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: FontSize.size_2xs,
    top: "50%",
  },
  aFewSecondsClr: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  reviews2Typo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  rentPosition: {
    fontSize: FontSize.size_smi,
    marginTop: -77.5,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  bdPosition: {
    marginTop: -47.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  noPosition1: {
    marginTop: -17.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  noPosition: {
    left: "85.66%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  noCopyPosition: {
    marginTop: 12.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  baPosition: {
    marginTop: 42.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: 72.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  sqftPosition: {
    marginTop: 102.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  timeClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  ovalIconLayout: {
    top: "56.98%",
    width: "9.87%",
    height: "43.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
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
    height: 719,
    backgroundColor: Color.colorWhite,
  },
  rectangle2: {
    height: "100%",
    shadowColor: "#4a4a4a",
    bottom: "0%",
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
    left: "0%",
    top: "0%",
  },
  home1: {
    left: "1.61%",
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
    fontSize: FontSize.size_2xs,
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
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    opacity: 0.5,
    marginTop: 8,
    left: "0%",
  },
  objectIcon1: {
    width: "185.19%",
    right: "-85.19%",
    bottom: "-138.1%",
    height: "238.1%",
    maxWidth: "100%",
    left: "0%",
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
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    opacity: 0.5,
    left: "0%",
  },
  objectIcon2: {
    height: "256.41%",
    width: "333.33%",
    right: "-233.33%",
    bottom: "-156.41%",
    left: "0%",
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
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    opacity: 0.5,
    marginTop: 8,
  },
  objectIcon3: {
    width: "277.78%",
    right: "-177.78%",
    bottom: "-138.1%",
    height: "238.1%",
    maxWidth: "100%",
    left: "0%",
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
  profilePictureIcon: {
    height: "38.03%",
    width: "16.42%",
    top: "29.58%",
    right: "82.11%",
    bottom: "32.39%",
    left: "1.47%",
  },
  starsIcon: {
    height: "14.08%",
    width: "30.5%",
    top: "34.51%",
    bottom: "51.41%",
    left: "69.5%",
    right: "0%",
  },
  weveVisitedThis: {
    height: "32.39%",
    top: "67.61%",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    left: "0%",
    width: "100%",
  },
  florianMarcu: {
    marginTop: -26,
    left: "16.42%",
    fontSize: 14,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  aFewSeconds: {
    marginTop: -9,
    left: "16.28%",
    opacity: 0.5,
    textAlign: "center",
    fontSize: FontSize.size_2xs,
    top: "50%",
  },
  reviews2: {
    marginTop: -71,
    left: "1.76%",
  },
  reviews1: {
    top: 532,
    left: 13,
    width: 341,
    height: 142,
    position: "absolute",
    overflow: "hidden",
  },
  rentOrBuy: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  rent: {
    left: "83.46%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  bedrooms: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  bd: {
    left: "84.56%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  closeToPublic: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  no: {
    marginTop: -17.5,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  newConstruction: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  noCopy: {
    left: "85.66%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  baths: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  ba: {
    left: "84.93%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  yearBuilt: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  text: {
    left: "82.35%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  squareFeet: {
    left: "5.51%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  sqft: {
    left: "78.13%",
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.5,
  },
  extraInfo1: {
    marginTop: -117.5,
    left: "0%",
  },
  extraInfo: {
    top: 267,
    left: 19,
    width: 272,
    height: 235,
    position: "absolute",
    overflow: "hidden",
  },
  mapIcon: {
    height: "83.19%",
    top: "16.81%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  location1: {
    marginTop: -119,
    left: "5.33%",
  },
  location: {
    top: 14,
    height: 238,
    overflow: "hidden",
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
    textAlign: "center",
    top: "50%",
    color: Color.colorBlack,
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
    right: "0%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  home2: {
    marginTop: 15,
    left: "8%",
    fontSize: FontSize.size_mini,
    color: Color.colorMediumseagreen,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  objectIcon4: {
    height: "116.28%",
    width: "26.67%",
    right: "73.33%",
    bottom: "-16.28%",
    left: "0%",
    top: "0%",
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
    height: "9.3%",
    width: "25.07%",
    top: "86.05%",
    right: "37.33%",
    bottom: "4.65%",
    left: "37.6%",
  },
  header: {
    height: 86,
    top: 0,
    overflow: "hidden",
  },
  reviews: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Reviews;
