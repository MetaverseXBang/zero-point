<template>
  <div class="site-footer-root">
    <div class="concat-us">
      <a href="https://twitter.com/MetaverseXBang" target="_blank"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="https://discord.gg/Rv22h2syQV" target="_blank"
        ><i class="fab fa-discord"></i
      ></a>
      <a href="https://github.com/MetaverseXBang" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a href="mailto:MetaverseXBang@outlook.com"
        ><i class="far fa-envelope"></i
      ></a>
    </div>
    <div class="copyright">
      Copyright © 2021 MetaverseXBang. All rights reserved.
    </div>
  </div>
</template>

<style lang="less" scoped>
.site-footer-root {
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  .copyright {
    text-align: center;
    flex: 1;
    font-size: 18px;
    margin-top: 12px;
  }
  .concat-us {
    text-align: center;
  }
  .fab,
  .far {
    font-size: 24px;
    margin: 0 12px;
    cursor: pointer;
  }
  .fa-twitter {
    &:hover {
      color: rgb(29, 155, 240);
    }
  }
  .fa-discord {
    &:hover {
      color: rgb(114, 137, 217);
    }
  }
  .fa-github {
    &:hover {
      color: gray;
    }
  }
  .fa-envelope {
    &:hover {
      color: skyblue;
    }
  }
}
</style>
