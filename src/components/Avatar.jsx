import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/ogu.glb");
  const { animations: typing } = useFBX("animations/typing.fbx");

  typing[0].name = "typing";

  const { actions } = useAnimations([typing[0]], group);

  var positionY = -0.122;
  var positionZ = 0.05;

  useEffect(() => {
    actions["typing"].play();
  }, []);

  useFrame((state) => {
    const cameraPosition = group.current
      .getObjectByName("Head")
      .position.clone();
    const target = cameraPosition
      .clone()
      .add(
        cameraPosition
          .clone()
          .sub(new THREE.Vector3(-state.mouse.x + 0, -state.mouse.y + 0.5, 1.5))
      );
    group.current.getObjectByName("Head").lookAt(target);
  });
  return (
    <group {...props} ref={group} dispose={null}>
      <group
        position={[-0.02, positionY, positionZ]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.122}
      >
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials["Wolf3D_Eye.005"]}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials["Wolf3D_Eye.005"]}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials["Wolf3D_Body.005"]}
          skeleton={nodes.Wolf3D_Body.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials["Wolf3D_Hair.005"]}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials["Wolf3D_Skin.005"]}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials["Wolf3D_Outfit_Bottom.005"]}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials["Wolf3D_Outfit_Footwear.005"]}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials["Wolf3D_Outfit_Top.005"]}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials["Wolf3D_Teeth.005"]}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <primitive object={nodes.Hips} />
      </group>
    </group>
  );
}

useGLTF.preload("models/ogu.glb");
