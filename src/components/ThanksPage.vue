<template>
  <div class="page-wrapper">
    <h1 class="">Address List</h1>
    <div>
      <div v-for="form in formStore.forms" :key="form.id" class="border-b">
        <p><strong>First Line:</strong> {{ form.first_line }}</p>
        <p><strong>Second Line:</strong> {{ form.second_line }}</p>
        <p><strong>Third Line:</strong> {{ form.third_line }}</p>
        <p><strong>Fourth Line:</strong> {{ form.fourth_line }}</p>
        <p><strong>Fifth Line:</strong> {{ form.fifth_line }}</p>
        <p><strong>Post code:</strong> {{ form.post_code }}</p>
        <p><strong>Address list:</strong> {{ form.address_list }}</p>
        <p><strong>Prefere not to say:</strong> {{ form.pre_not_say }}</p>
        <p><strong>Date moved in:</strong> {{ form.moved_in_data }}</p>
      </div>
    </div>
    <router-link to="/">
      <button class="cta">Back</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from "../store/formStore";
const formStore = useFormStore();
</script>

<style>
 p {font-size: 12px;}

 .border-b {
  border-top: 1px solid;
  margin-bottom: 15px;
}
</style>
  
