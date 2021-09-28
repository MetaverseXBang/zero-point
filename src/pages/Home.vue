<template>
  <div class="home-root">
    <div class="logo-module">
      <div class="logo">
        <div class="logo-area"></div>
      </div>
    </div>
    <div class="m">
      <div class="hcw">
        <div>Hello</div>
        <div>Crypto World</div>
      </div>
    </div>
    <div class="m tr">
      <div class="hcw">
        <div>Guide</div>
      </div>
    </div>
    <div class="m">
      <div class="hcw">
        <div>Airdrop</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-root {
  .logo-module {
    margin: 100px auto;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 800px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 100px #fff;
  }
  .logo-area {
    width: 100px;
    height: 200px;
    background-color: #fff;
  }
  .m {
    height: 1200px;
  }
  .hcw {
    font-size: 144px;
    font-weight: 500;
    padding: 0 10%;
    padding-top: 100px;
  }

  .tr {
    text-align: right;
  }
}
</style>
