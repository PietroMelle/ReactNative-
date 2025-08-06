import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CardExpansivel() {

  const [expandido, setExpandido] = useState(false);

  function alternar() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setExpandido(!expandido);
  }

  return (
    <TouchableOpacity onPress={alternar} style={{ margin: 20 }}>

      <View
        style={{
          backgroundColor: "#264653",
          padding: 20,
          borderRadius: 12,
          minHeight: 60,
          minWidth: 200,
          justifyContent: "center",
        }}
      >
        
        <Text style={{ color: "#fff", fontSize: 18 }}>
          Toque pra {expandido ? "recolher" : "expandir"}
        </Text>

        {expandido && (
          <Text style={{ color: "#b5ead7", marginTop: 10 }}>
            Conteúdo secreto revelado com animação!
          </Text>
        )}

      </View>
      
    </TouchableOpacity>
  );
}
