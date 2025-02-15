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
        url: "https://whoer.net",
        enable :true
}
];

let template: Template = {
    async response (option) {
        let bodyString = option.body.toString();
        bodyString = bodyString.replaceAll('https://www.google.com/', '/');
        option.body = Buffer.from(bodyString);
        return option;
    }
};
export default template;
