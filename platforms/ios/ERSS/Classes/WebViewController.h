//
//  WebViewController.h
//  ERSS
//
//  Created by 马豪杰 on 14-2-12.
//
//

#import <UIKit/UIKit.h>

@interface WebViewController : UIViewController <UIWebViewDelegate>{

@protected
    UIWebView*        _webView;
    UIToolbar*        _toolbar;
}
@property (nonatomic, readonly) NSURL*  URL;

- (void)openURL:(NSURL*)URL;
@end
