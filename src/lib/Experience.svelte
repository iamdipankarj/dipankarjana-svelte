<script lang="ts">
  export let companyLogo: string
  export let position: string
  export let duration: string
</script>
<article>
  <div class="flex items-center">
    <div class="w-16">
      <img src={companyLogo} alt="OkCredit" class="block w-12 h-12" />
    </div>
    <div class="flex flex-col">
      <h4 class="font-semibold text-lg tracking-wide">{position}</h4>
      <p class="text-subheading text-md">{duration}</p>
    </div>
  </div>
  <ul class="space-y-1 mt-4">
    <slot />
    <!-- <li class="milestone">I&apos;ve helped set and contribute to our product strategy for Growth from yearly plans to individual experiment product specs.</li>
    <li class="milestone">Created and led various processes for the larger Design team such as onboarding resources, guides for hiring, contributing to the design system, etc.</li> -->
  </ul>
</article>
