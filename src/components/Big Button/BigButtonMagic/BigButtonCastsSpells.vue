<script setup>

    //  [  ]  []

    import {ref} from 'vue'
    
    import MagicInventory from "./MagicInventory.json"

    const DisplayMagicInventory = ref(MagicInventory) // bruh how does this actually work !?!?

    //console.log(DisplayMagicInventory['_value']['elements'].find( x => x.type == "mana" )['amount'])

    function addToInventory(categoryStr, typeStr, amountInt) {
        let current = parseInt(DisplayMagicInventory['_value'][categoryStr].find( x => x.type == typeStr )['amount'])
        if (current + amountInt >= 0) {
            DisplayMagicInventory['_value'][categoryStr].find( x => x.type == typeStr )['amount'] = (current + amountInt).toString()
            return true
        } else {
            console.log(`Failed to change ${categoryStr}.${typeStr} by ${amountInt}: not enough in inventory.`)
            return false
        }
    }

    function freeMana() {
        addToInventory('elements', 'mana', 10)
    }

    



</script>

<template>
    <div>
        <button @click="freeMana()"> Free Mana! </button>
        <p>v-model="DisplayMagicInventory"> {{ DisplayMagicInventory }} </p>
    </div>
</template>