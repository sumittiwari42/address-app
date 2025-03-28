// store/formStore.ts
import { defineStore } from "pinia";

interface FormData {
  id: number;
  first_line: string;
  second_line: string;
  third_line: string;
  fourth_line: string;
  fifth_line: string;
  post_code: any;
  address_list: string;
  pre_not_say: string;
  moved_in_data: Date;
}

export const useFormStore = defineStore("formStore", {
  state: () => ({
    forms: [{ 
      id: 1, 
      first_line: "", 
      second_line: "", 
      third_line: "", 
      fourth_line: "", 
      fifth_line: "", 
      post_code: "", 
      address_list: "Select", 
      pre_not_say: "false", 
      moved_in_data: new Date() 
    }] as FormData[],
  }),
  actions: {
    addForm() {
      this.forms.push(
        { id: Date.now(), 
          first_line: "", 
          second_line: "", 
          third_line: "", 
          fourth_line: "", 
          fifth_line: "", 
          post_code: "", 
          address_list: "Select",
          pre_not_say: "false", 
          moved_in_data: new Date() 
        }
      );
    },
    updateForm(id: number, field: keyof FormData, value: string) {
        const form = this.forms.find((f:any) => f.id === id);
        if (form) {
            (form as any)[field] = value; 
        }
      },
    removeForm(id: number) {
      this.forms = this.forms.filter((form:any) => form.id !== id);
    },
  },
});
