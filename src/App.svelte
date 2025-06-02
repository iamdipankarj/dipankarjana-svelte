<script lang="ts">
  import OkCreditLogo from './assets/okcredit.svg'
  import HealofyLogo from './assets/healofy.svg'
  import ClearfundsLogo from './assets/clearfunds.svg'
  import Milestone from './components/Milestone.svelte';
  import Experience from './components/Experience.svelte';
  import Education from './components/Education.svelte';
  import Social from './components/Social.svelte';
  import Contact from './components/Contact.svelte';
  import Languages from './components/Languages.svelte';
  import SkillsContainer from './components/SkillsContainer.svelte';
  import ProjectsContainer from './components/ProjectsContainer.svelte';
  import { getExperienceYears, getTools } from './helpers';
    import LinkedInWidget from './components/LinkedInWidget.svelte';
</script>

<header>
  <div class="flex items-start">
    <div class="space-y-2 md:pr-16">
      <h1 class="font-semibold text-5xl">Dipankar Jana</h1>
      <h2 class="font-semibold text-xl">Associate Tech Lead (Frontend Engineering)</h2>
      <p class="!mt-8">Detail-oriented Frontend Engineer with <strong>{getExperienceYears()} years</strong> of experience building responsive, high-performance web applications using React, TypeScript, and modern JavaScript frameworks. Proven track record of delivering scalable UI solutions, collaborating cross-functionally with design and backend teams, and optimizing user experiences across devices. Passionate about clean code, accessibility, and continuously improving frontend architecture. I am currently working with <a class="text-lightGreenText underline" target="_blank" rel="nofollow" href="https://okcredit.in/">OkCredit</a>. Previously worked at <a class="text-lightGreenText underline" target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=com.healofy">Healofy</a> and <a class="text-lightGreenText underline" target="_blank" rel="nofollow" href="https://money.mobikwik.com/">Clearfunds</a> (acquired by MobiKwik).</p>
    </div>
    <img src='/profile.png' alt="Dipankar Jana" class="hidden md:block rounded-full w-40 h-40" />
  </div>
  <a href="/Dipankar_Jana_Resume_June_2025.pdf" class="mt-8 bg-primary px-4 py-2 text-center text-md font-semibold inline-block text-white hover:text-white cursor-pointer transition duration-200 ease-in-out rounded-full hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 w-full md:w-auto">
    Download Resume
  </a>
</header>
<h3 class="text-subheading mt-10 mb-6">Experience</h3>
<div class="flex pb-10 flex-col md:flex-row">
  <main class="space-y-6 w-full shrink-0 grow-1 pb-10 md:pb-0 md:w-3/4 md:pr-16">
    <Experience
      companyLogo={OkCreditLogo}
      position="Senior Software Engineer - OkCredit"
      duration="January 2021 — Present"
    >
      <p class="mb-4">Led a team of engineers in the development and designers of new and upcoming products.</p>
      <Milestone>Built the end-to-end frontend for the Loan platform, enabling <strong>$50 Million+</strong> in disbursal at scale.</Milestone>
      <Milestone>Led the migration of legacy codebases to modern frameworks like React, while leveraging <strong>HTML5</strong> and <strong>CSS3</strong> for improved performance and maintainability.</Milestone>
      <Milestone>Built several platform-related tools, such as an in-house component library and other utility libraries for <strong>React</strong> and <strong>React-Native</strong>.</Milestone>
      <Milestone>Have worked on building the base architecture for React apps, using plugins like <strong>Redux</strong>, <strong>Redux-observable</strong>, <strong>Redux-Saga</strong>, custom <strong>React hooks</strong>, and languages like <strong>TypeScript</strong>.</Milestone>
      <Milestone>Have worked on solidifying design language between multiple projects and used tools like <strong>styled components</strong>, <strong>CSS-in-JS</strong>, <strong>TailwindCSS</strong> to maintain consistency across applications when required.</Milestone>
      <Milestone>Implemented <strong>CI/CD</strong> pipelines using <strong>GitHub Actions</strong> to automate build, test, and deployment processes for our applications.</Milestone>
      <Milestone>Boosted user engagement by 30% by optimizing UI components and ensuring responsive design practices.</Milestone>
      <Milestone>Optimized large-scale data handling by virtualizing React tables and modularizing components, enabling smooth performance with 15,000+ transactions and 20,000+ inventory items. Reduced load times by shifting backend API calls to on-demand logic.</Milestone>
      <Milestone>Contributed to OkDebit, a repayment collection management app, by developing a Windows application using Tauri (a Rust-based framework). The app syncs financial data from Tally to OkDebit, allowing users to manage all collections and payments in one place by integrating Tally with our backend systems.</Milestone>
    </Experience>
    <Experience
      companyLogo={HealofyLogo}
      position="Software Developer - Healofy"
      duration="June 2018 — January 2021"
    >
      <p class="mb-4">The core application stack uses Google Cloud Platform for the backend and <strong>React.js</strong>, <strong>Next.js</strong> for the frontend.</p>
      <Milestone>Used modern technologies such as SASS, ES6, and Webpack.</Milestone>
      <Milestone>Increased operational efficiency by 25% by developing several internal tools and dashboards for the operations team.</Milestone>
      <Milestone>Optimized the legacy webpages to reduce the <strong>page load time by 60%</strong>, enhancing user retention.</Milestone>
      <Milestone>Enabled a <strong>20% user retention</strong> increase by implementing a new user onboarding process.</Milestone>
    </Experience>
    <Experience
      companyLogo={ClearfundsLogo}
      position="Front End Developer - Clearfunds"
      duration="May 2017 — May 2018"
    >
      <p class="mb-4">Clearfunds was an online platform for buying and selling mutual funds.</p>
      <Milestone>Increased investor fund allocation efficiency by 30% using Vue.js for Fund Finder's user-friendly frontend.</Milestone>
      <Milestone>Enhanced backend efficiency by 40% through collaborating on Ruby on Rails integrations.</Milestone>
      <Milestone><strong>Investor Dashboard</strong> - Created a dashboard that is used by investors, development required the use of <strong>Vue.js</strong> and <strong>Vue-Router</strong>.</Milestone>
      <Milestone>Have built a <strong>Vue</strong> component library for investor dashboards.</Milestone>
      <Milestone>Increased mobile user retention by 20% by designing responsive UI components.</Milestone>
    </Experience>
    <ProjectsContainer />
  </main>
  <aside class="shrink-0 space-y-8 w-full md:w-1/4">
    <Contact />
    <LinkedInWidget />
    <div>
      <h4 class="font-semibold text-lg tracking-wide mb-4">Programming Skills</h4>
       <SkillsContainer />
    </div>
    <div>
      <h4 class="font-semibold text-lg tracking-wide mb-4">Tools</h4>
      <p class="text-subheading">{getTools().join(' / ')}</p>
    </div>
    <Education />
    <Social />
    <Languages />
  </aside>
</div>
<footer class="text-footertext text-sm py-10 px-6 text-center">
  Copyright &copy; {new Date().getFullYear()} | All rights reserved | Dipankar Jana
</footer>
