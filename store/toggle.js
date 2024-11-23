export const useToggleStore = defineStore('toggleer', () => {
    const toggle = ref('Retour aux projets');
    const yes = ref(false);
    const link = ref('/projets')
    function toggleLinkPage() {
      yes.value = !yes.value;
      toggle.value = yes.value ? 'Retour aux projets' : 'Retour à la page des compétences';
      link.value = yes.value ? '/projets' : '/competences';
    }
  
    return { toggle, yes, toggleLinkPage,link };
  });
  