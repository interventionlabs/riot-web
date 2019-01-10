(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1086:function(e,t,n){"use strict";var l=c(n(83)),r=c(n(1)),i=n(2);function c(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o=n(3),d=n(7);e.exports=a.createClass({displayName:"EncryptedEventDialog",propTypes:{event:r.default.object.isRequired,onFinished:r.default.func.isRequired},getInitialState:function(){return{device:null}},componentWillMount:function(){var e=this;this._unmounted=!1;var t=d.get();this.refreshDevice().then(function(n){return n||t.downloadKeys([e.props.event.getSender()],!0).then(function(){return e.refreshDevice()})}).then(function(n){e._unmounted||(e.setState({device:n}),t.on("deviceVerificationChanged",e.onDeviceVerificationChanged))},function(e){console.log("Error downloading devices",e)})},componentWillUnmount:function(){this._unmounted=!0;var e=d.get();e&&e.removeListener("deviceVerificationChanged",this.onDeviceVerificationChanged)},refreshDevice:function(){return l.default.resolve(d.get().getEventSenderDeviceInfo(this.props.event))},onDeviceVerificationChanged:function(e,t){var n=this;e==this.props.event.getSender()&&this.refreshDevice().then(function(e){n.setState({device:e})})},onKeyDown:function(e){27===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this.props.onFinished(!1))},_renderDeviceInfo:function(){var e=this.state.device;if(!e)return a.createElement("i",null,(0,i._t)("unknown device"));var t=a.createElement("b",null,(0,i._t)("NOT verified"));return e.isBlocked()?t=a.createElement("b",null,(0,i._t)("Blacklisted")):e.isVerified()&&(t=(0,i._t)("verified")),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Name")),a.createElement("td",null,e.getDisplayName())),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Device ID")),a.createElement("td",null,a.createElement("code",null,e.deviceId))),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Verification")),a.createElement("td",null,t)),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Ed25519 fingerprint")),a.createElement("td",null,a.createElement("code",null,e.getFingerprint())))))},_renderEventInfo:function(){var e=this.props.event;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,(0,i._t)("User ID")),a.createElement("td",null,e.getSender())),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Curve25519 identity key")),a.createElement("td",null,a.createElement("code",null,e.getSenderKey()||a.createElement("i",null,(0,i._t)("none"))))),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Claimed Ed25519 fingerprint key")),a.createElement("td",null,a.createElement("code",null,e.getKeysClaimed().ed25519||a.createElement("i",null,(0,i._t)("none"))))),a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Algorithm")),a.createElement("td",null,e.getWireContent().algorithm||a.createElement("i",null,(0,i._t)("unencrypted")))),"m.bad.encrypted"===e.getContent().msgtype?a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Decryption error")),a.createElement("td",null,e.getContent().body)):null,a.createElement("tr",null,a.createElement("td",null,(0,i._t)("Session ID")),a.createElement("td",null,a.createElement("code",null,e.getWireContent().session_id||a.createElement("i",null,(0,i._t)("none")))))))},render:function(){var e=o.getComponent("elements.DeviceVerifyButtons"),t=null;return this.state.device&&(t=a.createElement(e,{device:this.state.device,userId:this.props.event.getSender()})),a.createElement("div",{className:"mx_EncryptedEventDialog",onKeyDown:this.onKeyDown},a.createElement("div",{className:"mx_Dialog_title"},(0,i._t)("End-to-end encryption information")),a.createElement("div",{className:"mx_Dialog_content"},a.createElement("h4",null,(0,i._t)("Event information")),this._renderEventInfo(),a.createElement("h4",null,(0,i._t)("Sender device information")),this._renderDeviceInfo()),a.createElement("div",{className:"mx_Dialog_buttons"},a.createElement("button",{className:"mx_Dialog_primary",onClick:this.props.onFinished,autoFocus:!0},(0,i._t)("OK")),t))}})}}]);
//# sourceMappingURL=12.js.map