import type {Template} from '../util/model';
import {generateProxyUrl} from '../util/template';


let template: Template = {
    async response (option) {
        let bodyString = option.body.toString();
        bodyString = bodyString.replaceAll('https://www.google.com/', '/');
        bodyString = bodyString.replaceAll('津公网安备 12010302002427号', '');
        bodyString = bodyString.replaceAll('874236技术分享站', '874236镜像站');
        bodyString = bodyString.replaceAll('津ICP备2023004796号', '');
        bodyString = bodyString.replaceAll('津ICP备2023004796号-1', '');
        option.body = Buffer.from(bodyString);
        return option;
    }
};
export default template;
