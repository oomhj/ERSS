//
//  WebViewController.m
//  ERSS
//
//  Created by 马豪杰 on 14-2-12.
//
//

#import "WebViewController.h"

@interface WebViewController ()

@end

@implementation WebViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}
- (void)loadView {
    [super loadView];
    CGRect frame = [UIScreen mainScreen].bounds;
    CGFloat toolbarheight = 64.0f;
    _toolbar = [[UIToolbar alloc] initWithFrame:CGRectMake(0.0f, 0.0f, 320.0f,toolbarheight)];
    _toolbar.backgroundColor  = [UIColor whiteColor];
    UIBarButtonItem * button = [[UIBarButtonItem alloc]initWithBarButtonSystemItem:UIBarButtonSystemItemRefresh target:self action:nil];
    [_toolbar setItems:@[button]];
    _webView = [[UIWebView alloc] initWithFrame:CGRectMake(0.0f, toolbarheight, frame.size.width,frame.size.height-toolbarheight)];
    _webView.delegate = self;
    _webView.autoresizingMask = UIViewAutoresizingFlexibleWidth
    | UIViewAutoresizingFlexibleHeight;
    _webView.scalesPageToFit = YES;
    [self.view addSubview:_toolbar];
    [self.view addSubview:_webView];
}
- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

///////////////////////////////////////////////////////////////////////////////////////////////////
- (void)openURL:(NSURL*)URL {
    NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:URL];
    [self openRequest:request];
}


///////////////////////////////////////////////////////////////////////////////////////////////////
- (void)openRequest:(NSURLRequest*)request {
    [self view];
    [_webView loadRequest:request];
}
;
@end
