<template>
  <div>
    <h1>Notes:</h1>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useNotesStore } from "@/store/notes";

export default defineComponent({
  name: "LoginView",
  setup() {
    const store = useNotesStore();
    onMounted(() => {
      console.log("mounted");
      store.fetchNotes();
    });
  },
});
</script>
