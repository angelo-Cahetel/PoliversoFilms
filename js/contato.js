// import*as e from"three";import{GLTFLoader as t}from"three/examples/jsm/loaders/GLTFLoader";let scene=new e.Scene,camera=new e.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,5e3);camera.position.z=8,camera.position.y=2;let renderer=new e.WebGLRenderer({alpha:!0}),initialWidth=800,initialHeight=800;renderer.setSize(800,800),document.getElementById("3Dcontato").appendChild(renderer.domElement);let loader=new t,object;loader.load("./3d/plvrChair.glb",function(e){object=e.scene,scene.add(object)},void 0,function(e){console.error(e)});let topLight=new e.DirectionalLight(16777215,2);topLight.position.set(500,500,500),topLight.castShadow=!0,scene.add(topLight);let ambientLight=new e.AmbientLight(3355443,1);function animate(){requestAnimationFrame(animate),object&&(object.rotation.y+=.008),renderer.render(scene,camera)}scene.add(ambientLight),window.addEventListener("resize",function(){let e=window.innerWidth,t=window.innerHeight;camera.aspect=e/t,camera.updateProjectionMatrix(),renderer.setSize(e,t)}),loader.load("./3d/plvrChair.glb",function(){animate()},void 0,function(e){console.error(e)});