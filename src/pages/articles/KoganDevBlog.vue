<script lang="ts" setup>
</script>

<template>
  <div class="article-page">
    <p>July 27, 2025</p>
    <h4>Order Dispatch Systems At Scale</h4>
    <p class='text-xl'>How to load-balance like a seasoned waiter</p>
    <br/>
    <p>Software systems often parallel the real world. Imagine running a busy restaurant, where customers line up to make orders whilst the kitchen prepares the meals. In the software world, your users are the customers, and your backend services are the kitchen. With more people online than ever before, that line might start to grow out the front door. The ability to scale is no longer optional, it is essential.</p>
    <img class="my-8" src="/literature/kgn-dev-blog.jpg" />

    <h6>Know Your Options</h6>
    <div class="my-8 flex justify-center">
      <table class="text-dark-gray dark:text-off-white">
        <thead class="text-lg uppercase bg-gray-200 dark:bg-gray-700">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-tl-lg border-r">
                    Vertical Scaling - Scale Up
                </th>
                <th scope="col" class="px-6 py-3 rounded-tr-lg">
                    Horizontal Scaling - Scale Out
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 rounded-bl-lg border-r text-left">
                  Expanding your restaurant by adding more tables or a larger kitchen. In software terms, 
                  this means scaling up your infrastructure. More powerful CPUs, larger memory, increased 
                  throughput etc. This is a relative quick fix, but comes with diminishing returns and 
                  limits on how big everything can get.
                </th>
                <th scope="row" class="px-6 py-4 rounded-br-lg text-left">
                  Opening new restaurant locations to serve more customers simultaneously and distribute 
                  existing flows. In software terms, this means adding more API servers, more worker nodes 
                  or creating many database replicas. This approach is more flexible and scalable than vertical 
                  scaling in the long term.
                </th>
            </tr>
        </tbody>
      </table>
    </div>
     

    <h6>A Steppingstone - Queues</h6><br/>
    <p>
      Just like how customers queue for their order, we create a pull-based task queue for our order management 
      system using AWS Simple Queue Service (SQS). Tasks get queued into the SQS, and a consumer service will 
      continuously poll this queue to process the tasks.<br/><br/>
      
      This gives a lot of control for the queue consumer to dictate the frequency of polling, which works well in 
      systems that cannot handle high throughput or requires non-concurrency like the SAP ERP (more on that later). 
      SQS also provides built-in dead-letter-queues, retry policies, at least once delivery guarantee and scales 
      automatically.
    </p>
    <img class="my-10" src="/literature/kgn-dev-blog-queue.png" />
    <p>
      Vertical scaling involves sizing up the compute power of the consumer (CPU, RAM etc). Horizontal scaling 
      involves spinning up more consumers of the SQS.<br/><br/>

      However, queues have limitations:
    </p>
    <br/>
    <ul class="space-y-1 list-disc list-inside">
      <li>
        <b>Latency</b> <p class="inline">between order arrival and processing.</p>
      </li>
      <li>
        <b>Inefficient polling</b> <p class="inline">process that checks constantly even when the queue is empty.</p>
      </li>
      <li>
        <b>Limited fan out</b>, <p class="inline">message is designed to be consumed by one service making it difficult for different components to react to the same event.</p>
      </li>
      <li>
        <b>Concurrency issues</b>, <p class="inline">need to tune the message visibility timeout to ensure it isn't picked up by another consumer instance when scaling out.</p>
      </li>
    </ul>

    <h6 class="my-8">The Gold Standard - Events</h6>
    <p>
      Scalability starts at the architectural level; enter event-driven programming. Instead of queuing up, customers 
      scan a QR code, and their order is sent instantly to the kitchen, the waiter, the pay desk all at once. No delay, 
      no queues.<br/><br/>

      We recreate this by having an event publisher that sends messages to an event bus. Which notifies the event 
      subscribers: warehouse, emailing service and SAP simultaneously, allowing them to react to the same order 
      independently. Adding the previous vertical and horizontal scaling options mentioned above, creates a powerful 
      system for processing and dispatching orders as the separate components can be scaled independently. Which also 
      lends well to a microservices architecture.
    </p>
    <img class="my-10" src="/literature/kgn-dev-blog-events.png" />
    <p>This model mitigates a lot of the previous approach's deficiencies:</p>
    <br/>
    <ul class="space-y-1 list-disc list-inside">
      <li><b>Lower latency</b><p class="inline">as it is push based not pull based.</p></li>
      <li><p class="inline">Subscribers can be scaled</p> <b>individually</b><p class="inline">.</p></li>
      <li><p class="inline">Event bus is built to handle</p> <b>concurrency</b><p class="inline">.</p></li>
    </ul>
    <br/>
    <p>
      There are two ways to implement this in AWS: <b class="text-blood-orange dark:text-sky-blue">EventBridge</b> and <b class="text-blood-orange dark:text-sky-blue">SNS</b> (Simple Notification Service). We choose EventBridge for 
      its ability to handle more complex workflows and native integrations with third party SaaS applications like Zendesk.<br/><br/>

      Unlike the SNS approach where messages must be published to a specific topic and risks the number of topics growing too large; 
      EventBridge receives from many sources at once. With advanced filtering capabilities, it can inspect the full event payload and 
      route them to the appropriate consumers. Additionally, event archiving and replays are also supported for improved debugging. 
      <br/><br/>
      Here is the basic implementation:
    </p>
    <br/>
    <ul class="space-y-1 list-disc list-inside">
      <li><p class="inline">Publish events to the</p> <b>EventBridge</b><p class="inline"> from your application</p></li>
      <li><p class="inline">Define</p> <b>Event Rules</b><p class="inline"> that filter events based on its payload</p></li>
      <li><p class="inline">Configure</p> <b>Targets</b><p class="inline"> for each rule - they can have multiple targets</p></li>
    </ul>
    <br/>
    <p>
      Our target will be SQS as it allows our preexisting .NET services to plug into the new event-driven system without major modifications. 
      However, serverless lambda functions are on the table if we can remove the dependency on SAP, more on this later.
      <br/><br/>
      While powerful, event-driven architecture is not without its drawbacks:
      <br/><br/>
      <b class="text-blood-orange dark:text-sky-blue">Debugging and tracing:</b> Events are asynchronous and loosely coupled making it difficult to find cause and effect. Need to set up comprehensive logging and distributed tracing. 
      <br/><br/>
      <b class="text-blood-orange dark:text-sky-blue">Eventual consistency:</b> System components may be temporarily out of sync. Making it harder to understand behaviour. Logic must also be built to handle stale data gracefully.
      <br/><br/>
      <b class="text-blood-orange dark:text-sky-blue">Event schema evolution:</b> Changing the payload structure can cause breaking impacts for downstream services. Need to document clearly how the payload is consumed and have a versioning strategy.
      <br/><br/>
      Despite these challenges, with the right tooling and implementation, event-driven architectures can be made highly observable, testable and resilient. 
    </p>

    <h6 class="my-8">A Slow Chef in the Kitchen</h6>
    <p>
      Sometimes, the bottleneck isn't your system but it's external dependencies. In our case, SAP is that slow chef. The Data Interface API 
      is single threaded and does not support batch processing. If you throw too many requests, it will choke no matter how fast other components 
      are. Identification of such bottlenecks are crucial, lest those other scaling efforts are wasted.
      <br/><br/>
      Luckily, in our case we can upgrade SAP from the DI API to a modern alternative called the Service Layer. It is designed with scalability in mind:
    </p>
    <br/>
    <ul class="space-y-1 list-disc list-inside dark:text-off-white text-dark-gray">
      <li>Uses HTTP and ODATA protocols</li>
      <li>Can parallel process</li>
      <li>Automatic load-balancing</li>
      <li>Does not require local installation like DI API</li>
    </ul>  
    <br/>
    <p>These properties make it much easier to develop web and mobile applications which are more accessible than the SAP Windows client. 
      The service layer's more stateless nature lends nicely to the aforementioned event-driven architecture, bringing SAP in line with 
      the rest of our scalable system.
    </p>

    <h6 class="my-8">Conclusion</h6>
    <p>
      Just like a restaurant, software systems should be designed with future scalability in mind. Start with simple abstractions like 
      task queues and evolve to fully decoupled event-driven systems. Horizontal scaling is often better and more flexible than vertical 
      scaling. When faced with external bottlenecks, tackle them head-on. Architecture is the business, with intentional design, your 
      restaurant won't just keep up but thrive.
    </p>

    <h6 class="my-8">References</h6>
    <ol class="space-y-1 list-decimal list-inside text-dark-gray dark:text-off-white">
      <li>
        <a class="underline" href="https://medium.com/@seetharamugn/the-complete-guide-to-event-driven-architecture-b25226594227" target="_blank">
          The Complete Guide to Event-Driven Architecture | by Seetharamugn | Medium
        </a>
      </li>
      <li>
        <a class="underline" href="https://medium.com/@alexglushenkov/the-art-of-scaling-building-systems-for-millions-of-users-12b6d288709f" target="_blank">
          The Art of Scaling: Building Systems for Millions of Users | by Alex Glushenkov | Medium
        </a>
      </li>
      <li>
        <a class="underline" href="https://aws.amazon.com/sqs/features/" target="_blank">
          Amazon SQS Features | Message Queuing Service | AWS
        </a>
      </li>
      <li>
        <a class="underline" href="https://docs.aws.amazon.com/decision-guides/latest/sns-or-sqs-or-eventbridge/sns-or-sqs-or-eventbridge.html" target="_blank">
          Amazon SQS, Amazon SNS, or Amazon EventBridge? - Amazon SQS, Amazon SNS, or EventBridge?
        </a>
      </li>
      <li>
        <a class="underline" href="https://www.youtube.com/watch?v=zaF_i7x9-s0" target="_blank">
          Service Layer 1/6: API
        </a>
      </li>
      <li>
        <a class="underline" href="https://solace.com/blog/event-driven-architecture-pros-and-cons/" target="_blank">
          A Guide to Event-Driven Architecture Pros and Cons | Solace
        </a>
      </li>
    </ol> 
  </div>
</template>

<style lang="scss" scoped>
</style>