import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LogOut = () => {
  return (
    <View style={[styles.logOut, styles.logLayout]}>
      <View style={[styles.rectangle, styles.barPosition]} />
      <View style={[styles.rectangle1, styles.barPosition]} />
      <View style={[styles.header, styles.barPosition]}>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Image
          style={[styles.headerChild, styles.objectIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.profilePictureIcon, styles.rectanglePosition]}
          resizeMode="cover"
          source={require("../assets/profile-picture.png")}
        />
        <Image
          style={[styles.objectIcon, styles.objectIconPosition1]}
          resizeMode="cover"
          source={require("../assets/object.png")}
        />
        <Image
          style={[styles.objectIcon1, styles.objectIconPosition1]}
          resizeMode="cover"
          source={require("../assets/object1.png")}
        />
      </View>
      <View style={[styles.tabBar, styles.barPosition]}>
        <View style={[styles.rectangle2, styles.rectangle2ShadowBox]} />
        <View style={[styles.home1, styles.home1Layout]}>
          <Image
            style={[styles.objectIcon2, styles.objectIconPosition]}
            resizeMode="cover"
            source={require("../assets/object2.png")}
          />
          <Text style={[styles.home2, styles.home2Typo]}>Home</Text>
        </View>
        <View style={[styles.collections, styles.collectionsLayout]}>
          <Text style={[styles.collections1, styles.home2Typo]}>
            Collections
          </Text>
          <Image
            style={[styles.objectIcon3, styles.objectIconPosition]}
            resizeMode="cover"
            source={require("../assets/object3.png")}
          />
        </View>
        <View style={[styles.saved, styles.home1Layout]}>
          <Text style={[styles.collections1, styles.home2Typo]}>Saved</Text>
          <Image
            style={[styles.icons8HeartOutline500, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8heartoutline500.png")}
          />
        </View>
        <View style={[styles.search, styles.home1Layout]}>
          <Text style={[styles.search1, styles.home2Typo]}>Search</Text>
          <Image
            style={[styles.icons8Search500, styles.icons8Position]}
            resizeMode="cover"
            source={require("../assets/icons8search500.png")}
          />
        </View>
      </View>
      <View style={[styles.categoriesBlock, styles.blockPosition]}>
        <View style={[styles.houses, styles.housesPosition]}>
          <View style={[styles.rectangle3, styles.rectangleBorder]} />
          <Text style={[styles.houses1, styles.houses1Typo]}>Houses</Text>
          <Image
            style={[styles.houseImageIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/house-image.png")}
          />
        </View>
        <View style={[styles.apartments, styles.housesPosition]}>
          <View style={[styles.rectangle3, styles.rectangleBorder]} />
          <Text style={[styles.houses1, styles.houses1Typo]}>Apartments</Text>
          <Image
            style={[styles.houseImageIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/apartment-image.png")}
          />
        </View>
        <View style={styles.condos}>
          <View style={[styles.rectangleCopy3, styles.rectangleBorder]} />
          <Text style={[styles.condos1, styles.houses1Typo]}>Condos</Text>
          <Image
            style={[styles.condosImageIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/condos-image.png")}
          />
        </View>
        <Text style={[styles.categories, styles.houses2Typo]}>Categories</Text>
      </View>
      <View style={[styles.housesBlock, styles.blockPosition]}>
        <Text style={[styles.houses2, styles.houses2Typo]}>Houses</Text>
        <View style={[styles.oneMissionBay, styles.steinerStPosition]}>
          <Image
            style={[styles.housePhotoIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/1-house-photo.png")}
          />
          <Image
            style={[styles.objectIcon4, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object4.png")}
          />
          <Text style={[styles.oneMissionBay1, styles.timePosition]}>
            One Mission Bay
          </Text>
          <Text style={[styles.sanFrancisco, styles.sanTypo]}>
            San Francisco, CA
          </Text>
        </View>
        <View style={[styles.steinerSt, styles.marketStPosition]}>
          <Text style={[styles.sanFrancisco, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.oneMissionBay1, styles.timePosition]}>
            1410 Steiner St
          </Text>
          <Image
            style={[styles.housePhotoIcon, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/2-house-photo.png")}
          />
          <Image
            style={[styles.objectIcon4, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object5.png")}
          />
        </View>
        <View style={[styles.sussexSt, styles.sussexStPosition]}>
          <Text style={[styles.sanFrancisco2, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.sussexSt1, styles.timePosition]}>
            246 Sussex St
          </Text>
          <Image
            style={[styles.housePhotoIcon2, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/3-house-photo.png")}
          />
          <Image
            style={[styles.objectIcon6, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object6.png")}
          />
        </View>
        <View style={[styles.marketSt, styles.sussexStPosition]}>
          <Text style={[styles.sanFrancisco2, styles.sanTypo]}>
            San Francisco, CA
          </Text>
          <Text style={[styles.sussexSt1, styles.timePosition]}>
            1206 Market St
          </Text>
          <Image
            style={[styles.housePhotoIcon2, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/4-house-photo.png")}
          />
          <Image
            style={[styles.objectIcon6, styles.objectIconLayout]}
            resizeMode="cover"
            source={require("../assets/object7.png")}
          />
        </View>
      </View>
      <View style={[styles.logOut1, styles.barPosition]}>
        <View style={[styles.rectangle4, styles.rectanglePosition]} />
        <View style={[styles.rectangle5, styles.rectanglePosition]} />
        <Image
          style={[styles.powerButtonIcon, styles.objectIconLayout]}
          resizeMode="cover"
          source={require("../assets/powerbutton.png")}
        />
        <Text style={[styles.logOut2, styles.timePosition]}>LOG OUT</Text>
      </View>
      <View style={[styles.homeIndicator, styles.rectangle2ShadowBox]}>
        <View style={styles.shape} />
      </View>
      <View style={[styles.statusBarWhite, styles.barPosition]}>
        <Image
          style={styles.barsstatusBardarkConnectIcon}
          resizeMode="cover"
          source={require("../assets/barsstatus-bardark-connections.png")}
        />
        <View style={[styles.barsstatusBardarkTime, styles.collectionsLayout]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logLayout: {
    height: 812,
    overflow: "hidden",
  },
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  objectIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  objectIconPosition1: {
    bottom: "-117.39%",
    height: "217.39%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle2ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 375,
    left: 0,
    position: "absolute",
  },
  home1Layout: {
    height: 42,
    top: 10,
    overflow: "hidden",
  },
  objectIconPosition: {
    bottom: "-138.1%",
    height: "238.1%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  home2Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  collectionsLayout: {
    width: 56,
    position: "absolute",
  },
  icons8Position: {
    bottom: "40.48%",
    height: "59.52%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blockPosition: {
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  housesPosition: {
    top: "26.99%",
    height: "73.01%",
    width: "30.75%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleBorder: {
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_6xs,
    bottom: "0%",
    left: "0%",
    right: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  houses1Typo: {
    fontSize: FontSize.size_base,
    left: "8.4%",
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  houses2Typo: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslategray,
    left: "0%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  steinerStPosition: {
    bottom: "47.99%",
    top: "9.46%",
    height: "42.55%",
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  sanTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray,
    left: "0%",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  marketStPosition: {
    left: "53.35%",
    width: "46.65%",
    right: "0%",
  },
  sussexStPosition: {
    top: "57.21%",
    height: "42.79%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    borderColor: "#979797",
    borderWidth: 1,
    borderStyle: "solid",
    width: 375,
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  rectangle1: {
    height: 716,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  home: {
    marginTop: -17,
    width: "12.27%",
    left: "44%",
    fontSize: 17,
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  headerChild: {
    height: "2.17%",
    top: "77.17%",
    bottom: "20.65%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  profilePictureIcon: {
    width: "14.93%",
    right: "82.93%",
    left: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  objectIcon: {
    width: "96.8%",
    right: "3.2%",
  },
  objectIcon1: {
    width: "88.8%",
    right: "11.2%",
  },
  header: {
    top: 51,
    height: 46,
    overflow: "hidden",
  },
  rectangle2: {
    shadowColor: "#4a4a4a",
    height: 96,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  objectIcon2: {
    width: "322.58%",
    right: "-222.58%",
  },
  home2: {
    left: "1.61%",
    color: "#20c065",
    fontSize: FontSize.size_2xs,
    marginTop: 8,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  home1: {
    left: 29,
    width: 31,
    position: "absolute",
  },
  collections1: {
    opacity: 0.5,
    fontSize: FontSize.size_2xs,
    marginTop: 8,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
    left: "0%",
    color: Color.colorBlack,
  },
  objectIcon3: {
    width: "178.57%",
    right: "-78.57%",
  },
  collections: {
    left: 113,
    height: 42,
    top: 10,
    overflow: "hidden",
  },
  icons8HeartOutline500: {
    width: "83.33%",
    right: "16.67%",
    opacity: 0.5,
    left: "0%",
  },
  saved: {
    left: 227,
    width: 30,
    position: "absolute",
  },
  search1: {
    left: "1.39%",
    opacity: 0.5,
    fontSize: FontSize.size_2xs,
    marginTop: 8,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.colorBlack,
  },
  icons8Search500: {
    width: "69.44%",
    right: "13.89%",
    left: "16.67%",
    opacity: 0.54,
  },
  search: {
    left: 314,
    width: 36,
    position: "absolute",
  },
  tabBar: {
    top: 716,
    height: 96,
  },
  rectangle3: {
    top: "0%",
    height: "100%",
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_6xs,
  },
  houses1: {
    marginTop: 15.5,
    color: Color.colorDarkslategray,
  },
  houseImageIcon: {
    height: "50.42%",
    bottom: "49.58%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  houses: {
    right: "69.25%",
    left: "0%",
  },
  apartments: {
    right: "34.63%",
    left: "34.63%",
  },
  rectangleCopy3: {
    height: "91.54%",
    top: "8.46%",
  },
  condos1: {
    marginTop: 21,
    color: Color.colorDarkslategray,
  },
  condosImageIcon: {
    height: "54.62%",
    width: "77.31%",
    right: "22.69%",
    bottom: "45.38%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  condos: {
    height: "79.75%",
    top: "20.25%",
    left: "69.25%",
    width: "30.75%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  categories: {
    marginTop: -81.5,
  },
  categoriesBlock: {
    top: 105,
    width: 387,
    height: 163,
  },
  houses2: {
    marginTop: -211.5,
  },
  housePhotoIcon: {
    height: "75%",
    bottom: "25%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  objectIcon4: {
    height: "55.56%",
    bottom: "44.44%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  oneMissionBay1: {
    marginTop: 50,
    color: Color.colorDarkslategray,
    left: "0%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  sanFrancisco: {
    marginTop: 76,
  },
  oneMissionBay: {
    right: "53.64%",
    width: "46.36%",
    left: "0%",
  },
  steinerSt: {
    bottom: "47.99%",
    top: "9.46%",
    height: "42.55%",
    position: "absolute",
    overflow: "hidden",
  },
  sanFrancisco2: {
    marginTop: 76.5,
  },
  sussexSt1: {
    marginTop: 50.5,
    color: Color.colorDarkslategray,
    left: "0%",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  housePhotoIcon2: {
    height: "73.48%",
    bottom: "26.52%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  objectIcon6: {
    height: "55.25%",
    bottom: "44.75%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  sussexSt: {
    right: "53.64%",
    width: "46.36%",
    left: "0%",
  },
  marketSt: {
    left: "53.35%",
    width: "46.65%",
    right: "0%",
  },
  housesBlock: {
    top: 287,
    width: 343,
    height: 423,
  },
  rectangle4: {
    width: "49.87%",
    left: "50.13%",
    backgroundColor: Color.colorDarkslategray,
    opacity: 0.7,
    right: "0%",
  },
  rectangle5: {
    width: "50.13%",
    right: "49.87%",
    left: "0%",
    backgroundColor: Color.colorWhite,
  },
  powerButtonIcon: {
    height: "3.69%",
    width: "8%",
    top: "48.15%",
    right: "87.47%",
    bottom: "48.15%",
    left: "4.53%",
    position: "absolute",
  },
  logOut2: {
    marginTop: -8,
    left: "14.67%",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  logOut1: {
    top: 0,
    overflow: "hidden",
    height: 812,
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
    height: 34,
    opacity: 0.77,
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
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    fontSize: FontSize.size_mini,
  },
  barsstatusBardarkTime: {
    top: 8,
    left: 21,
    height: 23,
  },
  statusBarWhite: {
    height: 44,
    top: 0,
  },
  logOut: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LogOut;
