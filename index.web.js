
class Bugly {
    constructor (props) {

    }

    log (msg) {
        console.log (msg);
    }

    startWithAppId (buglyAppId,buglyConfig) {
        this.log ("startWithAppId () is not supported for web");
    }

    setUserIdentifier (id) {
        this.log ("setUserIdentifier () is not supported for web");
    }

    updateAppVersion (ver) {
        this.log ("updateAppVersion () is not supported for web");
    }

    setUserValue (k,v) {
        this.log ("setUserValue () is not supported for web");
    }

    setTag (tag) {
        this.log ("setTag () is not supported for web");
    }

    reportError (etype,error,stack) {
        this.log ("reportError () is not supported for web");
    }
}

export default Bugly;