import  type { App,Plugins } from 'vue'
import {each} from 'lodash-es'

type SFCWithInstall<T>=T &  Plugins

export  function makeInstaller(component:Plugins[]){
    const installer=(app:App)=>each(component,c=>app.use(c));
    return installer;
}
export  const  withInstaller = <T>(component:T)=>{
    (component as SFCWithInstall<T>).install=(app:App)=>{
        const name =(component as any)?.name||"UnnamedComponent";
        app.component(name,component as SFCWithInstall<T>)
    }
    return component as SFCWithInstall<T>;
}