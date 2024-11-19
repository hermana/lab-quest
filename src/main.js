import Phaser from 'phaser'
import TiledMapScene from './TiledMapScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 400,
	height: 400,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	//scene: [HelloWorldScene],
	//scene: [MapScene]
	scene: [TiledMapScene]
}

export default new Phaser.Game(config)
