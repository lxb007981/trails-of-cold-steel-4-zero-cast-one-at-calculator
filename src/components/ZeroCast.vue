<template>
  <div>
    <h3>零驱动所需速度计算</h3>
    <div>
      <p>驱动回路及饰品</p>
      <input
        id="cast1"
        v-model="useCast1"
        type="checkbox"
        value="4/5"
      >
      <label for="cast1">驱动1</label>
      <input
        id="cast2"
        v-model="useCast2"
        type="checkbox"
        value="3/4"
      >
      <label for="cast2">驱动2</label>
      <input
        id="cast3"
        v-model="useCast3"
        type="checkbox"
        value="2/3"
      >
      <label for="cast3">驱动3</label>
      <input
        id="DiabolosGem"
        v-model="useDiabolosGem"
        type="checkbox"
        value="1/2"
      >
      <label for="DiabolosGem">魔王珠</label>
      <input
        id="QuickCaliberV"
        v-model="useQuickCaliberV"
        type="checkbox"
        value="2/3"
      >
      <label for="QuickCaliberV">迅捷机芯V</label>
      <input
        id="WisdomAnima"
        v-model="useWisdomAnima"
        type="checkbox"
        value="1/2"
      >
      <label for="WisdomAnima">智之核心</label>
      <input
        id="EchoCairn"
        v-model="useEchoCairn"
        type="checkbox"
        value="1/2"
      >
      <label for="EchoCairn">响之核心</label>
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
        <option value="10">
          地水风火初级魔法
        </option>
        <option value="11">
          地水风火二级魔法
        </option>
        <option value="12">
          地水风火三级魔法
        </option>
        <option value="13">
          地水风火终极魔法
        </option>
        <option value="10">
          时空幻初级魔法
        </option>
        <option value="12">
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
const useCast1 = ref(false)
const useCast2 = ref(false)
const useCast3 = ref(false)
const useDiabolosGem = ref(false)
const useQuickCaliberV = ref(false)
const useWisdomAnima = ref(false)
const useEchoCairn = ref(false)
const ArtsST = ref('14')
const speed = ref(0)
const SPDBuff = ref('1')
function calculateCastTime () {
  const ST = parseInt(ArtsST.value, 10)
  const cast1 = useCast1.value ? 4 / 5 : 1
  const cast2 = useCast2.value ? 3 / 4 : 1
  const cast3 = useCast3.value ? 2 / 3 : 1
  const diabolosGem = useDiabolosGem.value ? 1 / 2 : 1
  const quickCaliberV = useQuickCaliberV.value ? 2 / 3 : 1
  const wisdomAnima = useWisdomAnima.value ? 1 / 2 : 1
  const echoCairn = useEchoCairn.value ? 1 / 2 : 1
  const buff = parseFloat(SPDBuff.value)

  let tentative = Math.ceil(Math.ceil(ST * 100 * cast1 * cast2 * cast3 * diabolosGem * quickCaliberV * wisdomAnima * echoCairn + 1e-5) / buff) - 10
  let loopFlag = true
  while (loopFlag) {
    const AT = Math.floor(Math.floor(ST * 100 / Math.floor(tentative * buff)) * cast1 * cast2 * cast3 * diabolosGem * quickCaliberV * wisdomAnima * echoCairn)
    console.log(AT)
    if (AT < 1) {
      loopFlag = false
      speed.value = tentative
    } else {
      tentative += 1
    }
  }
  calculationDone.value = true
}
</script>
