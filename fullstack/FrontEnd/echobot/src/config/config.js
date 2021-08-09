import {devConfig} from './default'
import {prodConfig} from './production'
export function config(){
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return  devConfig;
    } else {
        return prodConfig;
        
    }
}
