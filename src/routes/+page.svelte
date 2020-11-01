<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/projects';
  import logo from '$lib/assets/office.png';

  let passwordInput = '';
  let showDashboard = true;
  const correctPassword = 'susan123';

  function checkPassword() {
    console.log('Password entered:', passwordInput);
    if (passwordInput === correctPassword) {
      showDashboard = true;
    } else {
      alert('Incorrect password!');
      passwordInput = '';
    }
  }

  const skills = ['HTML','Bootstrap','Tailwind CSS', 'CSS', 'PHP', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Laravel', 'REST APIs' , 
                  'Express.js', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 
                   "Django",'Next.js', 'C/C++', 'GitHub', 'Postman'];
   const products = [
    {
      id: 3,
      name: 'Headphones',
      image: '/images/eshop.png'
    },
    {
      id: 1,
      name: 'Education',
      image: '/images/education.png',
      description : "I developed engaging frontend experiences for an educational content platform covering the latest trends, tutorials, and insights in quantum computing and emerging technologies."
    },
    {
      id: 2,
      name: 'E-commerce',
      image: '/images/ecommerce.png'
    }
  ];

 let searchQuery = '';
  $: filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
</script>

{#if !showDashboard}
  <!-- Password Modal -->
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded shadow-lg w-80">
      <h2 class="text-lg font-bold mb-4">Enter Password</h2>
      <input type="password" bind:value={passwordInput} class="w-full p-2 border rounded mb-4"/>
      <button on:click={checkPassword} class="bg-blue-500 text-white px-4 py-2 rounded w-full">Submit</button>
    </div>
  </div>
{:else}
  <!-- Dashboard -->
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <!-- Summary -->
        <section class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Summary</h2>
          <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
            Full-Stack Web Developer with hands-on experience building responsive, scalable web applications using modern frontend and backend technologies for 5+ years. Strong collaborator who works closely with designers and stakeholders to deliver clean, user-focused solutions. Known for rapid learning, clear communication, and taking ownership of features from concept to deployment.
          </div>
        </section>

        <!-- Skills -->
        <section class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Key Skills</h2>
          <div class="flex flex-wrap gap-2">
            {#each skills as skill}
              <span class="bg-blue-500 text-white px-3 py-1 rounded cursor-default hover:scale-105 transition">{skill}</span>
            {/each}
          </div>
        </section>

        <!-- Search -->
        <!-- <section class="mb-4">
          <input type="text" bind:value={searchQuery} placeholder="Search projects..." class="p-2 rounded w-60"/>
        </section> -->

        <!-- Projects -->
        <section>
          <h2 class="text-2xl font-bold mb-4">Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each products as product}
              <ProjectCard {product} />
            {/each}
            {#if filteredProjects.length === 0}
              <p class="text-gray-500 col-span-full">No results found.</p>
            {/if}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
{/if}