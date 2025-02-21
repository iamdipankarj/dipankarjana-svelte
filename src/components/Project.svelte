<script lang="ts">
  export let src: string;
  export let title: string;
  export let demoLink: string;
  export let githubLink: string;
  export let description: string;

</script>

<div class="flex flex-col rounded-lg bg-white md:flex-row text-surface">
  <img class="h-48 w-full rounded-lg object-cover md:h-auto md:w-48" src={src} alt="">
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-2 text-xl font-medium">
      {title}
    </h5>
    <p class="mb-4 text-base">
      {description}
    </p>
    <div class="flex space-x-4">
    <a href={demoLink} target="_blank" class="text-sm text-surface/75 underline text-lightPurpleText">
        View Demo
      </a>
      <a href={githubLink} target="_blank" class="text-sm text-surface/75 underline text-lightPurpleText">
        View on Github
      </a>
    </div>
  </div>
</div>
