import aframe from 'aframe';

let camera,ascene,scene,renderer

const init = () => {
  ascene = document.createElement('a-scene')
  document.body.appendChild(ascene)
  camera = ascene.camera
  renderer = ascene.renderer
  scene = ascene.object3D

  let cubeGeom = new THREE.BoxGeometry( 1, 1, 1 )
  let cubeMat = new THREE.MeshBasicMaterial( { color: "#433F81" } )
  let cube = new THREE.Mesh( cubeGeom, cubeMat )
  cube.position.set(-1, 0.5, -3)
  scene.add(cube)
}

init()