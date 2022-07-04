const bannedItems = {
    //"chickenchunks:chunk_loader": "Chickenchunks Chunk Loader crash the server when you use it",
}

function CheckObject(id) {
    if (!(Object.keys(bannedItems).indexOf(id)===-1)) {
        return [true, ["Item ", Text.yellow(id), " has been ", Text.red("removed"), ".\nReason: ", Text.red(bannedItems[id])]];
    } else if (/byg:.*sign.*/.test(id)) {
        return [true, ["Item ", Text.yellow(id), " has been ", Text.red("removed"), ".\nReason: Causes rendering crash."]];
    }
    return [false];
}

function itemCheck (item, event, player) {
    if (!item) return;

    const id = item.getId().toString();

    const IsBlacklisted = CheckObject(id);
    if (!IsBlacklisted[0]) return;
    item.count = 0;
    event.cancel();
    if (player && player.isPlayer()) {
        player.tell(IsBlacklisted[1]);
    }
}

function blockCheck (block, event, player) {

    if (!block) return;
    const id = block.getId().toString();
    const IsBlacklisted = CheckObject(id);
    if (!IsBlacklisted[0]) return;
    event.cancel();
    if (player && player.isPlayer()) {
        player.tell(IsBlacklisted[1]);
    }
}
  
onEvent("block.place", event => blockCheck(event.getBlock(), event, event.getEntity()));
onEvent("block.break", event => blockCheck(event.getBlock(), event, event.getEntity()));
onEvent("block.left_click", event => blockCheck(event.getBlock(), event, event.getEntity()));
onEvent("block.right_click", event => blockCheck(event.getBlock(), event, event.getEntity()));

onEvent("item.right_click", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.left_click", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.pickup", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.toss", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.crafted", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.smelted", event => itemCheck(event.getItem(), event, event.getPlayer()));
onEvent("item.entity_interact", event => itemCheck(event.getItem(), event, event.getPlayer()));