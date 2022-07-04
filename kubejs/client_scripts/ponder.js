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
                fbl = [2.5,1,2.5] // Focus block location
                scene.showStructure();
                scene.idle(10);

                const centerBlockPos = util.grid.at(2, 0, 2);
                const centerTop = util.vector.topOf(centerBlockPos);

                scene.world.setBlock(fbl, "minecraft:enchanting_table", true);
                scene
                    .text(stt(7), "Enchanting tables can enchant books, armor, weapons, and much more.", fbl)
                    .colored(PonderPalette.WHITE)
                    .placeNearTarget()
                    .attachKeyFrame();
                
                scene
                    .showControls(stt(3), centerBlockPos.above(2), "down")
                    .leftClick()
                    .withItem("book");

                scene.idle(stt(3));
                
                scene
                    .showControls(stt(2), centerBlockPos.above(2), "down")
                    .leftClick()
                    .withItem("diamond_chestplate");

                scene.idle(stt(2));

                scene
                    .showControls(stt(2), centerBlockPos.above(2), "down")
                    .leftClick()
                    .withItem("iron_sword");
                scene.idle(stt(4));
            }
        )
});

