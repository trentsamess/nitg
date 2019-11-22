<template>
  <div class="black-header-container">
    <b-container>
      <b-navbar>
        <b-navbar-brand>
          <img src="../assets/NorthLogoWhite.png" alt="logo" class="image" />
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" style="color:#fff;">
            <b-nav-item href="/" class="item-nitg">HOME</b-nav-item>
            <b-nav-item href="/about-us" class="item-nitg">ABOUT US</b-nav-item>
            <b-nav-item href="#" class="item-nitg">NEWS</b-nav-item>
            <b-nav-item-dropdown text="PRODUCTS & SERVICES" right class="item-nitg">
              <b-dropdown-item href="/website-development" class="item-nitg">Website development</b-dropdown-item>
              <b-dropdown-item href="/it-outsourcing" class="item-nitg">IT Outsourcing</b-dropdown-item>
              <b-dropdown-item href="/software-engineering" class="item-nitg">Software Engineering</b-dropdown-item>
              <b-dropdown-item href="/it-consulting" class="item-nitg">IT Consulting</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" class="item-nitg">CONTACT US</b-nav-item>
            <b-nav-item-dropdown text="EN" right class="item-nitg">
              <b-dropdown-item href="#" class="item-nitg"><img class="header-flag" src="https://northitgroup.com/wp-content/plugins/wpglobus/flags/de.png" />DE</b-dropdown-item>
              <b-dropdown-item href="#" class="item-nitg"><img class="header-flag" src="https://northitgroup.com/wp-content/plugins/wpglobus/flags/ru.png" />RU</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

  <script>
    export default {
      name: "Header"
};
</script>


  <style lang="scss">
    @import "../scss/headerBlack.scss";
</style>
