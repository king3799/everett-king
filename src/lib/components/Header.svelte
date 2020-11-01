<script lang="ts">
  let darkMode = false;

  function toggleDark() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
  }
</script>

<header class="flex justify-between items-center p-4 bg-blue-500 text-white sticky top-0 z-10 shadow">
  <h2 class="text-2xl font-bold mb-2">Full Stack Developer</h2>
</header>