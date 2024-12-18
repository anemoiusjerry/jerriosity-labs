<script lang="ts" setup>
import FlipCard from '../../components/FlipCard.vue';
import DesktopMock from '../../components/DesktopMock.vue';
import MobileMock from '../../components/MobileMock.vue';
import StickyNote from '../../components/StickyNote.vue';
import { inject, onMounted, onUnmounted, Ref, ref } from 'vue';

const isMobile: Ref<number> | undefined = inject('isMobile')
const mockScale = ref(1)

function calcMockSize() {
  if (isMobile !== undefined && isMobile.value) {
    mockScale.value = 0.6
  }
}

onMounted(() => {
  calcMockSize()
  window.addEventListener('resize', calcMockSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', calcMockSize)
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="vertical my-5">
      <div class="float-left me-14 margin-mobile">
        <desktop-mock :size="0.8 * mockScale" imageUrl="/projects/streamwise/report-desktop.png" />
      </div>

      <h5>Automated Reporting</h5>
      <p>
        My first project was actually the most difficult one. Tasked with creating a fully automated, customisable
        reporting system that exports a pdf document every week, I needed to devise a solution that integrates with
        the current architecture while maintaining future extendability. There were very little online guidance on
        similar projects so after extensive research, this is the pipeline I ended up implementing:
      </p>
      <br>
      <b>1. Clients setup report configurations using the web portal.</b>
    </div>

    <ol class="workflow-list my-5 divide-light-gray">
      <li class="items-center block p-3 hover:bg-white dark:hover:bg-light-gray">
        <div class="flex">
          <img class="w-12 h-12 mb-3 me-3" src="/brands/azure-functions.svg" alt="azure func icon" />
          <span class="font-medium text-dark-gray dark:text-off-white">2. Time Triggered Function</span>
        </div>
        <p>
          Weekly triggered serverless function inserts messages into a queue. This message contains who wants reports
          and the time period it covers.
        </p>
      </li>

      <li class="divider items-center block p-3 hover:bg-white dark:hover:bg-light-gray">
        <div class="flex">
          <img class="w-12 h-12 mb-3 me-3" src="/brands/azure-queue-storage.png" alt="azure queue storage icon" />
          <span class="font-medium text-dark-gray dark:text-off-white">3. Queue Service</span>
        </div>
        <p>
          I chose a queue as even during times of high load, messages won't be lost and it has a built in retry policy
          for failed requests.
          <br><br>
          Messages trigger another serverless function that starts the report generation process.
        </p>
      </li>

      <li class="divider items-center block p-3 hover:bg-white dark:hover:bg-light-gray">
        <div class="flex">
          <img class="w-12 h-12 mb-3 me-3" src="/brands/azure-functions.svg" alt="azure func icon" />
          <span class="font-medium text-dark-gray dark:text-off-white">4. Http serverless functions</span>
        </div>
        <p>
          The report generation function queries the configuration settings and telemetry data to draw the graphs
          using Matplotlib. These are inserted into an HTML document using Django-like templating (Jinja).
          <br><br>
          In the process I created 2 microservices, a metric calculation module extracted out of the web portal and a
          graph drawing module.
        </p>
      </li>

      <li class="divider items-center block p-3 hover:bg-white dark:hover:bg-light-gray">
        <div class="flex">
          <img class="w-12 h-12 mb-3 me-3" src="/brands/azure-web-jobs.svg" alt="azure app service icon" />
          <span class="font-medium text-dark-gray dark:text-off-white">5. HTML to PDF</span>
        </div>
        <p class="text-justify">
          Finally, the HTML is then sent to a converter engine to be rendered into a PDF. Different engines output
          different layouts and required different permissions permissions (GDI calls). I had to play around with
          the hosting method to provide these elaveted permissions.
        </p>
      </li>
    </ol>

    <h5 class="my-10">Architecture Redesign</h5>
    <p>
      My main achievement in the Systems Engineer position however, is the complete architectural redesign of the edge
      device software. It is the heart of the Streamwise offering being the IoT device that handles all interactions
      with on-site hardware. It funnels all sensor data to the cloud, executes pump commands via automated control
      loops and activates other hardware functions.
      <br><br>
      The old system was completely hardcoded and tightly coupled to the PLC. Meaning any new sensor connections will
      require code change and subsequent redeployment. Different versions of the code also exists for various PLC
      types making version control difficult and bug prone. My new object-orientated design maps every single hardware
      to its own object such that a digital twin is essentially created. These objects all inherit from 2 bases
      classes:
    </p>

    <div class="flex flex-wrap">
      <flip-card class="m-8" frontClass="h-40 w-52 rounded-xl" backClass="h-40 w-52 rounded-xl p-10">
        <template #front-face>
          <div class="flex flex-col">
            <font-awesome-icon icon="fa-solid fa-temperature-half" size="2xl"
              class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>Sensors</span>
          </div>
        </template>
        <template #back-face>
          <p>Equipment that is read from, signals in.</p>
        </template>
      </flip-card>

      <flip-card class="m-8" frontClass="h-40 w-52 rounded-xl" backClass="h-40 w-52 rounded-xl p-10">
        <template #front-face>
          <div class="flex flex-col">
            <font-awesome-icon icon="fa-solid fa-fan" size="2xl" class="text-blood-orange dark:text-sky-blue mb-2" />
            <span>Actuators</span>
          </div>
        </template>
        <template #back-face>
          <p>Equipment that is written to, signals out.</p>
        </template>
      </flip-card>
    </div>
    <p>
      The true ingenuity of my solution however, is that each of these objects can take different communication
      modules. There are many different protocols that hardware use to communicate with each other, which is why the
      old code only interacts with the site PLC that abstracts this away. The new system allows direct interfacing with
      equipment, and the mixing of different protocols all within the edge device.
    </p>

    <div class="vertical flex mt-10">
      <sticky-note class="sticky-note self-center"
        text="All of this can be setup remotely via the web portal or the mobile app. Live data readings can be streamed to aid with real-time diagnosis." />

      <div class="flex items-end flex-shrink-0">
        <mobile-mock :size="0.3 * mockScale" imageUrl="/projects/streamwise/signals-mobile.png"
          class="z-10 absolute start-[50px]" />
        <div>
          <desktop-mock :size="0.8 * mockScale" imageUrl="/projects/streamwise/signals-desktop.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vertical {
  @include breakpoint-down(small) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.workflow-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @include breakpoint-down(small) {
    grid-template-columns: none;
  }
}

.divider {
  border-left-width: 1px;

  @include breakpoint-down(small) {
    border-left-width: 0px;
    border-top-width: 1px;
  }
}

.sticky-note {
  margin-right: 20px;

  @include breakpoint-down(small) {
    margin-right: 0px;
    margin-bottom: 50px;
  }
}

.margin-mobile {
  @include breakpoint-down(small) {
    margin-right: 0;
    margin-bottom: 2em;
  }
}
</style>