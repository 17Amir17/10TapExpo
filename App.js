import { useEditorBridge, RichText, Toolbar } from "@10play/tentap-editor";
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";

export default function App() {
  return <Basic />;
}
export const Basic = () => {
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent: "Start editing!",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RichText editor={editor} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
