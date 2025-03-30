<template>
  <div class="isolate px-6 py-24 sm:py-32 lg:px-8">
    <!-- Background decoration -->
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <!-- Main content -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Contact me</h2>
      <p class="mt-2 text-lg/8">Send your feedback to my portfolio :)</p>
    </div>

    <!-- Contact form -->
    <form @submit.prevent="handleSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <!-- First Name -->
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold">First name</label>
          <div class="mt-2.5">
            <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
          </div>
        </div>

        <!-- Last Name -->
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold">Last name</label>
          <div class="mt-2.5">
            <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
          </div>
        </div>

        <!-- Email -->
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold">Email</label>
          <div class="mt-2.5">
            <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
          </div>
        </div>

        <!-- Message -->
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold">Message</label>
          <div class="mt-2.5">
            <textarea v-model="formData.message" name="message" id="message" rows="4" class="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
          </div>
        </div>
      </div>

      <!-- reCAPTCHA Widget -->
      <div class="mt-6">
        <div id="recaptcha-container" class="g-recaptcha" data-sitekey="6LdwcAQrAAAAAPoMm4Oeqsi1Y9jgYr0cx7BOd5UY" data-action="contact"></div>
      </div>

      <!-- Submit Button -->
      <div class="mt-10">
        <button type="submit" :disabled="loading" class="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50">
          {{ loading ? 'Sending...' : 'Send' }}
        </button>
      </div>
    </form>
  </div>

  <!-- Footer -->
  <footer class="mt-auto">
    <TheFooter />
  </footer>
</template>

<script setup>


definePageMeta({
  layout: 'nav'
});

const loading = ref(false);
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
});

const recaptchaToken = ref(null);

// Utiliser useHead pour ajouter le script reCAPTCHA dans la section <head>
useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js',
      async: true,
      defer: true,
      onload: setupRecaptcha
    }
  ]
});

function setupRecaptcha() {
  window.grecaptcha.ready(() => {
    window.grecaptcha.execute('6LdwcAQrAAAAAPoMm4Oeqsi1Y9jgYr0cx7BOd5UY', { action: 'contact' }).then((token) => {
      recaptchaToken.value = token;
    });
  });
}

async function handleSubmit() {
  if (!recaptchaToken.value) {
    alert("Please complete the reCAPTCHA.");
    return;
  }

  console.log("Starting form submission with reCAPTCHA token:", recaptchaToken.value);

  try {
    const response = await $fetch('/api/verify-recaptcha', {
      method: 'POST',
      body: JSON.stringify({ token: recaptchaToken.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)
    if (response.statusCode === 400) {
      throw new Error('Invalid reCAPTCHA');
    }

    loading.value = true;
    const htmlContent = `
      <div style="padding: 20px; background-color: #f5f5f5; font-family: sans-serif;">
        <h1 style="color: #333;">Nouveau message de ${formData.value.firstName} ${formData.value.lastName}</h1>
        <div style="margin-top: 20px;">
          <p><strong>Nom:</strong> ${formData.value.firstName} ${formData.value.lastName}</p>
          <p><strong>Email:</strong> ${formData.value.email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${formData.value.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      </div>
    `;

    const emailResponse = await $fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.value.email,
        html: htmlContent,
        subject: `Contact from ${formData.value.firstName} ${formData.value.lastName}`,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    alert('Message envoyé avec succès!');
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error("Error during form submission:", error);
    alert(`Erreur lors de l'envoi : ${error.message}`);
  } finally {
    loading.value = false;
  }
}
</script>
