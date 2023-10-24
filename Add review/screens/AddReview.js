import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddReview = () => {
  return (
    <View style={[styles.addReview, styles.addReviewLayout]}>
      <View style={[styles.rectangle, styles.footerLayout1]} />
      <View style={[styles.footer, styles.footerLayout]}>
        <View style={[styles.addReviewButton, styles.rectangle1Position]}>
          <View style={[styles.rectangle1, styles.rectangle1Position]} />
          <Text style={[styles.addReview1, styles.addReview1Typo]}>
            Add review
          </Text>
        </View>
        <View style={[styles.homeIndicator, styles.rectangle1Position]}>
          <View style={styles.shape} />
        </View>
      </View>
      <View style={[styles.review, styles.reviewLayout]}>
        <Text style={[styles.weveVisitedThis, styles.reviewLayout]}>
          We’ve visited this home last week and it’s a cozy house.
        </Text>
        <Image
          style={[styles.starsIcon, styles.headerPosition]}
          resizeMode="cover"
          source={require("../assets/4-stars.png")}
        />
      </View>
      <View style={[styles.header, styles.footerLayout1]}>
        <Text style={styles.addAReview}>Add a Review</Text>
        <View style={[styles.statusBarWhite, styles.rectangle1Position]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Text style={[styles.cancel, styles.timeTypo]}>Cancel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addReviewLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  footerLayout1: {
    width: 375,
    position: "absolute",
  },
  footerLayout: {
    height: 46,
    left: 0,
  },
  rectangle1Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  addReview1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  reviewLayout: {
    width: 334,
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    borderStyle: "solid",
    borderColor: "#979797",
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  rectangle1: {
    backgroundColor: "#20c065",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
  },
  addReview1: {
    marginTop: -12,
    left: "38.93%",
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  addReviewButton: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
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
    bottom: 1,
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
    left: "0%",
    right: "0%",
  },
  footer: {
    top: 767,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  weveVisitedThis: {
    top: 40,
    fontSize: 19,
    color: "#4a4a4a",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    height: 46,
    left: 0,
  },
  starsIcon: {
    width: 104,
    height: 20,
    position: "absolute",
  },
  review: {
    top: 97,
    left: 20,
    height: 86,
  },
  addAReview: {
    left: "36.4%",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.colorBlack,
    marginTop: 18.5,
    fontSize: FontSize.size_mid,
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
    color: Color.colorBlack,
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
    right: "0%",
    top: 0,
  },
  cancel: {
    left: "83.73%",
    color: "#5ed18f",
    fontSize: FontSize.size_mini,
    marginTop: 18.5,
    fontFamily: FontFamily.robotoRegular,
  },
  header: {
    height: 77,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  addReview: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AddReview;
