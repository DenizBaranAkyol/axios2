<template>
  <div class="container-fuild" id="app">
    <div class="row">
      <div id="leftSideBar" class="col-sm-2">
        <appLeftSideBar></appLeftSideBar>
      </div>
      <div id="header" class=" col">
        <appHeader></appHeader>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import LeftSideBar from "./LeftSideBar.vue";

export default {
  components: { appHeader: Header, appLeftSideBar: LeftSideBar }
};
</script>
