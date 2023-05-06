import { Canvas, Group, ImageShader, Vertices, vec, useImage, Text, useFont } from "@shopify/react-native-skia";
import { Dimensions } from 'react-native';


export default function ConditionalComponent(props) {

  const y = props.position.positionConditional.y + 166
  const yText = props.position.positionConditional.y + 110
  const vertices = [vec(64, props.position.positionConditional.y), vec(168, y), vec(-40, y)];
  
  const overallWidth = Dimensions.get('window').width;

  const fontSize = 32;
  const font = useFont(require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), fontSize);
  if (font === null) {
    return null;
  }

  return (

    <Group>
      <Group transform={[{ translateX: 128 }]}>
        <Vertices vertices={vertices} color={"#252CDE"} />
      </Group>

      <Text
        x={((overallWidth / 2) - 18)}
        y={yText}
        text="Se"
        font={font}
        color={"black"}
      />

    </Group>



  );
};