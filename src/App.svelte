<script lang="ts">
  import ProfileImage from './assets/profile.jpg'
  import OkCreditLogo from './assets/okcredit.svg'
  import HealofyLogo from './assets/healofy.svg'
  import ClearfundsLogo from './assets/clearfunds.svg'
  import Milestone from './lib/Milestone.svelte';
  import Experience from './lib/Experience.svelte';
  import Education from './lib/Education.svelte';
  import Social from './lib/Social.svelte';
  import Contact from './lib/Contact.svelte';

  import { getExperienceYears, getSkills, getTools } from './helpers';
    import Languages from './lib/Languages.svelte';
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
<h3 class="text-subheading mt-10 mb-6">Experience</h3>
<div class="flex pb-10">
  <main class="space-y-6 w-3/4 pr-16 shrink-0 grow-1">
    <Experience
      companyLogo={OkCreditLogo}
      position="Associate Tech Lead - OkCredit"
      duration="March 2022 — Present"
    >
      <Milestone>Currently working as ATL for frontend team and involved in shipping and development of multiple web projects across organization.</Milestone>
    </Experience>
    <Experience
      companyLogo={OkCreditLogo}
      position="Senior Software Engineer - OkCredit"
      duration="January 2021 — February 2022"
    >
      <Milestone>Built several platform related tools such as an in-house component library and other utility libraries for react and react-native.</Milestone>
      <Milestone>Have worked on the mobile PWA version of OkCredit web.</Milestone>
      <Milestone>Have worked on building base architecture for react apps, used plugins like redux, rxjs, redux-saga, custom react hooks and used tools like typescript.</Milestone>
      <Milestone>Have worked on solidifying design language between multiple projects and used tools like styled- components, JSS to maintain consistency across applications when required.</Milestone>
      <Milestone>Have integrated various payment services like PayTm, Razorpay and Juspay.</Milestone>
      <Milestone>Have worked in setting up CI/CD pipelines for our applications using Github Actions.</Milestone>
      <Milestone>Built custom Github Action toolkit library for automating CI/CD workflows.</Milestone>
      <Milestone>Have set up Unit tests for various web projects across organization.</Milestone>
      <Milestone>Used tools like LogRocket and New-Relic for measuring and improving performance.</Milestone>
      <Milestone>Shipped multiple web based extensions for OkCredit android app.</Milestone>
    </Experience>
    <Experience
      companyLogo={HealofyLogo}
      position="Software Developer - Healofy"
      duration="June 2018 — January 2021"
    >
      <Milestone>Healofy is a social network for Moms &amp; Pregnant Moms. Our core application stack uses Google App Engine for the backend and React.js for the frontend side of the application, was involved in the development of the web application which required the use of some modern technologies such as SASS, ES6 and webpack.</Milestone>
      <Milestone>Have built several internal tools and dashboards for operations team.</Milestone>
    </Experience>
    <Experience
      companyLogo={ClearfundsLogo}
      position="Front End Developer - Clearfunds"
      duration="July 2017 — May 2018"
    >
      <Milestone>Clearfunuds (Acquired by MobiKwik), Mumbai
        Now acquired by MobiKwik. Our core application stack uses Ruby on Rails for the backend and Vue.js for the frontend for parts of our application. Development of the single page application which involved the use of some modern technologies such as SASS, ES6 and webpack. Have been a part of the team which integrated Vue.js in our core application and moved from traditional Rails views.</Milestone>
      <Milestone>Fund Finder - A tool that helps investors choose which funds to invest in. The frontend is built entirely on top of Vue.js.</Milestone>
      <Milestone>Investor Dashboard - Created a dashboard that is used by investors, development required the use of Vue.js, Vue-router.</Milestone>
      <Milestone>Vue component library for investor dashboards.</Milestone>
      <Milestone>Testing: For testing we used Mocha to write unit tests for Vue components.</Milestone>
    </Experience>
  </main>
  <aside class="shrink-0 w-1/4 space-y-8">
    <div>
      <h4 class="font-semibold text-lg tracking-wide mb-4">Programming Skills</h4>
      <p class="text-subheading">{getSkills().join(' / ')}</p>
    </div>
    <div>
      <h4 class="font-semibold text-lg tracking-wide mb-4">Tools</h4>
      <p class="text-subheading">{getTools().join(' / ')}</p>
    </div>
    <Education />
    <Social />
    <Contact />
    <Languages />
  </aside>
</div>
<footer class="text-footertext text-sm py-10 px-6 text-center">
  Copyright &copy; {new Date().getFullYear()} | All rights reserved | Dipankar Jana
</footer>
