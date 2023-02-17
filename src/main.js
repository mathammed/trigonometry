import * as App from "./app"

const { scene } = App.setup()

const vertices = []

const degree = Math.PI / 180

const max = 45 // 45°

for ( let d = 1; d <= 45; d++ ) {

	vertices.push( Math.cos( d * degree ), Math.sin( d * degree ), 0 )
}

scene.add( App.drawPoints( vertices, 0xffffff ) )

scene.add( App.drawLine( vertices, 0xffff00 ) ) // Line helper
