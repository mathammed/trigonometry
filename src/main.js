import * as App from "./app"

const { scene } = App.setup()

const vertices = []

for ( let x = -2; x <= 2; x += 0.1 ) {

	vertices.push( x, 0, 0 ) // x, y, z
}

scene.add( App.drawPoints( vertices, 0x0000ff ) )
