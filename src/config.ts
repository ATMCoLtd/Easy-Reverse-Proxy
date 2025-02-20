import type {Proxy} from './util/model';
import type {Template} from '../util/model';
import {generateProxyUrl} from '../util/template';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
let template: eight = {
    async response (option) {
        let bodyString = option.body.toString();
        bodyString = bodyString.replaceAll('津公网安备 12010302002427号', '');
        bodyString = bodyString.replaceAll('874236技术分享站', '874236镜像站');
        bodyString = bodyString.replaceAll('津ICP备2023004796号', '');
        bodyString = bodyString.replaceAll('津ICP备2023004796号-1', '');
        option.body = Buffer.from(bodyString);
        return option;
    }
};
let template: Google = {
    async response (option) {
        let bodyString = option.body.toString();
        bodyString = bodyString.replaceAll('https://www.google.com/', '/');
        option.body = Buffer.from(bodyString);
        return option;
    }
};

export let PROXIES: Proxy[] = [
 {
        domain: "pronet.runtimutd.eu.org",
        url: "https://www.google.com",
        enable: true
        
 },
 {
        domain: "test.runtimutd.eu.org",
        url: "https://whoer.net",
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

