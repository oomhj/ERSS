//
//  DeviceLocal.m
//  ERSS
//
//  Created by Jason on 13-11-27.
//
//

#import "DeviceLocal.h"

@implementation DeviceLocal
- (void)getInfo:(CDVInvokedUrlCommand*)command
{
    NSDictionary* deviceProperties = [self deviceProperties];
    
    CDVPluginResult *  pluginResult  = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:deviceProperties];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (NSDictionary*)deviceProperties
{
    
    NSString * pushtoken = (NSString *)[[NSUserDefaults standardUserDefaults] objectForKey:@"deviceToken"];
    pushtoken = pushtoken?pushtoken:@"";
    NSDictionary * devReturn = [NSDictionary dictionaryWithObject:pushtoken forKey:@"pushtoken"];
    return devReturn;
}
@end
