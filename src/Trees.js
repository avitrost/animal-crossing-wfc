
import { Scatter } from './Scatter';

import useTree from './models/Tree.js';

import { scale1_1, lightPlus50pct } from "./transforms";

export const Trees = (props) => {

  const {geometries, materials} = useTree();

  console.log(geometries);
  console.log(materials);
  return <Scatter
		   scale={scale1_1}
		   color={lightPlus50pct}
		   position={props.position}
		   material={materials}
		   geometry={props.geometry}
		   childGeometry={geometries}
		   density={1}>
		 </Scatter>

};
