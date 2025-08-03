export const useToggleStore = defineStore('toggler', () => {
    const toggle = ref('Retour à la page projet');
    const yes = ref(false);
    const link = ref('/projets');

    function toggleLinkPage() {
      yes.value = !yes.value;
      toggle.value = yes.value ? 'Retour à la page compétence' : 'Retour à la page projet';
      link.value = yes.value ? '/competences' : '/projets';
    }

    return { toggle, yes, toggleLinkPage, link };
});
