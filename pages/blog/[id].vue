<script setup>
definePageMeta({
  layout: 'nav',
});
import { marked } from 'marked';

const route = useRoute();
const router = useRouter();
const { id } = route.params;
const { data: detail_post } = await useFetch(`/api/post/${id}/detail`)
marked.setOptions({
  breaks: true,
  gfm: true,
});

const isLoading = ref(true);
const errorMessage = ref(null);
if (!detail_post.value.detail_post[0]?.url_readme) {
  router.push('/blog');
}

const { data: readme, pending, error } = await useFetch(
  `https://api.github.com/repos/${detail_post.value.detail_post[0].url_readme}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GIT_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      onResponse() {
        isLoading.value = false;
      },
      onResponseError(error) {
        errorMessage.value = error.message;
        isLoading.value = false;
      }
    }
);

const renderedReadme = computed(() => {
  if (readme.value?.content) {
    const base64Content = readme.value.content;
    const decodedContent = atob(base64Content);
    return marked(decodedContent);
  }
  return '';
});
</script>

<template>
  <div class="min-h-screen from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          Project README
        </h1>
      </div>

      <div
          v-if="pending"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex justify-center items-center min-h-[200px]"
      >
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      <div
          v-else-if="error"
          class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center"
      >
        <p class="text-red-600 dark:text-red-400">
          Failed to load README: {{ errorMessage || 'Unknown error occurred' }}
        </p>
        <button
            @click="$router.go(-1)"
            class="mt-4 px-4 py-2 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-700 transition-colors"
        >
          Go Back
        </button>
      </div>

      <div
          v-else-if="renderedReadme"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      >
        <div class="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4.75C0 3.784.784 3 1.75 3h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25H1.75zM3.5 6.25a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75z"/>
            </svg>
            <span>README.md</span>
          </div>
        </div>

        <div
            class="markdown-body p-6"
            v-html="renderedReadme"
        ></div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.markdown-body {
  font-size: 16px;
  line-height: 1.6;
  color: #24292f;
}

.dark .markdown-body {
  color: #c9d1d9;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2) {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #d0d7de;
}

.dark .markdown-body :deep(h1),
.dark .markdown-body :deep(h2) {
  border-bottom-color: #30363d;
}

.markdown-body :deep(:not(pre) > code) {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.dark .markdown-body :deep(:not(pre) > code) {
  background-color: rgba(110, 118, 129, 0.4);
}

.markdown-body :deep(pre) {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
  margin-bottom: 16px;
}

.dark .markdown-body :deep(pre) {
  background-color: #161b22;
}

.markdown-body :deep(pre code) {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
  display: block;
  overflow-x: auto;
  color: #24292f;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.dark .markdown-body :deep(pre code) {
  color: #c9d1d9;
}

.markdown-body :deep(a) {
  color: #0969da;
  text-decoration: none;
}

.dark .markdown-body :deep(a) {
  color: #58a6ff;
}

.markdown-body :deep(a:hover) {
  text-decoration: underline;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-body :deep(blockquote) {
  padding: 0 1em;
  color: #57606a;
  border-left: 0.25em solid #d0d7de;
  margin: 0 0 16px 0;
}

.dark .markdown-body :deep(blockquote) {
  color: #8b949e;
  border-left-color: #30363d;
}

.markdown-body :deep(table) {
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 16px;
  width: 100%;
}

.markdown-body :deep(table tr) {
  background-color: #ffffff;
  border-top: 1px solid #d0d7de;
}

.dark .markdown-body :deep(table tr) {
  background-color: #0d1117;
  border-top-color: #30363d;
}

.markdown-body :deep(table tr:nth-child(2n)) {
  background-color: #f6f8fa;
}

.dark .markdown-body :deep(table tr:nth-child(2n)) {
  background-color: #161b22;
}

.markdown-body :deep(table th),
.markdown-body :deep(table td) {
  padding: 6px 13px;
  border: 1px solid #d0d7de;
}

.dark .markdown-body :deep(table th),
.dark .markdown-body :deep(table td) {
  border-color: #30363d;
}

.markdown-body :deep(img) {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #ffffff;
}

.dark .markdown-body :deep(img) {
  background-color: #0d1117;
}

.markdown-body :deep(hr) {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
  border: 0;
}

.dark .markdown-body :deep(hr) {
  background-color: #30363d;
}
</style>