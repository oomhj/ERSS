package com.coolappz.ERSS.preference;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.util.Log;

public class PushToken extends CordovaPlugin {
	private static final String GET_PUSH_TOKEN = "getPushToken";
	public static final String TAG = "Preference Plugin";
	public static final String PUSH_TOKEN_KEY = "push_token";

	private SharedPreferences mPreferences;

	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		super.initialize(cordova, webView);
		Log.i(TAG, "Preference Plugin init");

		mPreferences = PreferenceManager.getDefaultSharedPreferences(cordova.getActivity());
	}

	@Override
	public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
		Log.i(TAG, "Preference Plugin called");

		if (action.equals(GET_PUSH_TOKEN)) {
			// 获取token
			String token = mPreferences.getString(PushTokenBroadcastReceiver.KEY_PUSH_TOKEN, "");
			callbackContext.success(token);
			return true;
		}
		return super.execute(action, args, callbackContext);
	}

}
