Object.defineProperty(exports,"__esModule",{value:true});exports.Modal=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Modal.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');






var _PresentationContext=require('./PresentationContext');var _PresentationContext2=_interopRequireDefault(_PresentationContext);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var BACK_PRESS_EVENT='hardwareBackPress';var

Modal=exports.Modal=function(_Component){_inherits(Modal,_Component);





function Modal(props){_classCallCheck(this,Modal);var _this=_possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).call(this,
props));_this.














_backEventHandler=function(){var
dismissOnHardwareBackPress=_this.props.dismissOnHardwareBackPress;var
modalState=_this.state.modalState;
if(dismissOnHardwareBackPress&&modalState==='opened'){
_this.dismiss();
return true;
}
return false;
};_this.

_toggle=function(flag){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};
var modalState=flag===0?'animating':'opened';
var toValue=flag;
_this.setState({
modalState:modalState},
function(){
_reactNative.Animated.timing(
_this.state.translationAnimated,
{
toValue:toValue,
duration:_this.props.animationDuration}).
start(function(completion){
if(!completion.finished){
var rollBack=flag===0?1:0;
_this.state.translationAnimated.setValue(rollBack);
}
if(modalState==='animating'){
_this.setState({
modalState:'closed'});

}
});
});
};_this.state={modalState:'closed',translationAnimated:new _reactNative.Animated.Value(0)};return _this;}_createClass(Modal,[{key:'componentDidMount',value:function componentDidMount(){_reactNative.BackHandler.addEventListener(BACK_PRESS_EVENT,this._backEventHandler);}},{key:'componentWillUnmount',value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener(BACK_PRESS_EVENT);}},{key:'show',value:function show()

{var
onShowed=this.props.onShowed;
this._toggle(1,onShowed);
}},{key:'dismiss',value:function dismiss()

{var
onDismissed=this.props.onDismissed;
this._toggle(0,onDismissed);
}},{key:'render',value:function render()

{var _props=









this.props,children=_props.children,dismissOnHardwareBackPress=_props.dismissOnHardwareBackPress,contextColor=_props.contextColor,contextOpacity=_props.contextOpacity,animationDuration=_props.animationDuration,contextOnPress=_props.contextOnPress,width=_props.width,height=_props.height;var _state=
this.state,modalState=_state.modalState,translationAnimated=_state.translationAnimated;
var hidden=modalState==='closed'?styles.hidden:null;
var screenHeight=_reactNative.Dimensions.get('window').height;
var yPosition=translationAnimated.interpolate({
inputRange:[0,1],
outputRange:[screenHeight,0],
extrapolate:'clamp'});

return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,hidden],__source:{fileName:_jsxFileName,lineNumber:103}},
_react2.default.createElement(_PresentationContext2.default,{
backgroundColor:contextColor,
opacity:contextOpacity,
animationDuration:animationDuration,
showContext:modalState==='opened',
onPress:contextOnPress,__source:{fileName:_jsxFileName,lineNumber:104}}),

_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.contentContainer,
{transform:[{translateY:yPosition}]}],__source:{fileName:_jsxFileName,lineNumber:111}},



modalState!=='closed'?
_react2.default.createElement(_reactNative.View,{style:{width:width,height:height},__source:{fileName:_jsxFileName,lineNumber:119}},
_react2.default.cloneElement(children,_extends({},this.props))):

null)));





}}]);return Modal;}(_react.Component);

Modal.propTypes={
width:_propTypes2.default.number,
height:_propTypes2.default.number,
dismissOnHardwareBackPress:_propTypes2.default.bool,
contextOpacity:_propTypes2.default.number,
contextColor:_propTypes2.default.string,
dismissOnTouchOutside:_propTypes2.default.bool,
contextOnPress:_propTypes2.default.func,
animationDuration:_propTypes2.default.number};

Modal.defaultProps={
width:_reactNative.Dimensions.get('window').width,
height:_reactNative.Dimensions.get('window').height,
dismissOnHardwareBackPress:true,
contextOpacity:0.5,
contextColor:'#000',
dismissOnTouchOutside:true,
contextOnPress:function contextOnPress(){},
animationDuration:300};


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
position:'absolute',
top:0,
left:0},

hidden:{
top:-10000,
left:0,
height:0,
width:0},

contentContainer:{
flex:1,
justifyContent:'flex-end',
backgroundColor:'white'}});