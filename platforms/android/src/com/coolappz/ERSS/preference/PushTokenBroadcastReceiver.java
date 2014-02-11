package com.coolappz.ERSS.preference;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;

import com.igexin.sdk.Consts;

public class PushTokenBroadcastReceiver extends BroadcastReceiver {
	public static final String KEY_PUSH_TOKEN = "push_token";
	

	@Override
	public void onReceive(Context context, Intent intent) {
		Bundle bundle = intent.getExtras();
		Log.d("PushTokenBroadcastReceiver", "onReceive() action=" + bundle.getInt("action"));

		switch (bundle.getInt(Consts.CMD_ACTION)) {
		case Consts.GET_MSG_DATA:
			// 获取透传(payload)数据
			break;
		case Consts.GET_CLIENTID:
			// 获取 ClientID(CID)
			String cid = bundle.getString("clientid");
			Log.d("PushTokenBroadcastReceiver", "Got ClientID:" + cid);

			persistencePushToken(cid,context);

			break;
		case Consts.BIND_CELL_STATUS:
			break;
		default:
			break;
		}
	}

	private void persistencePushToken(String token,Context context) {
		Editor editor = PreferenceManager.getDefaultSharedPreferences(context).edit();

		editor.putString(KEY_PUSH_TOKEN, token);
		editor.commit();

	}

	// private void registerDeviceTokenOnServer(String token){
	// NetworkUtil.post(url, params, responseHandler);
	// }
	//
	// private String getTokenRegisterUrl(String pattern){
	//
	// }
}
