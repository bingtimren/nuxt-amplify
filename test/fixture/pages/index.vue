<template>
<div>
    Amplify region: {{region}}
</div>
</template>

<script>
import Amplify from "aws-amplify";

export default {
  data: () => {
    return {
      region: Amplify.Auth._config.region
    };
  }
};
</script>