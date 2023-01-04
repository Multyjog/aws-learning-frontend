import { defineStore } from "pinia";
// import { ref, computed } from "vue";
import { database } from "@/axios";

export const useNotesStore = defineStore("notes", () => {
  const notes: Array<object> = [];
  function fetchNotes() {
    database
      .get("/notes")
      .then((resp) => {
        console.log(resp);
        // clearing old notes array
        notes.splice(0);
        notes.push(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { notes, fetchNotes };
});
