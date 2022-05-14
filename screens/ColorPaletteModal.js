import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../colors.js";

import ColorPicker from "../components/ColorPicker.js";

const ColorPaletteModal = ({ navigation }) => {
  const [customColorPaletteName, setCustomColorPaletteName] = useState("");

  const [customColorPalette, setCustomColorPalette] = useState([]);

  const addColorPalette = useCallback(() => {
    if (!customColorPaletteName) {
      Alert.alert("We need a name", "Please enter a name for your palette.");
    } else if (customColorPalette.length < 3) {
      Alert.alert(
        "We need more colors!",
        "A palette must have at least 3 colors."
      );
    } else {
      const newPalette = {
        paletteName: customColorPaletteName,
        colors: customColorPalette,
      };
      navigation.navigate("Home", { newPalette });
    }
  });

  const handleSelection = (selection) => {
    const isSelected = !!customColorPalette.find(
      (color) => color.colorName === selection.colorName
    );

    if (isSelected) {
      setCustomColorPalette(
        customColorPalette.filter(
          (color) => color.colorName !== selection.colorName
        )
      );
    } else {
      setCustomColorPalette([...customColorPalette, selection]);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.text}>Name of your color palette</Text>
      <TextInput
        style={[styles.input]}
        onChangeText={(text) => setCustomColorPaletteName(text)}
      />

      <TouchableOpacity style={styles.button} onPress={addColorPalette}>
        <Text>Create Palette</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item, i) => i}
        ItemSeparatorComponent={() => (
          <View style={{ borderWidth: 1, marginVertical: 20 }} />
        )}
        renderItem={({ item }) => (
          <ColorPicker {...item} handleSelection={handleSelection} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 100,
  },
  input: {
    height: 40,
    fontSize: 20,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  separator: {
    borderWidth: 1,
  },
  colorSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  colorBox: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    margin: 10,
    borderRadius: 7,
  },
});

export default ColorPaletteModal;
