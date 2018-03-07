
/*
是否是浪客直播APP
*/
export const IS_LIVE = navigator.userAgent.toLowerCase().indexOf('eastmoney_live') !== -1 || navigator.userAgent.toLowerCase().indexOf('eastmoney_emlive') !== -1

/*
是否是东财APP
*/
export const IS_EASTMONEY = navigator.userAgent.toLowerCase().indexOf('eastmoney') !== -1

/*
是否是微信
*/
export const IS_WEIXIN = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1

/*
是否是QQ
*/
export const IS_QQ = (navigator.userAgent.toLowerCase().indexOf('qq') !== -1)

/*
是否是微博
*/
export const IS_WEIBO = navigator.userAgent.toLowerCase().indexOf('weibo') !== -1

/*
是否是IOS
*/
export const IS_IOS = /(iPhone|iPod|iPad|iTouch|iOS)/i.test(navigator.userAgent)

/*
是否是iPad
*/
export const IS_IPAD = /(iPad)/i.test(navigator.userAgent)
