
<script>
    export let title1, title2, subtitle, items;
</script>


<section class="section service" id="setup" aria-label="service">
    <div class="container">

      <p class="section-subtitle has-before text-center">{subtitle}</p>

      <h2 class="h2 section-title text-center"><span class="has-before">{title1}</span> {title2}</h2>
          {#each items as item}
              <div class="item">
                  <div class="content">
					  <h3 class="h3 section-title" style="margin-block: 0; font-size: 3rem;">
						<strong> <span class="has-before" style="display: inline;">{item.title_accent}</span></strong></h3>
					  <strong><span class="title">{item.title}</span></strong>
					  <p>{item.body}</p>
                  </div>
                  <div class="img">
                      <img src="assets{item.img}" alt="">
                  </div>
              </div>
          {/each}
    </div>
  </section>

  <style>
    #setup {
		font-size: 2.5rem;
		line-height: 3rem;
		padding: 100px 0;
	}
	#setup .item {
		display: flex;
		margin: 100px 0;
	}
	#setup .item:first-of-type {
		margin-top: 0;
	}
	#setup .item:nth-child(odd) {
		flex-direction: row-reverse;
	}
	#setup .item > div {
		flex-basis: 0;
    	flex-grow: 1;
	}
/* 	#setup strong span.accent {
		font-family: 'Kalam', cursive;
		color: var(--accent-dark);
	} */
	#setup :is(.h3) .has-before::before {
		bottom: 4px;
		left: 0;
		width: 100%;
		height: 6px;
		background-color: var(--mustard);
		z-index: -1;
	}
	#setup strong span.title {
		font-family: 'NTR', sans-serif;
	}
	#setup p {
		font-size: 2.0rem;
	}
	#setup img {
		box-shadow: 0 10px 36px 0 rgba(0,0,0,.16), 0 0 0 1px rgba(0,0,0,.06);
    	transform: rotate(-3deg);
	}
	#setup .img {
		align-items: center;
	}
	#setup .item:nth-child(even) .img {
		display: flex;
    	justify-content: flex-end;
	}
	#setup .item:nth-child(even) img {
    	transform: rotate(3deg);
	}
  </style>