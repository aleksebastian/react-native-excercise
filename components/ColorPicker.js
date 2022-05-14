import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const ColorPicker = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const color = {
    colorName: props.colorName,
    hexCode: props.hexCode,
  };

  const handleChange = () => {
    setIsSelected((isSelected) => !isSelected);
    props.handleSelection(color);
  };

  return (
    <View style={styles.colorSelectorContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.colorBox,
            { backgroundColor: props.hexCode, marginRight: 15 },
          ]}
        ></View>
        <Text style={[styles.text]}>{props.colorName}</Text>
      </View>

      <Switch value={isSelected} onValueChange={handleChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  input: {
    height: 40,
    fontSize: 20,
    borderColor: "black",
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
});

export default ColorPicker;
