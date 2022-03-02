<template>
  <div>
    <h3>1硬直所需速度计算</h3>
    <div>
      <p>铃铛个数</p>
      <select v-model="numBells">
        <option
          selected
          value="0"
        >
          0
        </option>
        <option value="1">
          1
        </option>
        <option

          value="2"
        >
          2
        </option>
      </select>

      <p>选择速度buff</p>
      <select v-model="SPDBuff">
        <option
          selected
          value="1"
        >
          无buff
        </option>
        <option

          value="1.15"
        >
          SPD UP（小）
        </option>
        <option

          value="1.3"
        >
          SPD UP（中）
        </option>
        <option

          value="1.45"
        >
          SPD UP（大）
        </option>
      </select>
    </div>
    <div>
      <p>选择目标魔法</p>
      <select v-model="ArtsST">
        <option value="6">
          地水风火初级魔法
        </option>
        <option value="8">
          地水风火二级魔法
        </option>
        <option value="10">
          地水风火三级魔法
        </option>
        <option value="12">
          地水风火终极魔法
        </option>
        <option
          value="6"
        >
          时空幻初级魔法
        </option>
        <option
          value="10"
        >
          时空幻中级魔法
        </option>
        <option
          selected
          value="14"
        >
          时空幻终极魔法
        </option>
      </select>
    </div>
    <br>
    <div>
      <button @click="calculateCastTime">
        计算
      </button>
    </div>
    <div v-if="calculationDone">
      所需要的速度是{{ speed }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const calculationDone = ref(false)
const ArtsST = ref('14')
const speed = ref(0)
const SPDBuff = ref('1')
const numBells = ref('0')
function calculateCastTime () {
  const ST = parseInt(ArtsST.value, 10)
  const buff = parseFloat(SPDBuff.value)
  const bellEffect = (1 / 2) ** parseInt(numBells.value, 10)
  let tentative = Math.ceil(Math.ceil(ST * 100 * bellEffect / 2 + 1e-5) / buff + 1e-5) - 10
  let loopFlag = true
  while (loopFlag) {
    const AT = Math.floor(Math.floor(ST * 100 / Math.floor(tentative * buff)) * bellEffect)
    if (AT < 2) {
      loopFlag = false
      speed.value = tentative
    } else {
      tentative += 1
    }
  }
  calculationDone.value = true
}
</script>
