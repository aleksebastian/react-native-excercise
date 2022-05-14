import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params;

  const addColorPalette = () => {
    if (colorPaletteName.length && customColorPalette.length > 2) {
      colors.push({
        paletteName: colorPaletteName,
        colors: customColorPalette,
      });
    }
  };
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ColorPalette;
