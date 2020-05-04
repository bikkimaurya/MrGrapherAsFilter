<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-backdrop"
      title="skeppers"
      backdrop
      shadow

      bg-variant="dark" text-variant="light" 
      width="140px"
    >
      <div class="px-3 py-2">
        <li>
            hello
        </li>
      </div>
    </b-sidebar>
  </div>
</template>
<script>

export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
  }
 
</script>
<style scoped>

</style>