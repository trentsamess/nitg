<template>
  <b-container>
    <b-navbar>
      <b-navbar-brand>
        <img src="../assets/NorthLogo.png" alt="logo" class="image" />
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" style="color:#233247;">
          <b-nav-item href="#" class="item-nitg">HOME</b-nav-item>
          <b-nav-item href="#" class="item-nitg">ABOUT US</b-nav-item>
          <b-nav-item href="#" class="item-nitg">NEWS</b-nav-item>
          <b-nav-item-dropdown text="PRODUCTS & SERVICES" right class="item-nitg">
            <b-dropdown-item href="#" class="item-nitg">Website development</b-dropdown-item>
            <b-dropdown-item href="#" class="item-nitg">IT Outsourcing</b-dropdown-item>
            <b-dropdown-item href="#" class="item-nitg">Software Engineering</b-dropdown-item>
            <b-dropdown-item href="#" class="item-nitg">IT Consulting</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#" class="item-nitg">CONTACT US</b-nav-item>
          <b-nav-item-dropdown text="EN" right class="item-nitg">
            <b-dropdown-item href="#" class="item-nitg"><img class="header-flag" src="https://northitgroup.com/wp-content/plugins/wpglobus/flags/de.png"/>DE</b-dropdown-item>
            <b-dropdown-item href="#" class="item-nitg"><img class="header-flag" src="https://northitgroup.com/wp-content/plugins/wpglobus/flags/ru.png"/>RU</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

  <script>
    export default {
      name: "Header"
};
</script>


  <style lang="scss">
    @import "../scss/Header.scss";
</style>
