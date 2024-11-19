

export default class TiledMapScene extends Phaser.Scene {
    constructor() {
        super("SceneMain");
    }
    preload() {
      this.load.image("tiles", "src/assets/lab_quest_level_one.png")
    }
    create() {       
     
    //TODO: move to config file or something 
    var DEFAULT_GRID_VALUE  = 1; // by default
    var GRID_SIZE=20;
    var grid = [...Array(GRID_SIZE)].map(e => Array(GRID_SIZE).fill(DEFAULT_GRID_VALUE));

    //TODO: move to function
    //TODO: add a percent obstacles to the map
    for (var y = 0; y < GRID_SIZE; y++)
    {
        for (var x = 0; x < GRID_SIZE; x++)
        {
            grid[x][y] =  Phaser.Math.Between(0, GRID_SIZE)
        }
    }

    //TODO: move constants to config
    const map = this.make.tilemap({data: grid, tileWidth: 20, tileHeight: 20});
    map.addTilesetImage("tiles");
    const layer = map.createLayer(0, "tiles", 0, 0);

    }
    update() {

    }
}