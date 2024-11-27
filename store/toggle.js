export const useToggleStore = defineStore('toggler', () => {
    const toggle = ref('Retour aux projets');
    const yes = ref(false);
    const link = ref('/projets')
    function toggleLinkPage() {
      yes.value = !yes.value;
      toggle.value = yes.value ?  'Retour à la page des compétences' : 'Retour aux projets' ;
      link.value = yes.value ? '/competences' :  '/projets' ;
    }
  
    return { toggle, yes, toggleLinkPage,link };
  });
  