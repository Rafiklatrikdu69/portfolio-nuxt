export const useToggleStore = defineStore('toggler', () => {
    const toggle = ref('Return to the page project');
    const yes = ref(false);
    const link = ref('/projets')
    function toggleLinkPage() {
      yes.value = !yes.value;
      toggle.value = yes.value ?  'Return to the page skill' : 'Return to the page project' ;
      link.value = yes.value ? '/competences' :  '/projets' ;
    }
  
    return { toggle, yes, toggleLinkPage,link };
  });
  