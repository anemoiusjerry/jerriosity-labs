<script lang="ts" setup>
import { ref } from 'vue';
import TypeTextArea from '../../components/TypeTextArea.vue';
import StreamwiseTab1 from './StreamwiseTab1.vue';
import StreamwiseTab2 from './StreamwiseTab2.vue';

const curTab = ref('tab1')
const setTab = (tab: string) => {
  curTab.value = tab
} 
</script>

<template>
  <div id="streamwise-page" class="flex flex-col items-center justify-center">
    <type-text-area text='< Streamwise D.I. />' class="type-title" />
    <a href="https://streamwisedi.com" class="hover:underline" target="_blank">https://streamwisedi.com</a>

    <p class="mt-10">
      Streamwise Digital Intelligence was my first professional position straight out of university.
      It is an industrial IoT startup that specialises in optimising wastewater treatment. The company goal
      was to provide a central analytics and control platform to collect and process data in real-time to provide
      actionable insights regarding government compliance, equipment maintenance, and overall regulation of the process.
    </p>

    <!-- Tabs for the roles -->
    <div class="font-bold text-center border-b border-light-gray mt-10">
      <ul class="grid grid-cols-2 -mb-px">
        <li @click="() => setTab('tab1')" class="inline-block p-4 text-gray-400 tab"
          :class="curTab === 'tab1' && 'active'">
          Systems Engineer
        </li>
        <li @click="() => setTab('tab2')" class="inline-block p-4 text-gray-400 tab"
          :class="curTab === 'tab2' && 'active'">
          Technical Engineering Manager
        </li>
      </ul>
    </div>

    <div v-if="curTab === 'tab1'" class="tab-content">
      <StreamwiseTab1 />
    </div>
    <div v-else class="tab-content">
      <StreamwiseTab2 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab:hover,
.tab.active {
  border-bottom-width: 3px;
  color: $bloodOrange;
  border-color: $bloodOrange;
}

body.dark .tab:hover,
body.dark .tab.active {
  color: $skyBlue;
  border-color: $skyBlue;
}

.tab-content {
  margin-top: 50px;
  padding: 20px;
}

#streamwise-page {
  padding: 9em;
  @include breakpoint-down(small) {
    padding: 2.5em;
  }
}

.type-title {
  font-size: x-large;
  @include breakpoint-down(small) {
    font-size: large;
    margin-top: 4em;
  }
}
</style>