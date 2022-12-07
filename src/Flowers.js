
import { Scatter } from './Scatter';

import useFlower from './models/Flower.js';

import { rotateX15Y360, scale_flower, light25pct, hue25pct } from "./transforms";

export const Flowers = (props) => {

  const { geometries, materials } = useFlower();

  return <Scatter
		   color={hue25pct}
		   position={props.position}
		   geometry={props.geometry}
		   material={materials}
		   rotate={rotateX15Y360}
		   scale={scale_flower}
		   childGeometry={geometries}
		   density={50}>
		 </Scatter>

};
