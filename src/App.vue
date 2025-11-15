<script setup>
import { ref, useTemplateRef } from 'vue'
import BigButtonLifeCycle from './components/Big Button/BigButtonLifeCycle.vue'
import BigButtonCanCountSlowly from "./components/Big Button/BigButtonCanCount/BigButtonCanCountSlowly.vue"
import BigButtonCanCountQuickly from "./components/Big Button/BigButtonCanCount/BigButtonCanCountQuickly.vue"
import BigButtonLearns from './components/Big Button/BigButtonLearns/BigButtonLearns.vue'
import BigButtonCastsSpells from './components/Big Button/BigButtonMagic/BigButtonCastsSpells.vue'

import bigDict from "./formulas/bigDict.json" //  [  ]  []
import testString from "./components/Big Button/BigButtonVars.js"



const count = ref(0)
const ageText = ref("")



function boing() {
  console.log("asd")
  console.log(testString)
  console.log("asd")
}



</script>

<template>
  <div>
    <h1> Hello, Mars! </h1>
    <BigButtonLifeCycle ref="BigButtonLifeCycleRef"/> <br></br>
    <button @click="boing">boing</button> <br></br>
    <!--<pre>{{ BigButtonLifeCycleChild }}</pre>-->
    <BigButtonCanCountSlowly /> <br></br>
    <BigButtonCanCountQuickly /> <br></br>
    <BigButtonLearns />
    <BigButtonCastsSpells />
  </div>
</template>
