import { Dimensions } from 'react-native';
import { Canvas, vec, Text, useFont, Points, Path, Skia, Group } from '@shopify/react-native-skia';

export default function LoopComponent(props) {

    const colorText = "Black"
    const fontSize = 18;
    const font = useFont(require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), fontSize);
    if (font === null) {
        return null;
    }

    const overallWidth = Dimensions.get('window').width;

    //   const path = Skia.Path.Make();
    // path.moveTo(128, 0);
    // path.lineTo(168, 80);
    // path.lineTo(256, 93);
    // path.lineTo(192, 155);
    // path.lineTo(207, 244);
    // path.lineTo(128, 202);
    // path.lineTo(49, 244);
    // path.lineTo(64, 155);
    // path.lineTo(0, 93);
    // path.lineTo(88, 80);
    // path.lineTo(128, 0);
    // path.close();


    const path = Skia.Path.Make();
    const centerX = overallWidth / 2;
    const centerY = props.position.positionLoop.y;
    const radius = 80;
    const angleStep = 60; // ângulo entre cada vértice do hexágono
    const startAngle = 30; // ângulo inicial do primeiro vértice
    const degreesToRadians = Math.PI / 180;

    // calcula as coordenadas dos vértices do hexágono
    for (let i = 0; i < 6; i++) {
        const angle = startAngle + angleStep * i;
        const x = centerX + radius * Math.cos(angle * degreesToRadians);
        const y = centerY + radius * Math.sin(angle * degreesToRadians);
        if (i === 0) {
            path.moveTo(x, y);
        } else {
            path.lineTo(x, y);
        }
    }
    path.close();


//TODO FAZER UMA VERIFICAÇÃO PARA SABER SE O TEXT É ESSE OU O QUE SÓ ESTA ESCRITO "FOR"
    return (

        // <Canvas style={{ flex: 1 }}>
            <Group
                width={100}
                color="pink"
            >
                <Path
                    path={path}
                    color="red"
                />


                <Text
                    x={((overallWidth / 2) - 65)}
                    y={props.position.positionLoop.y - 20}
                    text={"Repita enquanto"}
                    font={font}
                    color={colorText}
                    width={50}
                />

                <Text
                    x={((overallWidth / 2) - 30)}
                    y={props.position.positionLoop.y + 10}
                    text={"... for ..."}
                    font={font}
                    color={colorText}
                    width={50}
                />

                <Text
                    x={((overallWidth / 2) - 30)}
                    y={props.position.positionLoop.y + 40}
                    text={"que ..."}
                    font={font}
                    color={colorText}
                    width={50}
                />

            </Group>
        // </Canvas>

    );
};

