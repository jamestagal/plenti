<script>

export let items = [];
export let activeTabValue;

  // Set default tab value
 if (Array.isArray(items) && items.length && items[0].value) {
    activeTabValue = items[0].value;
};


const handleClick = tabValue => () => (activeTabValue = tabValue);

  // List of tab items with labels and values.
  let tabItems = [
    { label: "Homebrew (Mac)", value: 1 },
    { label: "Snap (Linux)", value: 2 },
    { label: "Scoop (Windows)", value: 3 },
    { label: "Manual", value: 4 }
  ];

  // Current active tab
  let currentTab;
</script>

<ul>
{#if Array.isArray(items)}
  {#each items as item}
    <li class={activeTabValue === item.value ? 'active' : ''}>
      <span on:click={handleClick(item.value)}>{item.label}</span>
    </li>
  {/each}
{/if}
</ul>


<!-- Tabs -->
<div class="tabs">
    <ul class="tabs-header">
      <li class="default-tab">{tabItems[0].label}</li>
      <li>{tabItems[1].label}</li>
      <li>{tabItems[2].label}</li>
      <li>{tabItems[3].label}</li>
    </ul>

    <ul class="tabs-content">
      {#if 1 === currentTab}
      <li class="tab">
        1. Add the tap: 
        <code>brew tap plentico/homebrew-plenti</code><br>
        2. Install: 
        <code>brew install plenti</code>
      </li>
      {/if}
      {#if 2 === currentTab}
      <li class="tab">
        1. Install:
        <code>snap install plenti</code>
      </li>
      {/if}
      {#if 3 === currentTab}
      <li class="tab">
        Windows is not yet supported, it needs <a href="https://github.com/plentico/plenti/issues/45" target="_blank" rel="noopener noreferrer">your help</a>!<br>
        1. Add the bucket: 
        <code>scoop bucket add plenti https://github.com/plentico/scoop-plenti</code><br>
        2. Install: <code>scoop install plenti</code>
      </li>
      {/if}
      {#if 4 === currentTab}
      <li class="tab">
        1. Download the latest <a href="https://github.com/plentico/plenti/releases">release</a><br>
        2. Move it somewhere in your <code>PATH</code> (most likely <code>/usr/local/bin</code>)
      </li>
      {/if}
    </ul>
  </div>


<style>
    .tabs {
      margin-top: 30px;
    }
    .tabs-header {
      display: flex;
      background: #333;
      color: #fff;
      padding: 10px 20px;
    }
    .tabs-header li {
      margin-right: 20px;
      cursor: pointer;
    }
    .tabs-content {
      font-size: 18px;
      padding: 20px;
      border: 1px solid #333;
      font-weight: bold;
      background: #f4f4f4;
    }
  </style>