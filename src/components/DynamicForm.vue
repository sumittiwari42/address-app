<template>
  <div class="page-wrapper">
    <h1 class="">Address Details</h1>
    <div v-for="form in formStore.forms" :key="form.id" class="flex">

      <div class="form-control">
        <label class="block">First line</label>
        <input
          type="text"
          v-model="form.first_line"
          @input="formStore.updateForm(form.id, 'first_line', form.first_line)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>

      <div class="form-control">
        <label class="block">Second line</label>
        <input
          type="text"
          v-model="form.second_line"
          @input="formStore.updateForm(form.id, 'second_line', form.second_line)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>

      <div class="form-control">
        <label class="block">Third line</label>
        <input
          type="text"
          v-model="form.third_line"
          @input="formStore.updateForm(form.id, 'third_line', form.third_line)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>

      <div class="form-control">
        <label class="block">Fourth line</label>
        <input
          type="text"
          v-model="form.fourth_line"
          @input="formStore.updateForm(form.id, 'fourth_line', form.fourth_line)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>

      <div class="form-control">
        <label class="block">Fifth line</label>
        <input
          type="text"
          v-model="form.fifth_line"
          @input="formStore.updateForm(form.id, 'fifth_line', form.fifth_line)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>
      
      <div class="form-control">
        <label class="block mt-2">Post code</label>
        <input
          type="text"
          v-model="form.post_code"
          @input="formStore.updateForm(form.id, 'post_code', form.post_code)"
          class="input-feild"
          placeholder="Enter"
        />
      </div>
      
      <div class="form-control">
      <label class="block">Address list</label>
      <select
        v-model="form.address_list"
        @change="formStore.updateForm(form.id, 'address_list', form.address_list)"
        class="input-feild"
      >
        <option value="Select">Select</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
      </select>
      </div>

      <div class="form-control checkbox-control">
        <label class="block mt-2">Prefer not to say</label>
        <input
          type="checkbox"
          v-model="form.pre_not_say"
          @input="formStore.updateForm(form.id, 'pre_not_say', form.pre_not_say.toString())"
          class="input-feild"
        />
      </div>

      <div class="form-control">
        <label class="block mt-2">Date moved in</label>
        <input
          type="date"
          v-model="form.moved_in_data"
          @input="formStore.updateForm(form.id, 'moved_in_data', form.moved_in_data.toString())"
          class="input-feild"
        />
      </div>
      <div class="cta-right marg-t0">
        <button
          @click="formStore.removeForm(form.id)"
          class="cta-plane "
        >
          Delete
        </button>
      </div>
    </div>
    <div class="cta-right">
        <router-link to="/thanks" class="cta">
         Save
        </router-link>
      </div>
    <button @click="formStore.addForm" class="cta-plane ">
      Add Form
    </button>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from "../store/formStore";
const formStore = useFormStore();
</script>
