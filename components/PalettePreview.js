import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PalettePreview = ({ colorPalette, handlePress }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.text}>{colorPalette.paletteName}</Text>
    <FlatList
      style={styles.container}
      data={colorPalette.colors.slice(0, 5)}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <View
          style={[
            styles.colorSquare,
            {
              backgroundColor: item.hexCode,
            },
          ]}
        ></View>
      )}
    />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    flexDirection: "row",
    margin: 10,
  },
  colorSquare: {
    height: 30,
    width: 30,
    margin: 3,
  },
});

export default PalettePreview;
