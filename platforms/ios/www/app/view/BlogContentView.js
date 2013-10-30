Ext.define('HERSS.view.BlogContentView',{
    extend:'Ext.DataView',
    xtype:'BlogContentView',
    requires:['HERSS.store.BlogContentStore'],
    config: {
        cls: 'messageInfo',
        store:{xclass:'HERSS.store.BlogContentStore'},
        itemTpl:'<p>{content}</p><p>共有{commentCount}条评论</p>'
    }
});