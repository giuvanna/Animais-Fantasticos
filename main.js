function initTabNav() {
  /** Selecionar imagens  */
  const tabMenu = document.querySelectorAll(".js-tabmenu li");

  /** Selecionar texto que descreve a imagem */
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //Primeiro item sempre ativo
    tabContent[0].classList.add("ativo");

    // activeTab = ativar tab
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    /** Adicionar evento click a cada imagem */
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();
