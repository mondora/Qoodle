import 'babel-polyfill';
import {jsdom} from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import xmlserializer from 'xmlserializer';

chai.use(sinonChai);

// Setup fake DOM
global.document = jsdom();
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};

global.XMLSerializer = class  {
    serializeToString (i) {
        return xmlserializer.serializeToString(i);
    }
};

global.XSLTProcessor = class  {
    importStylesheet () {}
    transformToFragment (i) {
        return (i);
    }
};

global.DOMParser = document.defaultView.DOMParser;

// Setup configuration
global.window.APP_CONFIG = {};
