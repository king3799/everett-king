<script lang="ts">
  import { page } from '$app/stores';
  import { projects, type Project } from '$lib/projects';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let project: Project | undefined;

  $: {
    const slug = $page.params.slug;
    project = projects.find(p => p.slug === slug);
    console.log('Loading project:', slug, project);
  }
</script>

<Header />

<main class="p-6">
  {#if project}
    <h1 class="text-3xl font-bold mb-4">{project.title}</h1>
    <img src={project.img} alt={project.title} class="rounded mb-4"/>
    <p class="mb-4">{project.desc}</p>
    <a href="/" class="text-blue-500 underline">← Back to Dashboard</a>
  {:else}
    <p>Project not found.</p>
  {/if}
</main>

<Footer />