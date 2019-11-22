<template>
  <footer class="footer-container">
    <div class="row">
      <div class="footer-socials">
        <div>
          <img src="../assets/black_NIT_Logo.png" class="footerLogo" />
        </div>
        <div class="container-1">
          <a href="https://www.facebook.com/northitgroup/">
            <div class="circle">
              <li class="circle-item">
                <font-awesome-icon style="color: #fff" :icon="['fab', 'facebook-f']" size="xs" />
              </li>
            </div>
          </a>
              <a href="https://www.linkedin.com/company/north-it-group/">
          <div class="circle">
            <li class="circle-item">
                <font-awesome-icon style="color: #fff" :icon="['fab', 'linkedin-in']" size="xs" />
            </li>
          </div>
              </a>
              <a href="https://www.xing.com/companies/ooonorthitgroup">
          <div class="circle">
            <li class="circle-item">
                <font-awesome-icon style="color: #fff" :icon="['fab', 'xing']" size="xs" />
            </li>
          </div>
              </a>
              <a href="https://www.instagram.com/northitgroup/">
          <div class="circle">
            <li class="circle-item">
                <font-awesome-icon style="color: #fff" :icon="['fab', 'instagram']" size="xs" />
            </li>
          </div>
              </a>
        </div>
      </div>
      <div class="footer-company">
        <h5 class="widget-title">Company</h5>
        <div class="menu-container-center">
          <li class="footer-link">About us</li>
          <li class="footer-link">Imprint</li>
          <li class="footer-link">Privacy</li>
          <li class="footer-link">Career</li>
        </div>
      </div>
      <div class="footer-links">
        <h5 class="widget-title">Contact us</h5>

        <a href="tel:+375(29)-286-76-15" class="footer-link">
          <font-awesome-icon
            style="color: #fff"
            rotation="90"
            :icon="['fas', 'phone']"
            class="footer-icon"
          />+375(29)-286-76-15
        </a>

        <a href="tel:+4915678573735" class="footer-link">
          <font-awesome-icon
            style="color: #fff"
            rotation="90"
            :icon="['fas', 'phone']"
            class="footer-icon"
          />+4915678573735
        </a>
        <a href="mailto:office@northitgroup.com" class="footer-link">
          <font-awesome-icon color="white" :icon="['fas', 'envelope']" class="footer-icon" />office@northitgroup.com
        </a>
        <p class="widget-title-2">Subscribe Now</p>
        <form action="post">
          <input placeholder="Enter your email" type="email" class="footer-input" />
          <button class="send-button">
            <font-awesome-icon
              style="color: #fff"
              :icon="['fab', 'telegram-plane']"
              size="1x"
              class="telega-icon"
            />
          </button>
        </form>
      </div>
    </div>
    <div class="container-bottom">
      <p class="north-text">NORTH IT GROUP - 2019</p>
    </div>
    <back-to-top bottom="10px" right="1370px">
      <button type="button" class="btn btn-dark btn-to-top">
        <font-awesome-icon color="white" :icon="['fas', 'angle-up']" size="lg"/>
      </button>
    </back-to-top>
  </footer>
</template>

<style lang="scss">
@import "../scss/Footer.scss";
</style>