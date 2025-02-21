<script lang="ts">
  import EnglishLogo from '../assets/english.svg'
  import HindiLogo from '../assets/hindi.svg'
</script>

<div>
  <h4 class="font-semibold text-lg tracking-wide mb-4">Spoken Languages</h4>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <img src={EnglishLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-md font-semibold tracking-wide">English</h4>
        <p class="text-socialtext text-sm tracking-wide">Full Professional Profiency</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <img src={HindiLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-md font-semibold tracking-wide">Hindi</h4>
        <p class="text-socialtext text-sm tracking-wide">Native or bilingual proficiency</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <img src={HindiLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-md font-semibold tracking-wide">Bengali</h4>
        <p class="text-socialtext text-sm tracking-wide">Native or bilingual proficiency</p>
      </div>
    </div>
  </div>
</div>
