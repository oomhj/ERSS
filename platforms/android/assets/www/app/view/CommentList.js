/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('HERSS.view.CommentList', {
    extend: 'Ext.List',
    xtype: 'CommentList',
//    requires:['HERSS.store.CommentListStore'],
    config: {
        items: [
            {
                docked: 'bottom',
                xtype: 'toolbar',
                title: '发表评论',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        name: 'back',
                        ui: 'round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: '评论',
                        name: 'comment',
                        ui: 'round'
                    }
                ]
            }
        ],
        title: '评论',
        infinite: true,
        grouped: true,
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        emptyText: '<p class="no-searches">暂无评论</p>',
        itemTpl: '<span>{name}</span>',
//        store: {xclass:'HERSS.store.AppListStore'}
        hidden: true,
        showAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slide',
            direction: 'left',
            duration: 250
        },
        hideAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slideOut',
            direction: 'right',
            duration: 250
        }
    }
}
);
