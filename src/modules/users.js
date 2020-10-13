import { reactive, toRefs } from "vue";


const state = reactive({
  users: null
});

export default function useUsers() {
  
        state.users = {data:[{id:'1',name:'Karthi',email: 'Sincere@april.biz',city: 'Gwenborough'},
        {id:'2',name:'Bob',email: 'Shanna@melissa.tv',city: 'Wisokyburgh'},
        {id:'3',name:'Ace',email: 'Nathan@yesenia.net',city: 'McKenziehaven'},
        {id:'4',name:'Raj',email: 'Julianne.OConner@kory.org',city: 'South Elvis'}
       ,{id:'5',name:'Shiva',email: 'Lucio_Hettinger@annie.ca',city: 'Roscoeview'},
       {id:'6',name:'Donleyo',email: 'Karley_Dach@jasper.info',city: 'South Christy'},
       {id:'7',name:'Alice',email: 'Telly.Hoeger@billy.biz',city: 'Howemouth'},
       {id:'8',name:'Kumar',email: 'Sherwood@rosamond.me',city: 'Aliyaview'},
       {id:'9',name:'Pranseh',email: 'Chaim_McDermott@dana.io',city: 'Bartholomebury'}]}
    

  return { ...toRefs(state) };
}