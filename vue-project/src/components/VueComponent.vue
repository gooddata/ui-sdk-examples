<template>
  <!-- <RC :who="who" /> -->
  <!-- <RCPure /> -->
  <InsightView
    :insight="insight"
    :workspace="workspace"
    :backend="backend"
  />
</template>

<script>
import {applyReactInVue, applyPureReactInVue} from 'veaury';
import ReactComponent from './react_app/ReactComponent.jsx';
import { InsightView } from "@gooddata/sdk-ui-ext";
// import { ref } from 'vue';
import backend from "../backend";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";

export default {
  components: {
    // Use HOC 'applyReactInVue' or 'applyPureReactInVue'
    RC: applyReactInVue(ReactComponent),
    RCPure: applyPureReactInVue(ReactComponent),
    InsightView: applyReactInVue(InsightView),
    InsightViewPure: applyPureReactInVue(InsightView),
  },
  setup() {
    return {
      // who: ref('y\'all!'),
      // who: 'y\'all!',
      insight: 'aaxwvA9xaYYu',
      workspace: 'psk46untnn2vhzs5bokdav3bu2puf6s6',
      backend: backend
    }
  }
}
</script>
