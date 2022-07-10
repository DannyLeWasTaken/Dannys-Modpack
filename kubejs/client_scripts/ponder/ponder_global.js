class Block {
    /**
     * 
     * @param {scene} scene 
     * @param {util} util 
     * @param {string} blockId 
     * @param {Vector3} location 
     */
    constructor(scene, util, blockId, location) {
        scene.world.setBlocks(location, blockId);
    }
}