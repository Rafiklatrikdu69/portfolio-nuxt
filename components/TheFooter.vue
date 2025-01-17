<template>
  <footer class="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">About me</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Full-stack developer passionate about creating innovative and efficient web applications.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Quick links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/technologies" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Technologies
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projets" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/competences" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skill
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Follow me</h3>
          <div class="flex space-x-4">
            <a href="https://github.com/Rafiklatrikdu69"
               target="_blank"
               class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://x.com/Rafgame38"
               target="_blank"
               class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rafik-bouchenna-33ab2b250/l"
               target="_blank"
               class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-center text-gray-600 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Rafiki. All right Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>