<script lang="ts">
  export let companyLogo: string
  export let position: string
  export let duration: string
</script>
<article>
  <div class="flex items-center">
    <div class="w-16 shrink-0">
      <img src={companyLogo} alt="OkCredit" class="block w-12 h-12" />
    </div>
    <div class="flex flex-col flex-1">
      <h4 class="font-semibold text-lg tracking-wide">{position}</h4>
      <p class="text-subheading text-md">{duration}</p>
    </div>
  </div>
  <ul class="space-y-1 mt-4">
    <slot />
  </ul>
</article>
