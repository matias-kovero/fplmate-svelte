<script>
  // Import needed stuff
  export let icon, content, path;
</script>

<div class="wrapper">
  <a class="content" sveltekit:prefetch href={path}>
    <div class="icon">
      <svelte:component this={icon} />
    </div>
    <div class="info">
      <div class="body">{content}</div>
    </div>
  </a>
  <div class="bg-top"></div>
  <div class="bg-bottom"></div>
</div>

<style>
  .wrapper {
    transform: skew(-10deg);
    background-color: var(--surface2);
    width: 100%;
    height: 50px;
    box-shadow: #00000040 2px 2px 2px 0px;
    position: relative;
  }
  .content {
    display: grid;
    place-items: center;
    grid-template-columns: 50px auto;
    height: 100%;
  }
  .icon, .info {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .icon {
    background-color: var(--surface4);
  }
  .info {
    background-color: var(--surface2);
    place-content: center start;
  }
  .body {
    transform: skew(10deg);
    padding-left: 1em;
  }
  a {
    color: var(--text1);
    text-decoration: none;
  }
  .bg-bottom, .bg-top {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
  }
  .bg-top {
    top: 0;
    background: #ffffff1e;
  }
  .bg-bottom {
    bottom: 0;
    background: #00000014;
  }
  .icon::after {
    content: " ";
    position: absolute;
    background: var(--surface4);
    height: 100%;
    width: 100%;
    z-index: -1;
    transform: skew(10deg);
    transform-origin: bottom left;
  }
</style>