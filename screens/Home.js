import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColors = useCallback(async () => {
    const result = await fetch(
      "https://color-palette-api.kadikraman.now.sh/palettes"
    );

    if (result.ok) {
      const colorPalettes = await result.json();
      setColorPalettes(colorPalettes);
    }
  }, []);

  useEffect(() => {
    getColors();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColors();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const customColorPalette = route?.params?.newPalette;

  useEffect(() => {
    if (customColorPalette) {
      setColorPalettes((colorPalettes) => [
        customColorPalette,
        ...colorPalettes,
      ]);
    }
  }, [customColorPalette]);

  return (
    <View style={{ margin: 10 }}>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            colorPalette={item}
            handlePress={() => navigation.navigate("Color Palette", item)}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate("ColorPaletteModal")}
          >
            <Text style={[styles.text, styles.modalButton]}>
              Add a color palette
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

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
  modalButton: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Home;
