import {Canvas, Circle, Group, Rect, Points, vec} from "@shopify/react-native-skia";

export default function ConnectionLine ()  {
  const points = [
    vec(180, 100),
    vec(180, 400),
    vec(200, 400),
    vec(200, 500),
  ];
  return (
    <Canvas style={{ flex: 1 }}>
      <Points
        points={points}
        mode="polygon"
        color="lightblue"
        style="stroke"
        strokeWidth={4}
      />
    </Canvas>
  );
};