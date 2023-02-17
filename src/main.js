import * as App from "./app"

const { scene } = App.setup()

const vertices = []

for ( let x = -2; x <= 2; x += 0.5 ) {

	vertices.push( x, 0, 0 ) // x, y, z
}

scene.add( App.drawPoints( vertices, 0xffffff ) )

scene.add( App.drawLine( vertices, 0xffff00 ) ) // Line helper
