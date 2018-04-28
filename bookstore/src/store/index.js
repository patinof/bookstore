import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        processing:false,
        loaded: false,
        alert:{
            type:'success',
            show:false,
            message:''
        }
    },
    mutations:{
        setLoaded:(state,Loaded)=>{
            state.loaded=loaded;
        },
        setAlertMessage:(state,data)=>{ //ciclo de vida de una alerta inicio
            state.alert.type-data.type;
            state.alert.show-data.show;
            state.alert.message-data.message;
            setTimeout(()=>{
                state.alert.type='success';
                state.alert.show=false;
                state.alert.message='';
            }, data.timeout);       //ciclo de vida de una alerta fin
        }
    },
    modules:{



    }
});