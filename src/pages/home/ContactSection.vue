<script setup>
import OutlineButton from '../../components/OutlineButton.vue';
import TextInput from '../../components/TextInput.vue';
import {EMAIL, NUMBER} from '../../constants';

const WA_GREEN = "#25D366"

function launchWhatsApp() {
  const message = 'Hello, I would like to chat with you!'; // Replace with your message
  const url = `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
</script>

<template>
  <section>
    <div class="mx-auto mb-10">
      <div class="relative">
        <div class="absolute p-4 border-t-2 border-l-2 border-blood-orange dark:border-sky-blue"
          style="left:-20px; top:-20px"></div>
        <div class="absolute p-1 bg-blood-orange dark:bg-sky-blue" style="left:-32px; top:-32px"></div>
      </div>

      <form class="flex flex-col">
        <p class="p-5 mb-20 shadow-lg text-dark-gray bg-white dark:bg-light-gray dark:text-off-white">Have you got a
          project, open position or simply want to
          connect?</p>
        <h1 class="text-4xl font-bold mb-5 text-center">Message Me!</h1>

        <div class="grid md:grid-cols-2 md:gap-6">
          <text-input type="text" id="name-input" label="Your Name" />
          <text-input type="email" id="email-input" label="Your Email" />
        </div>
        <textarea rows="4" class="block p-2.5 w-full text-sm message-box appearance-none"
          placeholder="Leave me your message here..."></textarea>

        <div class="flex justify-center mt-5">
          <outline-button text="Send" iconCode="fa-solid fa-paper-plane" class="mr-2" />
          <outline-button text="Also on WhatsApp" iconCode="fa-brands fa-whatsapp" iconSize="lg" 
          :iconColour="WA_GREEN" :colour="WA_GREEN" @click="launchWhatsApp"/>
        </div>

        <div class="relative">
          <div class="absolute bg-blood-orange dark:bg-sky-blue" style="padding: 18px; right:-220px; bottom:80px;"></div>
          <div class="absolute p-4 border-2 border-blood-orange dark:border-sky-blue" style="right:-220px; bottom:35px">
          </div>
          <div class="absolute p-4 border-2 border-blood-orange dark:border-sky-blue" style="right:-220px; bottom:-10px">
          </div>
        </div>
      </form>

    </div>
  </section>
</template>

<style scoped>
.message-box {
  color: var(--dark-gray);
  caret-color: var(--blood-orange);
  border-color: var(--dark-gray);
  background-color: transparent;
  border-width: 0px;
  border-bottom-width: 2px;
}

.message-box:hover,
.message-box:focus {
  outline: none;
  box-shadow: none;
  border-color: var(--blood-orange);
}

body.dark .message-box {
  color: var(--off-white);
  caret-color: var(--sky-blue);
  border-color: var(--off-white);
}

body.dark .message-box:hover {
  border-color: var(--sky-blue);
}

body.dark .message-box:focus {
  border-color: var(--sky-blue);
}
</style>