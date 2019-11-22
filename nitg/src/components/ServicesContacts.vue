<template>
  <div class="services-contacts-image-container">
    <div class="services-contacts-container">
      <p class="services-contacts-title">CONTACT US</p>
      <div class="service-contacts-row">
        <div class="services-contacts-left">
          <font-awesome-icon class="contact-icon" size="3x" rotation="90" :icon="['fas', 'phone']" />
          <p class="contact-text">CALL</p>
          <button class="contact-button">+4915678573735</button>
        </div>
        <div class="services-contacts-right">
          <font-awesome-icon size="3x" :icon="['fas', 'envelope']" class="contact-icon" />
          <p class="contact-text">WRITE</p>
          <button class="contact-button">office@northitgroup.com</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/servicescontacts.scss";
</style>