import * as App from "./app"

const { scene } = App.setup()

const vertices = [
//	x,	y,	z
	-2,	0,	0,	// point 1
	0,	0,	0,	// point 2
	2,	0,	0,	// point 3
]

scene.add( App.drawPoints( vertices, 0x0000ff ) ) // all points are blue
