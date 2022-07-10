class Block {
    constructor(scene, util, blockId, location) {
        scene.world.setBlocks(location, blockId);
    }
}