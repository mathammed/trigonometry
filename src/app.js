import * as THREE from "three"

function setup() {

	// Major components

	const scene = new THREE.Scene()
	scene.background = new THREE.Color( 0x050505 )

	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 100 )
	camera.up = new THREE.Vector3( 0, 1, 1 )
	camera.position.set( 0, 0, 12 )
	camera.lookAt( 0, 0, 0 )
	camera.updateProjectionMatrix()

	const renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true, } )
	renderer.setSize( window.innerWidth, window.innerHeight )
	renderer.setPixelRatio( window.devicePixelRatio )

	document.body.appendChild( renderer.domElement )

	// Helpers

	{
		const helper = new THREE.GridHelper( 8, 8, 0x808080, 0x404040 )
		helper.rotateX( - Math.PI / 2 )
		scene.add( helper )
	}

	// Responsive

	window.addEventListener( "resize", () => {

		renderer.setSize( window.innerWidth, window.innerHeight )
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()

	} )

	// Render

	renderer.setAnimationLoop( () => renderer.render( scene, camera ) )

	return {
		scene,
	}
}

function drawPoints( vertices, color ) {

	const geometry = new THREE.BufferGeometry()
	geometry.setAttribute( "position", new THREE.Float32BufferAttribute( vertices, 3 ) )

	const material = new THREE.PointsMaterial( { size: 0.25, color, } )

	return new THREE.Points( geometry, material )
}

function drawLine( vertices, color ) {

	const geometry = new THREE.BufferGeometry()
	geometry.setAttribute( "position", new THREE.Float32BufferAttribute( vertices, 3 ) )

	const material = new THREE.LineBasicMaterial( { color, } )

	return new THREE.Line( geometry, material )
}

export {
	setup,
	drawPoints,
	drawLine,
}
