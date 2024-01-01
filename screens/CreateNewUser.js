import React from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebase.config";

const CreateNewUser = ({ navigation }) => {
  const defaultURL = "https://i.pravatar.cc/150?img=3";

  const [textName, onChangeNameText] = React.useState("");
  const [textMail, onChangeMailText] = React.useState("");
  const [textPhone, onChangePhoneText] = React.useState("");
  const [textURL, onChangeURLText] = React.useState(defaultURL);

  async function AddUser() {
    // Add a new document with a generated id.
    await addDoc(collection(db, "users"), {
      name: textName,
      mail: textMail,
      phone: textPhone,
      pictureURL: textURL,
    })
      .then(() => {
        navigation.navigate("Users List");
        alert("User  Added succesfully Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function ButtonSave() {
    if (textName.length == 0 || textMail.length == 0 || textPhone.length == 0) {
      alert("The fields Name, Mail and Phone are required");
      return;
    }
    AddUser();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textfield}
        onChangeText={onChangeNameText}
        value={textName}
        placeholder="Name User"
      />
      <TextInput
        style={styles.textfield}
        onChangeText={onChangeMailText}
        value={textMail}
        placeholder="E-Mail User"
      />
      <TextInput
        style={styles.textfield}
        onChangeText={onChangePhoneText}
        value={textPhone}
        placeholder="Phone Number"
      />
      <Pressable style={styles.buttonSave} onPress={() => ButtonSave()}>
        <Text style={styles.textButton}>SAVE NEW USER</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textfield: {
    marginBottom: 10,
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonSave: {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#1ecfea",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CreateNewUser;
