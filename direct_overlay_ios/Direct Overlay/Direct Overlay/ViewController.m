//
//  ViewController.m
//  Direct Overlay
//
//  Created by Jason Mark on 1/3/16.
//  Copyright © 2016 TheDevTeam, LLC. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
{
    NSString *ipAddressAndPortOfBox;
}
@property (strong, nonatomic) IBOutlet UIImageView *imgWatchOnPhone;
@property (strong, nonatomic) IBOutlet UIImageView *imgBrowseOnTV;
@property (strong, nonatomic) IBOutlet UIImageView *imgSlidingDrawer;
@property (strong, nonatomic) IBOutlet UIScrollView *srollview;
@property (strong, nonatomic) IBOutlet UIView *viewSlidingDrawer;
@property (strong, nonatomic) IBOutlet UIImageView *imgWidgets;


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [_srollview setContentSize:_imgWidgets.frame.size];
    
    _imgBrowseOnTV.hidden = true;
    _srollview.hidden = true;
    _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);

    ipAddressAndPortOfBox = @"127.0.0.1:8080";
    
    [self setNeedsStatusBarAppearanceUpdate];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (UIStatusBarStyle)preferredStatusBarStyle
{
    return UIStatusBarStyleLightContent;
}
- (IBAction)btnViewOnPhonePressed:(id)sender
{
    _imgWatchOnPhone.hidden = false;
    _imgBrowseOnTV.hidden = true;
    _srollview.hidden = true;
    _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
}
- (IBAction)btnBrowseForTV:(id)sender
{
    _imgWatchOnPhone.hidden = true;
    _imgBrowseOnTV.hidden = false;
    _srollview.hidden = true;
    _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
}

- (IBAction)btnOpenCloseSlidingDrawer:(id)sender
{
    if(_viewSlidingDrawer.frame.origin.x==0){
        [UIView animateWithDuration:.5 delay:0.0 options:UIViewAnimationOptionCurveEaseIn animations:^{
            _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
        } completion:^(BOOL finished) {}];
    }
    else{
        [UIView animateWithDuration:.5 delay:0.0 options:UIViewAnimationOptionCurveEaseIn animations:^{
            _viewSlidingDrawer.frame = CGRectMake(0, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
        } completion:^(BOOL finished) {}];
    }
}
- (IBAction)btnActivateWidgets:(id)sender
{
    [UIView animateWithDuration:.5 delay:0.0 options:UIViewAnimationOptionCurveEaseIn animations:^{
        _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
    } completion:^(BOOL finished) {}];
    _imgWatchOnPhone.hidden = true;
    _imgBrowseOnTV.hidden = true;
    _srollview.hidden = false;
    _viewSlidingDrawer.frame = CGRectMake(0-_viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.origin.y, _viewSlidingDrawer.frame.size.width, _viewSlidingDrawer.frame.size.height);
}
- (IBAction)btnTwitch:(id)sender
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^
    {
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL
                                             URLWithString:[NSString stringWithFormat:@"http://%@/remote/processKey?key=1", ipAddressAndPortOfBox]]
                                cachePolicy:NSURLRequestReloadIgnoringLocalAndRemoteCacheData
                            timeoutInterval:10
        ];
        [request setHTTPMethod: @"GET"];
        NSError *requestError = nil;
        NSURLResponse *urlResponse = nil;
        NSData *response1 = [NSURLConnection sendSynchronousRequest:request returningResponse:&urlResponse error:&requestError];
    });
}
- (IBAction)btnSocialMedia:(id)sender
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^
    {
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL
                                                                            URLWithString:[NSString stringWithFormat:@"http://%@/remote/processKey?key=2", ipAddressAndPortOfBox]]
                               cachePolicy:NSURLRequestReloadIgnoringLocalAndRemoteCacheData
                           timeoutInterval:10
        ];
        [request setHTTPMethod: @"GET"];
        NSError *requestError = nil;
        NSURLResponse *urlResponse = nil;
        NSData *response1 = [NSURLConnection sendSynchronousRequest:request returningResponse:&urlResponse error:&requestError];
    });
}
- (IBAction)btnNews:(id)sender
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^
    {
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL
                                                                            URLWithString:[NSString stringWithFormat:@"http://%@/remote/processKey?key=3", ipAddressAndPortOfBox]]
                           cachePolicy:NSURLRequestReloadIgnoringLocalAndRemoteCacheData
                       timeoutInterval:10
        ];
        [request setHTTPMethod: @"GET"];
        NSError *requestError = nil;
        NSURLResponse *urlResponse = nil;
        NSData *response1 = [NSURLConnection sendSynchronousRequest:request returningResponse:&urlResponse error:&requestError];
    });
}
- (IBAction)btnSports:(id)sender
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_HIGH, 0), ^
    {
        NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL
                                             URLWithString:[NSString stringWithFormat:@"http://%@/remote/processKey?key=4", ipAddressAndPortOfBox]]
                               cachePolicy:NSURLRequestReloadIgnoringLocalAndRemoteCacheData
                           timeoutInterval:10
        ];
        [request setHTTPMethod: @"GET"];
        NSError *requestError = nil;
        NSURLResponse *urlResponse = nil;
        NSData *response1 = [NSURLConnection sendSynchronousRequest:request returningResponse:&urlResponse error:&requestError];
    });
}

@end
