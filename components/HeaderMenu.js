import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderMenu=(props)=>{

    return (
      <View style={[styles.root, props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon name="menu" style={styles.leftIcon} onPress={()=>{alert('menu')}}/>
        </TouchableOpacity>
        <View style={styles.leftIconButtonFiller} />
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(38,98,128,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  leftIconButtonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  }
});
export default HeaderMenu;