import * as React from "react";
import { StyleSheet, Text, ScrollView, Platform } from "react-native";
import {  TextInput } from "react-native-gesture-handler";
// const Hello = React.lazy(() => import("./"))

export default function App() {
  const [sec, setSec] = React.useState(0)
  const r = React.useRef();

  React.useEffect(() => {
    console.log("REF:: ", r);
    console.log("hello")

  }, []);

  return (
    <ScrollView style={styles.container}> 
      <TextInput style={styles.input} />
      <Text ref={r}>seconds:: {console.log("platform ", Platform.Version)}</Text>
      <React.Suspense fallback={<Text>loading...</Text>}>

      </React.Suspense>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
