import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export default function useGrass() {
  const { nodes, materials } = useGLTF('assets/grass.glb')
  const { nodes1, materials1 } = useGLTF('assets/flower.glb')

  // const flower_geometries = useMemo( () => [ nodes1.petal001.geometry, nodes1.stem.geometry ], [ nodes1 ]);
  // const flower_materials = useMemo( () => [ materials1.flower, materials1.top ], [ materials1 ] );
  return useMemo( () => ({
    // flower_geometries,
    // flower_materials
	geometries: [ nodes.grass.geometry, nodes.grass001.geometry, nodes.grass002.geometry ] ,
	materials: [ materials.grass,materials.grass,materials.grass ],
  }), [nodes, materials]);
}

useGLTF.preload('assets/grass.glb')
