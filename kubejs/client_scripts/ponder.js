// Contains all ponders

// 20 ticks = 1 second

/**
 * 
 * @param {int} second The amount of seconds
 * @returns int Returns seconds converted to ticks
 */
function stt(second) {
    return second * 20;
}

onEvent('ponder.tag', (event)=> {
    // Experimenting with enchantment table
    event.createTag("kubejs:vanilla_minecraft", "minecraft:grass", "Vanilla blocks", "Tutorial on using vanilla blocks", ["minecraft:enchanting_table"]);
})

onEvent("ponder.registry", (event)=>{
    event
        .create("minecraft:enchanting_table")
        .scene(
            "enchanting_table",
            "Enchanting table usage",
            (scene, util) => {
                scene.showStructure();
                scene.idle(10);

                scene.world.setBlock([0,1,0], "minecraft:enchanting_table", true);
                scene
                    .text(tts(3), "Enchanting tables enchant items or blocks")
                    .colored(PonderPallete.WHITE)
                    .placeNearTarget()
                    .attachKeyFrame();
                
                scene
                    .showControls(tts(3), [0,2,0], "down")
                    .leftClick()
                    .withItem("book");
            }
        )
})

