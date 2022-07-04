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
})

