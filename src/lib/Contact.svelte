<script lang="ts">
  import EmailIcon from '../assets/email.svg'
  import LinkIcon from '../assets/website.svg'
  import PhoneIcon from '../assets/phone.svg'
  import LocationIcon from '../assets/location.svg'
</script>

<div>
  <h4 class="font-semibold text-lg tracking-wide mb-4">Contact</h4>
  <div class="space-y-4">
    <a class="flex items-center gap-3" href="mailto:iamdipankarj@gmail.com" rel="nofollow" target="_blank">
      <div class="w-10 h-10 bg-socialicon rounded-full flex items-center justify-center shrink-0">
        <img src={EmailIcon} alt="Education" class="block w-6 h-6 shrink-0" />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Email</h4>
        <p class="text-socialtext font-semibold tracking-wide">iamdipankarj@gmail.com</p>
      </div>
    </a>
    <a class="flex items-center gap-3" href="https://dipankarjana.com" rel="nofollow" target="_blank">
      <div class="w-10 h-10 bg-socialicon rounded-full flex items-center justify-center shrink-0">
        <img src={LinkIcon} alt="Education" class="block w-6 h-6 shrink-0" />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Website</h4>
        <p class="text-socialtext font-semibold tracking-wide">https://dipankarjana.com</p>
      </div>
    </a>
    <a class="flex items-center gap-3" href="tel:9674878096" rel="nofollow" target="_blank">
      <div class="w-10 h-10 bg-socialicon rounded-full flex items-center justify-center shrink-0">
        <img src={PhoneIcon} alt="Education" class="block w-6 h-6 shrink-0" />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Phone</h4>
        <p class="text-socialtext font-semibold tracking-wide">(+91) 9674878096</p>
      </div>
    </a>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-socialicon rounded-full flex items-center justify-center shrink-0">
        <img src={LocationIcon} alt="Education" class="block w-6 h-6 shrink-0" />
      </div>
      <div class="flex flex-col flex-1 gap-1">
        <h4 class="text-sm tracking-wide text-social">Location</h4>
        <p class="text-socialtext font-semibold tracking-wide">Kolkata / Bengaluru</p>
      </div>
    </div>
  </div>
</div>
