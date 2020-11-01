<script lang="ts">
  import { Mail, Phone, Github } from 'lucide-svelte';
  import logo from '$lib/assets/office.png';
</script>

<div class="w-1/5 min-w-[200px] bg-gray-800 text-white flex flex-col items-center p-4 sticky top-0 h-screen">
  <div class="my-[150px]">
    <img src={logo} class="w-45 h-35 rounded-full mb-2"/>
    <p class="font-bold mb-4 text-[25px] ">Susan Miller</p>

    <a href="mailto:susan0907miller@outlook.com" class="flex items-center gap-2 mb-2">
    <Mail class="w-5 h-5"/> Email
    </a>
    
    <a href="tel:+6590907xxxx" class="flex items-center gap-2 mb-2">
    <Phone class="w-5 h-5"/> Phone
    </a>
    <a href="https://github.com/Susan0907Miller" target="_blank" class="flex items-center gap-2">
    <Github class="w-5 h-5"/> GitHub
    </a>
  </div>
</div>