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

onEvent('ponder.tag', (event)=> {
    // Experimenting with enchantment table
    event.createTag("kubejs:vanilla_minecraft", "minecraft:grass_block", "Vanilla blocks", "Tutorial on using vanilla blocks", ["minecraft:enchanting_table"]);
});

onEvent("ponder.registry", (event)=>{
    event
        .create("minecraft:enchanting_table")
        .scene(
            "enchanting_table",
            "Enchanting table usage",
            (scene, util) => {
                scene.showStructure();
                scene.idle(10);

                const centerBlockPos = util.grid.at(2, 0, 2);
                const centerTop = util.vector.topOf(centerBlockPos);

                scene.world.setBlock(centerTop, "minecraft:enchanting_table", true);
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

                scene.idle(stt(3));

                scene
                    .text(stt(4), "Adding enchanting tables within a 2 block radius of the table can increase the level of enchantments you could get", fbl)
                    .colored(PonderPalette.WHITE)
                    .placeNearTarget()
                    .attachKeyFrame();
                
                
            }
        )
});

