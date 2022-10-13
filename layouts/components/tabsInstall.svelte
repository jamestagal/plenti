<script>

  export let activeTabValue = 1;

  const handleClick = tabValue => () => (activeTabValue = tabValue);
  
  // List of tab items with labels and values.
  let tabItems = [
    { label: "Homebrew (Mac)", value: 1 },
    { label: "Snap (Linux)", value: 2 },
    { label: "Scoop (Windows)", value: 3 },
    { label: "Manual", value: 4 }
  ];
</script>

<!-- Tabs -->
<div class="tabs">
    <ul class="tabs-header">
      {#each tabItems as item}
        <li class={activeTabValue === item.value ? 'active' : ''} on:click={handleClick(item.value)} >{item.label}
        </li>
      {/each}
    </ul>

    <ul class="tabs-content">
      {#if 1 === activeTabValue}
      <li class="tab">
        1. Add the tap: 
        <code>brew tap plentico/homebrew-plenti</code><br>
        2. Install: 
        <code>brew install plenti</code>
      </li>
      {/if}
      {#if 2 === activeTabValue}
      <li class="tab">
        1. Install:
        <code>snap install plenti</code>
      </li>
      {/if}
      {#if 3 === activeTabValue}

      <li class="tab">
        Windows is not yet supported, it needs <a class="dontwrap" href="https://github.com/plentico/plenti/issues/45" target="_blank" rel="noopener noreferrer">your help</a>!<br>
        1. Add the bucket: 
        <code>scoop bucket add plenti https://github.com/plentico/scoop-plenti</code><br>
        2. Install: <code>scoop install plenti</code>
      </li>
      {/if}
      {#if 4 === activeTabValue}
      <li class="tab">
        1. Download the latest <a href="https://github.com/plentico/plenti/releases">release</a>
        2. Move it somewhere in your <code>PATH</code> (most likely <code>/usr/local/bin</code>)
      </li>
      {/if}
    </ul>
  </div>


<style>
    .tabs {
      margin-top: 30px;
    }
    .tab a {
      font-weight: bold;
      color: var(--majorelle-blue);
    }
    .tabs-header {
      display: flex;
      /* background-color: var(--majorelle-blue); */
      background: #333;
      padding: 10px 20px;
    }
  /*   .tabs-header-primary {
      color: var(--mustard);
    } */
    .tabs-header li {
      margin-right: 20px;
      cursor: pointer;
      color: #FEC02F;
    }
    li.active { 
      color: #fff;
    }
    li {
    white-space: nowrap;
    }
    .dontwrap li a {
    white-space: nowrap;
    }
   /*  .tabs-header::before,
    .tabs-header::after {
      right: 0;
      width: 100%;
      height: 50%;
      transform: scaleX(0);
      background-color: var(--mustard);
      z-index: -1;
      transition: transform var(--transition-1);
    }
    .tabs-header::before {
      top: 0;
      transform-origin: left;
    }
    .tabs-header::after {
      top: 50%;
      transform-origin: right;
    }
    .tabs-header:is(:hover, :focus)::before,
    .tabs-header:is(:hover, :focus)::after { transform: scaleX(1); }
    .tabs-header:is(:hover, :focus)::before { transform-origin: right; }
    .tabs-header:is(:hover, :focus)::after { transform-origin: left; }

    .tabs-header-primary:is(:hover, :focus) { color: var(--majorelle-blue); }
 */
    .tabs-content {
      font-size: 14px;
      padding: 20px;
      border: 1px solid #333;
      /* font-weight: bold; */
      background: #f4f4f4;
    }
  </style>
