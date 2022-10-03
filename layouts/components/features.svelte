<script>
import Waves from '../components/waves.svelte';
//tabs
let openTab = 1
function toggleTabs(tabNumber){
    openTab = tabNumber
}
</script>
<Waves />
<section class="section pricing" id="pricing" aria-label="pricing">
    <div class="container">

      <!-- <p class="section-subtitle has-before text-center">Features</p> -->

      <h2 class="h2 section-title text-center">Why use <span class="has-before">Plenti</span> ?</h2>
      <p class="h4 section-text text-center" style="font-size: 2.5rem; color: white;">
        Edit right on the page. That's how easy it is to maintain the content on your site.
      </p>
      <div class="intro-wrapper">
        <div class="nav-wrapper">

            <!-- Link around dots-wrapper added after tutorial video -->
            <a href=".">
                <div class="dots-wrapper">
                    <div id="dot-1" class="browser-dot"></div>
                    <div id="dot-2" class="browser-dot"></div>
                    <div id="dot-3" class="browser-dot"></div>
                </div>
            </a>
            <ul id="navigation">
                <!-- <li><a href="index.html#contact">Contact</a></li> -->
                <li><a href="https://github.com/plentico/plenti"><img src="./assets/github.svg" alt="GitHub Octocat Icon"></a></li>
            </ul>
        </div>
      <div class="pricing-tab-container">

        <ul class="tab-filter">
           
          <li >
            <button class="filter-btn {openTab === 1 }" on:click={() => toggleTabs(1)} data-filter-btn="No Security Updates">
              <div class="btn-icon">
                <img src="./assets/security.svg" width="100" height="100" alt="No Security Updates">
                <!-- <i class="flaticon-beauty-salon" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">No Security Updates</p>
            </button>
          </li>

          <li>
            <button class="filter-btn {openTab === 2 }" on:click={() => toggleTabs(2)} data-filter-btn="Cheap/Free Hosting">
              <div class="btn-icon">
                <img src="./assets/hosting.svg" width="100" height="100" alt="Cheap/Free Hosting">
                <!-- <i class="flaticon-relax" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">Cheap/Free Hosting</p>
            </button>
          </li>

          <li>
            <button class="filter-btn {openTab === 3 }" on:click={() => toggleTabs(3)} data-filter-btn="Fast Page Loads">
              <div class="btn-icon">
                <img src="./assets/speed.svg" width="100" height="100" alt="Fast Page Loads">
                <!-- <i class="flaticon-massage" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">Fast Page Loads</p>
            </button>
          </li>

          <li>
            <button class="filter-btn {openTab === 4 }" on:click={() => toggleTabs(4)} data-filter-btn="Fast Build Times">
              <div class="btn-icon">
                <img src="./assets/builds.svg" width="100" height="100" alt="Fast Build Times">
                <!-- <i class="flaticon-spa" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">Fast Build Times</p>
            </button>
          </li>

          <li>
            <button class="filter-btn {openTab === 5 }" on:click={() => toggleTabs(5)} data-filter-btn="Distributed Sites">
              <div class="btn-icon">
                <img src="./assets/cdn.svg" width="100" height="100" alt="Distributed Sites">
                <!-- <i class="flaticon-yoga" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">Distributed Sites</p>
            </button>
          </li>

          <li>
            <button class="filter-btn {openTab === 6 }" on:click={() => toggleTabs(6)} data-filter-btn="No Vendor Lock-In">
              <div class="btn-icon">
                <img src="./assets/vendor.svg" width="100" height="100" alt="No Vendor Lock-In">
                <!-- <i class="flaticon-razor-blade" aria-hidden="true"></i> -->
              </div>

              <p class="btn-text">No Vendor Lock-In</p>
            </button>
          </li>
      
        </ul>

        <ul class="grid-list">

          <li data-filter="shaving" style="display: block;" class="active {openTab === 1 ? 'block':'hidden'}">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-1.jpg" width="90" height="90" alt="Hair Cutting &amp; Fitting" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Hair Cutting &amp; Fitting</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="89">$89</data>

            </div>
          </li>

          <li data-filter="shaving" style="display: block;" class="{openTab === 2 ? 'block':'hidden'}">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-2.jpg" width="90" height="90" alt="Shaving &amp; Facial" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Shaving &amp; Facial</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="45">$45</data>

            </div>
          </li>

          <li data-filter="face-washing" style="display: block;" class="{openTab === 3 ? 'block':'hidden'}">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-3.jpg" width="90" height="90" alt="Hair Color &amp; Wash" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Hair Color &amp; Wash</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="35">$35</data>

            </div>
          </li>
    
          <li data-filter="body-treatments" style="display: block;" class="{openTab === 4 ? 'block':'hidden'}">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-4.jpg" width="90" height="90" alt="Body Massage" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Body Massage</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="56">$56</data>

            </div>
          </li>

          <li data-filter="beauty-spa" class="{openTab === 5 ? 'block':'hidden'}" style="display: block;">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-5.jpg" width="90" height="90" alt="Beauty &amp; Spa" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Beauty &amp; Spa</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="27">$27</data>

            </div>
          </li>

          <li data-filter="face-washing" style="display: block;" class="{openTab === 6 ? 'block':'hidden'}">
            <div class="pricing-card">

              <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                <img src="./assets/images/pricing-6.jpg" width="90" height="90" alt="Facial &amp; Face Wash" class="img-cover">
              </figure>

              <div class="wrapper">
                <h3 class="h3 card-title">Facial &amp; Face Wash</h3>

                <p class="card-text">Clean &amp; simple 30-40 minutes</p>
              </div>

              <data class="card-price" value="63">$63</data>

            </div>
          </li>
        </ul>

      </div>
    </div>
    </div>
  </section>