import { Dimensions } from 'react-native';
import { Canvas, RoundedRect, LinearGradient, vec, Circle, Group, Text, useFont, TextPath, Skia, Blur } from '@shopify/react-native-skia';

export default function FinalComponent(props) {

  const fontSize = 30;
  const font = useFont(require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), fontSize);
  if (font === null) {
    return null;
  }

  const overallWidth = Dimensions.get('window').width;

  return (
    <Canvas style={{ flex: 1 }}>

      <RoundedRect
        x={((overallWidth / 2) - 100)}
        y={50}
        width={200}
        height={70}
        r={80}
        color="#38B6FF"
      >

      </ RoundedRect>

      <Text
        x={((overallWidth / 2) - 25)}
        y={95}
        text="Fim"
        font={font}
        color={"black"}
      />

    </Canvas>
  );
};