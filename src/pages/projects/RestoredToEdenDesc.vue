<script lang="ts" setup>
import TypeTextArea from '../../components/TypeTextArea.vue';
</script>

<template>
  <div class="project-page flex flex-col items-center">
    <type-text-area text='< Restored To Eden />' class="type-title" />
    <div class="mb-5">
      <a class="line-through me-4">www.restoredtoeden.com</a>
      <a data-popover-target="popover-default" data-popover-placement="right"
        href="https://github.com/anemoiusjerry/auto-ingredient-selector" target="_blank">
        <font-awesome-icon icon="fa-solid fa-laptop-code" size="lg" />
      </a>

      <div data-popover id="popover-default" role="tooltip"
        class="absolute z-10 invisible inline-block text-sm transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:border-gray-600 dark:bg-light-gray">
        <div class="px-3 py-2">
          <p>See code on GitHub</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>

    <p class="my-5">
      My first freelance job, lasting a bit over one year inclusive of all the post launch support. The client runs a
      bespoke skin care service where a set of creams is crafted from hand selected ingredients based on the skin
      conditions of customers. I was tasked to automate this process by producing the ingredients and their respective
      amounts as well as an information brochure for the customers to read about the product. I Learnt a lot of skills
      outside of coding from registering my own business, to drafting scopes of work and handling client complaints.
    </p>

    <div class="my-5">
      <img src="/projects/rte/user-diagram.png" alt="User flow" class="float-right ms-10 mb-5" />
      <p>
        I setup many meetings with my client to ensure I fully understand the desired deliverables.
        The crux of this project was a constraint satisfaction problem, and these problems are traditionally
        solved using recursive techniques. My research pointed to a modified version of Knuth's Algorithm X.
        <br><br>
        Customers begin by going to the website catalog and choosing which products they would like to purchase,
        these can include product bundles. This is called an order. For each order, the customer fills out a
        questionnaire asking what kind of skin complications they experience. Based on the answers, suitable ingredients
        that address these complications will be selected into formulations for each product.
        <br><br>
        After analysing sample formulations, I saw and the client confirmed that for each product type, the types and
        weighting of ingredients are more or less static. The main problem is selecting which ingredients of each
        ingredient type to put into the formulation. I asked the client to produce templates for these products as well
        as standardising the information brochure so its production can be automated.
        <br><br>
        Using these templates, my program will plug the relevant ingredients and its information into them exporting
        the end result. I also exported the selected ingredients list so the client can more easily analyse the
        program performance.
      </p>
    </div>

    <div class="my-5">
      <img :src="`/projects/rte/rte-app.png`" width="500" class="float-left mr-10 mb-10 rounded-lg dark:hidden" />
      <img :src="`/projects/rte/rte-app-dark.png`" width="500" class="float-left mr-10 mb-10 rounded-lg hidden dark:block" />
      <p>
        While the excel template method is crude, employing machine learning models would have also been unsuitable due
        to the lack of training data. There just werent enough real orders to sufficiently build a model. Even if a
        model was created tweaking it would be difficult too. I still had my full time during the day and so enlisted
        the help of my friend to code this project together, splitting the earnings in the process. Python and the PyQt4
        UI library was used since we were both familiar and thus put product out faster. Putting out the excel file
        formulations were easy, while the information brochure was styled with HTML then converted to PDF (see
        Streamwise D.I.). My friend was instrumental in implementing Knuth's algorithm and beta testing the app since I
        do not have MacOS. We made several releases, tweaking the algorithm each time until the client was satisfied.
        <br><br>
        Many months after the final release, an unexpected email reached my inbox informing me that the app no
        longer works. Through a share screen I diagnosed the problem and realised it was due to the new Apple
        M1 chip release that is incompatible with the python UI library I used. Luckily the solution was to simply
        use another library PySide2, althought this took much longer than I expected. From this I learned how
        I should handle post launch support better for the next project.
      </p>
    </div>
  </div>
</template>