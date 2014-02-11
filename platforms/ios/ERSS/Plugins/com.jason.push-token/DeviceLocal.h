//
//  DeviceLocal.h
//  ERSS
//
//  Created by Jason on 13-11-27.
//
//
#import <Cordova/CDVPlugin.h>
@interface DeviceLocal : CDVPlugin{}
- (void)getInfo:(CDVInvokedUrlCommand*)command;
@end
