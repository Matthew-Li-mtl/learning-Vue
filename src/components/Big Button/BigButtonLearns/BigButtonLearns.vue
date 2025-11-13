<script setup>

    import {ref} from 'vue'
    import levels from "../../../formulas/levels.json"
    import { testButton } from "./TimeFactorScore.js"

    const xp = ref(0)
    const level = ref(0)

    function addXP(amount) {
        xp.value += testButton()
        calculateLevel()
        console.log(xp.value)
        console.log(level.value)
    }

    function calculateLevel() {
        const level_xp_requirements = levels['level_xp_requirements']
        let nextRequirement = level_xp_requirements[(level.value+1).toString()]['xp_requirement']
        console.log(xp.value)
        console.log(nextRequirement)
//        if (xp.value < currentRequirement && level.value > 0) {
//            while (xp.value < currentRequirement && level.value >= 0) {
//                level.value--
//                currentRequirement = level_xp_requirements[level.value.toString()]
//            }
//        } else {
            while (xp.value >= nextRequirement && level.value < 1000) {
                level.value++
                nextRequirement = level_xp_requirements[level.value.toString()]
            }
//        }
    }

</script>

<template>

    <button @click="addXP(100)">

        Big Button knows {{ xp }} things about you!

    </button>

    <p>

        Big Button is level {{ level }} on knowledge about you!

    </p>

</template>