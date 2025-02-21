<script lang="ts">
  import TwitterLogo from '../assets/twitter.svg'
  import LinkedInLogo from '../assets/linkedin.svg'
  import GithubLogo from '../assets/github.svg'
</script>

<div>
  <h4 class="font-semibold text-lg tracking-wide mb-4">Social</h4>
  <div class="space-y-4">
    <a class="flex items-center gap-3" href="https://x.com/iamdipankarj" rel="nofollow" target="_blank">
      <img src={TwitterLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Twitter</h4>
        <p class="text-socialtext font-semibold tracking-wide">@iamdipankarj</p>
      </div>
    </a>
    <a class="flex items-center gap-3" href="https://www.linkedin.com/in/iamdipankarj" rel="nofollow" target="_blank">
      <img src={LinkedInLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">LinkedIn</h4>
        <p class="text-socialtext font-semibold tracking-wide">@iamdipankarj</p>
      </div>
    </a>
    <a class="flex items-center gap-3" href="https://github.com/iamdipankarj" rel="nofollow" target="_blank">
      <img src={GithubLogo} alt="Education" class="block w-10 h-10 shrink-0" />
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Github</h4>
        <p class="text-socialtext font-semibold tracking-wide">@iamdipankarj</p>
      </div>
    </a>
  </div>
</div>
