
class Bugly {
    constructor (props) {

    }

    static log (msg) {
        console.log (msg);
    }

    static startWithAppId (buglyAppId,buglyConfig) {
        Bugly.log ("startWithAppId () is not supported for web");
    }

    static setUserIdentifier (id) {
        Bugly.log ("setUserIdentifier () is not supported for web");
    }

    static updateAppVersion (ver) {
        Bugly.log ("updateAppVersion () is not supported for web");
    }

    static setUserValue (k,v) {
        Bugly.log ("setUserValue () is not supported for web");
    }

    static setTag (tag) {
        Bugly.log ("setTag () is not supported for web");
    }

    static reportError (etype,error,stack) {
        Bugly.log ("reportError () is not supported for web");
    }
}

export default Bugly;