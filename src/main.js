import * as App from "./app"

const { scene } = App.setup()

const vertices = []

for ( let x = -2; x <= 2; x += 1 ) {

	if ( x < 0 ) {

		// LEFT from ORIGIN

		vertices.push( x, -1, 0 ) // x, y, z
	}
	else if ( x > 0 ) {

		// RIGHT from ORIGIN

		vertices.push( x, 1, 0 ) // x, y, z
	}
	else {

		// CENTER

		vertices.push( 0, 0, 0 ) // x, y, z
	}
}

scene.add( App.drawPoints( vertices, 0xffffff ) )

scene.add( App.drawLine( vertices, 0xffff00 ) ) // Line helper
