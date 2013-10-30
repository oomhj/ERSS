Ext.define('HERSS.controller.TimeLineController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.BlogContentView'],
        stores:['HERSS.store.BlogContentStore'],
        refs: {
            TimeLineNavigator: 'TimeLineNavigator',
            ShoppingNavigator:'ShoppingNavigator',
            TimeLineList: 'TimeLineList',
            ShoppingList:'ShoppingList'
        },
        control: {
            TimeLineNavigator: {
                beforepop: 'onTimeLineListCardBeforePop'
            },
            TimeLineList: {
                itemtap: 'onTimeLineItemTap'
            },
            ShoppingList:{
                itemtap: 'onShoppingItemTap'  
            }
        },
        Login: true
    },

    onTimeLineItemTap: function (list, idx, el, record) {
        this.createBlogContentView();
        this._BlogContentView.config.title = record.data.post.title;
        this.getTimeLineNavigator().push(this._BlogContentView);
        this.showContentView(record);
    },
    onShoppingItemTap: function (list, idx, el, record) {
        this.createBlogContentView();
        this._BlogContentView.config.title = record.data.post.title;
        this.getShoppingNavigator().push(this._BlogContentView);
        this.showContentView(record);
    }, 
    showContentView:function(record){
        this._BlogContentView.setMasked({
            xtype: 'loadmask',
            message: '载入中...'
        });
        var id = record.data.postId;
        var  _BlogContentView = this._BlogContentView;
        Ext.Ajax.request({
            url:HERSS.app.serverURL+'timeline/'+id,
            params:{'token':HERSS.UserModel.get('token')},
            method :'GET',
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                var status = obj.head.code;
                if(status==='ok'){
                    var store = _BlogContentView.getStore();
                    store.removeAt(0);
                    store.add(obj.body.data);                   
                    _BlogContentView.unmask();
                }else{
                    _BlogContentView.unmask();
                    Ext.Msg.alert('请求失败',obj.head.message, function(){
                        HERSS.app.showLoginView();
                    });
                    
                }

            },
            failure: function(response, opts) {
                this._BlogContentView.unmask();
                Ext.Msg.alert('请求失败',response.status, Ext.emptyFn);
            }
        });
    },
    createBlogContentView:function(){
       if (!this._BlogContentView) {
            this._BlogContentView = Ext.widget('BlogContentView');
        } 
    }
    //life circle
});