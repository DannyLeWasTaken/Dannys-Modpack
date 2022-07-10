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
        this.Position = location;
        this.Id = blockId;
    }
    FadeIn(scene, util, facingDirection, wait) {
        scene.world.showSection(this.Position, facingDirection);
        if (wait) scene.idle(wait);
    }
    FadeOut(scene, util, facingDirection, wait) {
        scene.world.hideSection(this.Position, facingDirection);
        if (wait) scene.idle(wait);
    }
    FadeInDown(scene, util, wait) {
        this.FadeIn(scene, util, Facing.Down);
    }
    FadeOutUp(scene, util, wait) {
        this.FadeOut(scene, util, Facing.UP);
    }
    FadeOutDown(scene, util, wait) {
        this.FadeOut(scene, util, Facing.DOWN);
    }
    
}