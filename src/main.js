import * as App from "./app"

const { scene } = App.setup()

scene.add( App.drawPoints( [ -2, 0, 0 ], 0xff0000 ) )
scene.add( App.drawPoints( [ 0, 0, 0 ], 0x00ff00 ) )
scene.add( App.drawPoints( [ 2, 0, 0 ], 0x0000ff ) )
