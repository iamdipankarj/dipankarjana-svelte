<script lang="ts">
  import ProfileImage from './assets/profile.jpg'
  import OkCreditLogo from './assets/okcredit.svg'
  import Milestone from './lib/Milestone.svelte';
  import Experience from './lib/Experience.svelte';

  import { getExperienceYears } from './helpers';
</script>

<header>
  <div class="flex items-start">
    <div class="space-y-2 pr-16">
      <h1 class="font-semibold text-5xl">Dipankar Jana</h1>
      <h2 class="font-semibold text-xl">Associate Tech Lead (Frontend Engineering)</h2>
      <p class="!mt-8">👋 I'm Dipankar Jana. I am passionate about building rich user experiences. I am currently working with OkCredit. Previously worked at Healofy and Clearfunds (acquired by MobiKwik). I have total work experience of <strong>{getExperienceYears()} years</strong>.</p>
    </div>
    <img src={ProfileImage} alt="Dipankar Jana" class="block rounded-full w-40 h-40" />
  </div>
  <button class="mt-8 bg-primary px-4 py-2 text-center text-md font-semibold inline-block text-white cursor-pointer transition duration-200 ease-in-out rounded-full hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95">
    Download Resume
  </button>
</header>
<main class="mt-10 space-y-6">
  <h3 class="text-subheading">Experience</h3>
  <Experience
    companyLogo={OkCreditLogo}
    position="Associate Tech Lead"
    duration="March 2022 — Present"
  >
    <Milestone>Currently working as ATL for frontend team and involved in shipping and development of multiple web projects across organization.</Milestone>
  </Experience>
  <Experience
    companyLogo={OkCreditLogo}
    position="Associate Tech Lead"
    duration="March 2022 — Present"
  >
    <Milestone>Built several platform related tools such as an in-house component library and other utility libraries for react and react-native.</Milestone>
    <Milestone>Have worked on the mobile PWA version of OkCredit web.</Milestone>
    <Milestone>Have worked on building base architecture for react apps, used plugins like redux, rxjs, redux-saga, custom react hooks and used tools like typescript.</Milestone>
  </Experience>
</main>
