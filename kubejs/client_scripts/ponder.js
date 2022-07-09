// Contains all ponders

// 20 ticks = 1 second

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

console.info('PONDER (2)');

onEvent('ponder.tag', (event)=> {
    // Experimenting with enchantment table
    console.info('PONDER (1)');
    event.createTag("kubejs:vanilla_minecraft", "minecraft:grass_block", "Vanilla blocks", "Tutorial on using vanilla blocks", ["minecraft:enchanting_table"]);
});

onEvent("ponder.registry", (event)=>{
    event
        .create("minecraft:enchanting_table")
        .scene(
            "enchanting_table",
            "Enchanting table usage",
            (scene, util) => {
                scene.showBasePlate();
                scene.idle(10);

                const centerBlockPos = util.grid.at(2, 0, 2);
                const centerTop = util.vector.topOf(centerBlockPos);

                //scene.world.setBlock(centerTop, "minecraft:enchanting_table", true);

                fadeInBlock(scene, util, centerTop, "minecraft:enchanting_table");

                scene
                    .text(stt(4), "Enchanting tables can enchant books, armor, weapons, and much more.", centerBlockPos.above(2))
                    .colored(PonderPalette.WHITE)
                    .placeNearTarget()
                    .attachKeyFrame();
                
                scene
                    .showControls(stt(3), centerBlockPos.above(2), "down")
                    .leftClick()
                    .withItem("book")
                    .withItem("diamond_armor")
                    .withItem("iron_shovel");

                scene.idle(stt(5));

                scene
                    .text(stt(4), "Adding enchanting tables within a 2 block radius of the table can increase the level of enchantments you could get", centerBlockPos.above(2))
                    .colored(PonderPalette.WHITE)
                    .placeNearTarget()
                    .attachKeyFrame();

                // Book shelves
                /*
                for (let z = 1; z < 5; z++) {
                    fadeInBlock(scene, util, [0, 1, z], "minecraft:bookshelf", true, 3);
                };
                for (let z = 1; z < 5; z++) {
                    fadeInBlock(scene, util, [5, 1, z], "minecraft:bookshelf", true, 3);
                };
                */

                scene.idle(stt(5));
            }
        );
});

