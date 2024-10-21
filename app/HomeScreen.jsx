import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateMyString } from "./redux/slice";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const myVar = useSelector((state) => state.slice.myString);
  const handleChange = (text) => {
    dispatch(updateMyString(text));
  };
  return (
    <View style={styles.container}>
      <Text>Here is the value of the variable in redux:</Text>
      <Text style={styles.text}>{myVar}</Text>
      <TextInput
        style={styles.input}
        placeholder="Write here"
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 40,
		marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    height: 40,
    width: 300,
  },
});
