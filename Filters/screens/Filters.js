import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Filters = () => {
  return (
    <View style={[styles.filters, styles.filtersLayout]}>
      <View style={[styles.rectangle, styles.headerPosition]} />
      <View style={styles.filters1}>
        <View style={[styles.rentOrBuy, styles.bathsLayout]}>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Rent or Buy
          </Text>
          <Text style={styles.buy}>Buy</Text>
        </View>
        <View style={[styles.squareFeet, styles.bathsLayout]}>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Square feet
          </Text>
          <Text style={[styles.sqft1000, styles.bdPosition]}>
            500sqft - 1000 sqft
          </Text>
        </View>
        <View style={[styles.bedrooms, styles.bathsLayout]}>
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Bedrooms
          </Text>
          <Text style={[styles.bd, styles.bdPosition]}>4bd</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.baths, styles.bathsLayout]}>
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Baths
          </Text>
          <Text style={[styles.bd, styles.bdPosition]}>2ba</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.newConstruction, styles.bathsLayout]}>
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            New Construction
          </Text>
          <Text style={[styles.yes, styles.bdPosition]}>Yes</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.yearBuilt, styles.bathsLayout]}>
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Year Built
          </Text>
          <Text style={[styles.text, styles.bdPosition]}>{`<2000`}</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.closeTo, styles.bathsLayout]}>
          <Text style={[styles.rentOrBuy1, styles.filters2Position]}>
            Close to Public Transportation
          </Text>
          <Text style={[styles.yes, styles.bdPosition]}>Yes</Text>
          <Image
            style={[styles.lineIcon, styles.lineIconPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.filters2, styles.filters2Position]}>Filters</Text>
        <View style={[styles.statusBarWhite, styles.lineIconPosition]}>
          <Image
            style={styles.barsstatusBardarkConnectIcon}
            resizeMode="cover"
            source={require("../assets/barsstatus-bardark-connections.png")}
          />
          <View style={styles.barsstatusBardarkTime}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Text style={[styles.done, styles.timeTypo]}>Done</Text>
      </View>
      <View style={[styles.homeIndicator, styles.headerPosition]}>
        <View style={styles.shape} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filtersLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bathsLayout: {
    height: 42,
    width: 345,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lineIconPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  filters2Position: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  bdPosition: {
    marginTop: -20,
    opacity: 0.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
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
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: 375,
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
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    left: "0%",
  },
  buy: {
    marginTop: -19,
    opacity: 0.5,
    fontSize: FontSize.size_sm,
    left: "93.04%",
    textAlign: "center",
    color: Color.colorDarkslategray,
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
  newConstruction: {
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
  filters1: {
    top: 107,
    left: 15,
    height: 414,
    width: 345,
    position: "absolute",
  },
  filters2: {
    left: "43.6%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    marginTop: 18.5,
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
    top: 0,
  },
  done: {
    left: "85.2%",
    color: "#5ed18f",
    marginTop: 18.5,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mini,
  },
  header: {
    height: 77,
    top: 0,
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
  },
  filters: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Filters;
