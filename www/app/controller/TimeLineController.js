Ext.define('HERSS.controller.TimeLineController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.BlogContentView', 'HERSS.view.CommentList'],
        stores: ['HERSS.store.BlogContentStore'],
        refs: {
            MainView: "Main",
            TimeLineList: 'Main TimeLineList',
            ShoppingList: 'Main ShoppingList',
            AppList: 'Main AppList',
            NavigationView: 'navigationview',
            BlogContentView: 'BlogContentView',
            CommentList: 'CommentList',
            BackButton: 'button[name=back]',
            commentButton: 'BlogContentView button[name=comment]'
        },
        control: {
            TimeLineList: {
                itemtap: 'showContentView'
            },
            ShoppingList: {
                itemtap: 'showContentView'
            },
            BackButton: {
                tap: 'hideView'
            },
            commentButton: {
                tap: 'showCommentView'
            }
        },
        Login: true
    },
    //events
    showCommentView: function() {
        if (!this.getCommentList()) {
            Ext.Viewport.add(Ext.create('HERSS.view.CommentList'));
            console.log('create-CommentList');
        }
        this.getCommentList().show();
    },
    hideView: function(obj, e, eOpts) {
        obj.getParent().getParent().hide();
    },
    showContentView: function(list, idx, el, record) {
        if (!this.getBlogContentView()) {
            Ext.Viewport.add(Ext.create('HERSS.view.BlogContentView'));
            console.log('create-BlogContentView');
        }
        var TC = this;
        var id = record.data.postId;
//        console.dir(record.data.author);
        var _BlogContentView = TC.getBlogContentView();
        _BlogContentView.setMasked({
            xtype: 'loadmask',
            message: '载入中...'
        });
        _BlogContentView.show();
//        this.getMainView().setZIndex(-1);
        var onSuccess = function(response, opts) {
            var obj = Ext.decode(response.responseText);
            var status = obj.head.code;
            if (status === 'ok') {
                var store = _BlogContentView.getStore();
                store.removeAt(0);
                store.add(obj.body.data);
//                TC.getCommentButton().setBadgeText(obj.body.data.commentCount);
                _BlogContentView.unmask();
            } else {
                _BlogContentView.unmask();
                Ext.Msg.alert('请求失败', obj.head.message, function() {
                    TC.getBlogContentView().hide();
                    var LC = HERSS.app.getController('LoginController');
                    Ext.Viewport.getAt(1).hide(false);
//                    Ext.Viewport.getAt(1).setZIndex(-1);
                    LC.launch();
                });
            }
        };
        var onFailure = function(response, opts) {
            _BlogContentView.unmask();
            Ext.Msg.alert('请求失败', response.status, Ext.emptyFn);
        };
        Ext.Ajax.request({
            url: HERSS.app.serverURL + 'timeline/' + id,
            params: {'token': HERSS.UserModel.get('token')},
            method: 'GET',
            success: onSuccess,
            failure: onFailure
        });
    },
    initData: function() {
        var proxy = Ext.create('Ext.data.proxy.Ajax', {
            useDefaultXhrHeader: false,
            limitParam: 'size', //设置limit参数，默认为limit
//            pageParam: 'page.page', //设置page参数，默认为page
            url: HERSS.app.serverURL + 'timeline/',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        });
        this.getTimeLineList().getStore().setProxy(proxy);
        console.log('init-TimeLineList');
        proxy = Ext.create('Ext.data.proxy.Ajax', {
            useDefaultXhrHeader: false,
            limitParam: 'size', //设置limit参数，默认为limit
//            pageParam: 'page.page', //设置page参数，默认为page
            url: HERSS.app.serverURL + 'timeline/app/shopping',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        });
        this.getShoppingList().getStore().setProxy(proxy);
        console.log('init-ShoppingList');
        proxy = Ext.create('Ext.data.proxy.Ajax', {
            type: 'ajax',
            useDefaultXhrHeader: false,
            url: HERSS.app.serverURL + 'app/detailInEachApp/',
            reader: {
                type: 'json',
                rootProperty: 'body'
            }
        });
        this.getAppList().getStore().setProxy(proxy);
        console.log('init-AppList');
    },
    updateToken: function() {
        var token = HERSS.UserModel.get('token');
        console.log('token:' + token);
        var params = {'token': token};
        this.getTimeLineList().getStore().getProxy().setExtraParams(params);
        this.getShoppingList().getStore().getProxy().setExtraParams(params);
        this.getAppList().getStore().getProxy().setExtraParams(params);
    },
    loadStore: function() {
        this.getTimeLineList().getStore().load();
        this.getShoppingList().getStore().load();
        this.getAppList().getStore().load();
    },
//life circle
    launch: function() {
        console.log('TC-launch');
        if (!this.getMainView()) {
            console.log('creat-Main');
            Ext.Viewport.add(Ext.create('HERSS.view.Main'));
            this.initData();
        } else {
            this.updateToken();
            console.log('update-Token');
            this.loadStore();
            console.log('load-Store');
            Ext.Viewport.getAt(1).show(true);
            Ext.Viewport.getAt(1).setZIndex(0);
        }

    }
});