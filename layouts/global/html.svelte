<script>
  import Head from './head.svelte';
  import Nav from "./nav.svelte";
  import Footer from "./footer.svelte"
  
  export let content, layout, allContent, allLayouts;
</script>

<html lang="en">
<Head title={content.filename} />
<body>
  <header class="header active" data-header="">
    <div class="container">
      <Nav />
    </div>
  </header>
  <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
</body>
<Footer/>
</html>