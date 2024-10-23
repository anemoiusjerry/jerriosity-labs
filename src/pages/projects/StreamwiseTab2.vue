<script lang="ts" setup>
import FlipCard from '../../components/FlipCard.vue';
</script>

<template>
  <div>
    <p>
      Following my previous success, I was promoted to a managerial role leading the software team. My new initiative
      was setting up an annual rollout plan in collaboration with upper management and my own team that aligns the long
      term company vision. My main responsibility became overseeing these projects and improving the CI/CD pipeline.
    </p>

    <h5 class="mt-10">One-click Mass Updates</h5>
    <p>
      The most tedious, time consuming and error prone aspect of the Streamwise offering was the updating of the edge
      hardware devices I redesigned before. Each device needed to be manually updated by running an installer on the
      device itself, taking up developer time and making agile development unfeasible.
    </p>

    <div class="my-12 text-2xl font-bold text-center">Solution?</div>
    <div class="vertical flex justify-center">
      <div class="vertical flex">
        <div>
          <flip-card frontClass="p-7 rounded-2xl" backClass="p-7 rounded-2xl" class="mr-3">
            <template #front-face>
              <div class="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-1">
                <font-awesome-icon icon="fa-solid fa-hard-drive" size="3x" />
                <font-awesome-icon icon="fa-solid fa-hard-drive" size="3x" />
                <font-awesome-icon icon="fa-solid fa-hard-drive" size="3x" />
                <font-awesome-icon icon="fa-solid fa-hard-drive" size="3x" />
              </div>
            </template>
            <template #back-face>
              <p>
                Devices receive edge software as a Docker image
              </p>
            </template>
          </flip-card>
        </div>

        <div class="hide-for-mobile border-[1px] w-14 h-0 mt-24"></div>

        <div class="flex flex-col items-center">
          <flip-card frontClass="p-10 rounded-3xl" backClass="p-10 rounded-3xl" class="m-3">
            <template #front-face>
              <div class="text-center">
                <img src="/brands/docker-whale.svg" alt="iot edge logo" width="150" />
              </div>
            </template>
            <template #back-face>
              <p>
                Containerise code using docker for delivery via IoT Edge
              </p>
            </template>
          </flip-card>

          <div class="hide-for-mobile border-[1px] w-0 h-14"></div>

          <flip-card frontClass="p-7 rounded-2xl" backClass="p-7 rounded-2xl" class="mt-3 mr-12">
            <template #front-face>
              <div class="text-center">
                <img src="/brands/azure-Container-Registries.svg" alt="docker logo" width="100" />
                <span class="font-bold">Container<br>Registry</span>
              </div>
            </template>
            <template #back-face>
              <p>
                All versions of the code are saved in a Container Registry
              </p>
            </template>
          </flip-card>
        </div>
      </div>

      <font-awesome-icon icon="fa-solid fa-plus" size="xl" class="mt-28 mx-8" />

      <div class="vertical flex">
        <div class="flex flex-col items-center">
          <flip-card frontClass="p-10 rounded-3xl" backClass="p-10 rounded-3xl" class="m-3">
            <template #front-face>
              <div class="text-center">
                <img src="/brands/azure-IoT-Edge.svg" alt="iot edge logo" width="150" />
                <br>
                <span class="text-xl font-bold">IoT Edge</span>
              </div>
            </template>
            <template #back-face>
              <p>
                Service that allows the deployment and monitoring of containerised code from Azure cloud
              </p>
            </template>
          </flip-card>

          <div class="hide-for-mobile border-[1px] w-0 h-14"></div>

          <flip-card frontClass="p-7 rounded-2xl" backClass="p-7 rounded-2xl" class="m-3">
            <template #front-face>
              <div class="text-center">
                <img src="/brands/azure-Device-Provisioning-Services.svg" alt="DPS logo" width="100" />
                <span class="font-bold">DPS</span>
              </div>
            </template>
            <template #back-face>
              <p>
                Links hardware device to IoT Hub
              </p>
            </template>
          </flip-card>
        </div>

        <div class="hide-for-mobile border-[1px] w-14 h-0 mt-32"></div>

        <div>
          <flip-card frontClass="p-7 rounded-2xl" backClass="p-7 rounded-2xl" class="ml-3">
            <template #front-face>
              <div class="text-center">
                <img src="/brands/azure-IoT-Hub.svg" alt="iot edge logo" width="100" />
                <span class="font-bold">IoT Hub</span>
              </div>
            </template>
            <template #back-face>
              <p>
                IoT Hub holds all the provisioned devices and is the central control point
              </p>
            </template>
          </flip-card>
        </div>
      </div>
    </div>

    <p>
      The workflow connects many Azure services together. First edge code is containerised using Docker and saved to a
      container registry. Then set up automated deployments targeting these devices on IoT Hub. During device
      manufacturing, windows images that already have IoT Edge runtime is installed on every device. Upon device
      activation a signal is sent to the Device Provisioning Service that creates a new device on IoT Hub linking it to
      the real device. The automated deployments now pushes the containerised code onto the targeted devices.
      <br><br>
      Device targeting is achieved using tags. Each device on IoT Hub can have a list of tags and each deployment can
      reference any subset of these. Each deployment has a ranking number determining its priority. To trigger a mass 
      update for devices, a new deployment is created with a higher priority level.
    </p>
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

.arrow-left {
  width: 0;
  height: 0;
  border-right: 20px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

.arrow-right {
  width: 0;
  height: 0;
  border-left: 20px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
</style>