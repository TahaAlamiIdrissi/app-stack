<template>
  <div>
    <v-container class="register">
      <v-row class="text-center">
        <v-col cols="12">
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>{{title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <slot>No content for the moment</slot>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
</style>