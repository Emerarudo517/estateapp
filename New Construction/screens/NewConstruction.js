import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const NewConstruction = () => {
  return (
    <View style={styles.newConstruction}>
      <View style={styles.filters}>
        <View style={[styles.rentOrBuy, styles.bathsLayout]}>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
          <Text style={styles.rentOrBuy1}>Rent or Buy</Text>
          <Text style={styles.buy}>Buy</Text>
        </View>
        <View style={[styles.squareFeet, styles.bathsLayout]}>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
          <Text style={styles.rentOrBuy1}>Square feet</Text>
          <Text style={[styles.sqft1000, styles.bdPosition]}>
            500sqft - 1000 sqft
          </Text>
        </View>
        <View style={[styles.bedrooms, styles.bathsLayout]}>
          <Text style={styles.rentOrBuy1}>Bedrooms</Text>
          <Text style={[styles.bd, styles.bdPosition]}>4bd</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.baths, styles.bathsLayout]}>
          <Text style={styles.rentOrBuy1}>Baths</Text>
          <Text style={[styles.bd, styles.bdPosition]}>2ba</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.newConstruction1, styles.bathsLayout]}>
          <Text style={styles.rentOrBuy1}>New Construction</Text>
          <Text style={[styles.yes, styles.bdPosition]}>Yes</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.yearBuilt, styles.bathsLayout]}>
          <Text style={styles.rentOrBuy1}>Year Built</Text>
          <Text style={[styles.text, styles.bdPosition]}>{`<2000`}</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.closeTo, styles.bathsLayout]}>
          <Text style={styles.rentOrBuy1}>Close to Public Transportation</Text>
          <Text style={[styles.yes, styles.bdPosition]}>Yes</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.filters1, styles.filters1Clr]}>Filters</Text>
        <View style={[styles.statusBarWhite, styles.lineIconPosition]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <Text style={styles.done}>Done</Text>
      </View>
      <View style={[styles.rectangle, styles.shapeBg]} />
      <View style={[styles.homeIndicator, styles.headerLayout]}>
        <View style={[styles.shape, styles.shapeBg]} />
      </View>
      <View style={styles.popUp}>
        <View style={[styles.base, styles.basePosition]} />
        <View style={[styles.no, styles.noPosition]}>
          <View style={[styles.button, styles.buttonPosition]}>
            <Text style={[styles.action, styles.actionTypo]}>No</Text>
          </View>
          <View style={[styles.line, styles.linePosition]} />
        </View>
        <View style={[styles.any, styles.noPosition]}>
          <View style={[styles.button1, styles.buttonPosition]}>
            <Text style={[styles.action, styles.actionTypo]}>Any</Text>
          </View>
          <View style={[styles.line1, styles.linePosition]} />
        </View>
        <View style={[styles.yes2, styles.noPosition]}>
          <View style={[styles.button1, styles.buttonPosition]}>
            <Text style={[styles.action2, styles.cancelClr]}>Yes</Text>
          </View>
          <View style={[styles.line1, styles.linePosition]} />
        </View>
        <View style={[styles.cancelButton, styles.buttonPosition]}>
          <View style={[styles.base1, styles.basePosition]} />
          <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        </View>
        <Text style={[styles.newConstruction3, styles.cancelTypo]}>
          New Construction
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bathsLayout: {
    height: 42,
    left: 0,
    width: 345,
    position: "absolute",
    overflow: "hidden",
  },
  lineIconPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  bdPosition: {
    marginTop: -20,
    opacity: 0.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  headerLayout: {
    width: 375,
    left: 0,
  },
  filters1Clr: {
    color: Color.colorBlack,
    top: "50%",
  },
  shapeBg: {
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  basePosition: {
    borderRadius: Border.br_6xs,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  noPosition: {
    height: "12.69%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonPosition: {
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  actionTypo: {
    lineHeight: 22,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  linePosition: {
    borderWidth: 1,
    borderStyle: "solid",
    left: "-0.14%",
    bottom: "95.59%",
    right: "-0.14%",
    top: "0%",
    width: "100.28%",
    height: "4.41%",
    position: "absolute",
  },
  cancelClr: {
    color: Color.colorRoyalblue,
    fontWeight: "600",
    letterSpacing: 0,
  },
  cancelTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  lineIcon: {
    height: "2.38%",
    top: "96.43%",
    bottom: "1.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rentOrBuy1: {
    marginTop: -21,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  buy: {
    marginTop: -19,
    opacity: 0.5,
    fontSize: FontSize.size_sm,
    left: "93.04%",
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  rentOrBuy: {
    top: 0,
  },
  sqft1000: {
    left: "65.51%",
  },
  squareFeet: {
    top: 62,
  },
  bd: {
    left: "93.04%",
    marginTop: -20,
  },
  bedrooms: {
    top: 124,
  },
  baths: {
    top: 186,
  },
  yes: {
    left: "93.33%",
  },
  newConstruction1: {
    top: 248,
  },
  text: {
    left: "88.7%",
  },
  yearBuilt: {
    top: 310,
  },
  closeTo: {
    top: 372,
  },
  filters: {
    top: 107,
    left: 15,
    height: 414,
    width: 345,
    position: "absolute",
  },
  filters1: {
    left: "43.6%",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_mid,
    marginTop: 18.5,
    color: Color.colorBlack,
    textAlign: "center",
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
    width: 54,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "center",
    top: "50%",
    left: 0,
    position: "absolute",
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
    top: 0,
  },
  done: {
    left: "86.53%",
    color: "#5ed18f",
    fontSize: FontSize.size_mini,
    marginTop: 18.5,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  header: {
    height: 77,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    opacity: 0.6,
    width: 375,
    left: 0,
    top: 0,
    height: 812,
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    top: 778,
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
    position: "absolute",
  },
  base: {
    bottom: 68,
  },
  action: {
    letterSpacing: 0,
    lineHeight: 22,
    color: Color.colorBlack,
    left: 0,
  },
  button: {
    width: "6.11%",
    right: "46.94%",
    left: "46.94%",
    top: "35.29%",
    height: "64.71%",
    bottom: "0%",
  },
  line: {
    backgroundColor: "#dcdcdc",
    borderColor: Color.colorDarkslategray_100,
    opacity: 0.1,
  },
  no: {
    top: "57.84%",
    bottom: "29.48%",
  },
  button1: {
    width: "8.33%",
    right: "45.83%",
    left: "45.83%",
    top: "35.29%",
    height: "64.71%",
    bottom: "0%",
  },
  line1: {
    backgroundColor: Color.colorDarkslategray_200,
    borderColor: Color.colorDarkgray,
    opacity: 0.3,
  },
  any: {
    top: "24.25%",
    bottom: "63.06%",
  },
  action2: {
    left: 1,
    lineHeight: 22,
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  yes2: {
    top: "41.04%",
    bottom: "46.27%",
  },
  base1: {
    bottom: 0,
  },
  cancel: {
    top: 16,
    lineHeight: 25,
    fontFamily: FontFamily.sFProDisplay,
    width: 355,
    color: Color.colorRoyalblue,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    fontSize: FontSize.size_xl,
  },
  cancelButton: {
    height: "21.27%",
    width: "98.61%",
    top: "78.73%",
    left: "1.39%",
    bottom: "0%",
    right: "0%",
  },
  newConstruction3: {
    marginTop: -113,
    left: "27.64%",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorBlack,
    top: "50%",
  },
  popUp: {
    top: 260,
    left: 8,
    width: 360,
    height: 268,
    position: "absolute",
    overflow: "hidden",
  },
  newConstruction: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default NewConstruction;
