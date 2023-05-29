import { Dimensions } from 'react-native';
import { Canvas, RoundedRect, LinearGradient, vec, Circle, Group, Text, useFont, TextPath, Skia, Blur } from '@shopify/react-native-skia';

export default function PaintComponent(props) {

console.log("Paint controller  -= " + props.x)

  const yText =  55;

  

  const fontSize = 32;
  const font = useFont(require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), fontSize);
  if (font === null) {
    return null;
  }

  const overallWidth = Dimensions.get('window').width;

  return (
    <>
      <RoundedRect
        x={props.position.positionPaint.x}
        y={props.position.positionPaint.y}
        

        width={200}
        height={90}
        r={25}
        color="#DEB938"
      />
      <Text
        x={((overallWidth / 2) - 70)}
        y={yText}
        text="Pinte(X,Y)"
        font={font}
        color={"black"}
      />
    </>
  );
};
