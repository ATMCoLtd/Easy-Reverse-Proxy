import type {Proxy} from './util/model';
import type {Template} from '../util/model';
import {generateProxyUrl} from '../util/template';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理


export let PROXIES: Proxy[] = [
 {
        domain: "pronet.runtimutd.eu.org",
        url: "https://www.google.com",
        enable: true
        
 },
 {
        domain: "test.runtimutd.eu.org",
        url: "https://td.telegram.org",
        enable :true
},
{
        domain: "ipr.runtimutd.eu.org",
        url: "https://ip.runtimu.com",
        enable: true
},
{
        domain: "chatgpt.runtimutd.eu.org",
        url: "https://chatgpt.com",
        enable: true
},
{
        domain: "874236.runtimutd.eu.org",
        url: "https://www.874236.com",
        enable: true
        

}
];

