import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from "react-native";

const CasaScreen=()=> {

  return (
    <View style={styles.container}>
        <View style={styles.image4Stack}>
          <Image
            source={require("../assets/images/background.png")}
            resizeMode="contain"
            style={styles.image4}
          />
          <ImageBackground
            source={require("../assets/images/digital-catalog-logo.png")}
            resizeMode="contain"
            style={styles.image2}
          >
            <Image
              source={require("../assets/images/powerbycatalogos_logo.png")}
              resizeMode="contain"
              style={styles.image3}
            />
          </ImageBackground>
        </View>
      </View>

    );
}

CasaScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image4: {
    top: 0,
    left: 48,
    width: 387,
    height: 827,
    position: "absolute"
  },
  image2: {
    top: 149,
    left: 0,
    width: 496,
    height: 469,
    position: "absolute"
  },
  image3: {
    width: 200,
    height: 44,
    marginTop: 345,
    marginLeft: 147
  },
  image4Stack: {
    width: 496,
    height: 827,
    marginTop: -10,
    marginLeft: -60
  }
});
export default CasaScreen;