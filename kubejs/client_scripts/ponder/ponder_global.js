/**
 * 
 * @param {int} second The amount of seconds
 * @returns int Returns seconds converted to ticks
 */
 function stt(second) {
    return second * 20;
};

/**
 * Fades in blocks
 * @param {*} scene 
 * @param {*} util 
 * @param {Vector3} location 
 * @param {string} blockName 
 * @param {float} wait 
 * @param {float} waitTime 
 */
function fadeInBlock(scene, util, location, blockName, wait, waitTime) {
    wait = wait ?? true;
    waitTime = waitTime ?? 15;
    const topLocation = util.vector.topOf(location); 
    scene.world.setBlocks(location, blockName);
    let link = scene.world.showSection(location, Facing.DOWN);
    //scene.world.replaceBlocks(topLocation, "minecraft:air", true);
    //scene.world.moveSection(link, [0, -1, 0], 0);
    scene.idle(waitTime);
};
