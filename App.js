/* eslint-disable react/react-in-jsx-scope */
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.topContainer}>
        <Text>search</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
