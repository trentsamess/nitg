<template>
  <div class="contact-container">
      <div class="get-in-touch">get in touch</div>
      <div class="contact-us">Contact us:</div>
      <div class="contacts-bottom">
          <div class="contact-left">
              <font-awesome-icon color="#233247"  size="3x" rotation="90" :icon="['fas', 'phone']" class="contact-icon"/>
              <p class="contact-text">CONTACT DETAILS</p>
              <p class="contact-info">Please call us! We are happy to get in touch with you.</p>
              <button class="contact-button">+4915678573735</button>
          </div>
          <div class="contact-right">
               <font-awesome-icon  size="3x" :icon="['fas', 'envelope']" class="contact-icon"/>
              <p class="contact-text">EMAIL</p>
              <p class="contact-info">Please write us! We are happy to get in touch with you.</p>
              <button class="contact-button">office@northitgroup.com</button>
          </div>
      </div>
  </div>
</template>

<style lang="scss">
@import "../../scss/MainPage/contact-us.scss";
</style>