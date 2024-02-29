import { ScrollView, Text, View } from "react-native";
import styles from "../config/styles";

// export default function já declara a exportação do
// componente para ser usado posteriormente
export default function HomeScreen() {
  // Estrutura básica de um componente
  // precisa ter um retorno
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </ScrollView>
    </View>
  );
}
