// @ts-check
export const DEFAULT_AUTH_URL = 'https://auth.endpass.com';
export const CRYPTODATA_API_URL = 'https://cryptodata-dev.endpass.com';

/**
 * Static things
 */
export const INPAGE_EVENTS = {
  SETTINGS: 'INPAGE_PROVIDER_SETTINGS_EVENT',
  RESPONSE: 'INPAGE_PROVIDER_RESPONSE_EVENT',
  REQUEST: 'INPAGE_PROVIDER_REQUEST_EVENT',
  DROP_PENDING: 'INPAGE_PROVIDER_REQUEST_DROP_PENDING',
  LOGIN: 'INPAGE_PROVIDER_REQUEST_LOGIN',
  LOGGED_IN: 'INPAGE_PROVIDER_REQUEST_LOGGED_IN',
};
export const INPAGE_ID_PREFIX = 'ep_';
export const DAPP_WHITELISTED_METHODS = [
  'eth_sign',
  'personal_sign',
  'personal_ecRecover',
  'eth_personalSign',
  'eth_signTypedData',
  'eth_sendTransaction',
];

export const METHODS = Object.freeze({
  SIGN: 'SIGN',
  ACCOUNT: 'ACCOUNT',
  RECOVER: 'RECOVER',
  GET_SETTINGS: 'GET_SETTINGS',
  AUTH: 'AUTH',
  LOGOUT: 'LOGOUT',
  INITIATE: 'INITIATE',
  READY_STATE_BRIDGE: 'READY_STATE_BRIDGE',
  // Dialog-level messages
  DIALOG_RESIZE: 'DIALOG_RESIZE',
  DIALOG_OPEN: 'DIALOG_OPEN',
  DIALOG_CLOSE: 'DIALOG_CLOSE',
  // Widget-level messages
  WIDGET_OPEN: 'WIDGET_OPEN',
  WIDGET_CLOSE: 'WIDGET_CLOSE',
  WIDGET_FIT: 'WIDGET_FIT',
  WIDGET_UNMOUNT: 'WIDGET_UNMOUNT',
  WIDGET_LOGOUT: 'WIDGET_LOGOUT',
  WIDGET_GET_SETTING: 'WIDGET_GET_SETTING',
  WIDGET_CHANGE_SETTINGS: 'WIDGET_CHANGE_SETTINGS',
  // Broadcast-level messages
  BROADCAST: 'BROADCAST',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_RESPONSE: 'LOGOUT_RESPONSE',
  CHANGE_SETTINGS_REQUEST: 'CHANGE_SETTINGS_REQUEST',
  CHANGE_SETTINGS_RESPONSE: 'CHANGE_SETTINGS_RESPONSE',
});

export const DIRECTION = Object.freeze({
  AUTH: 'auth',
  WIDGET: 'widget',
  CONNECT: 'connect',
});

export const WIDGET_EVENTS = {
  MOUNT: 'mount',
  DESTROY: 'destroy',
  OPEN: 'open',
  CLOSE: 'close',
  LOGOUT: 'logout',
};
