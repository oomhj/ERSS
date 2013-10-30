Ext.define('HERSS.view.UserInfoView', {
    extend: 'Ext.Container',
    xtype: 'UserInfo',

    config: {
        cls: 'UserInfo',
        tpl: [
            '<div class="header">',
            '<div class="avatar" style="background-image: url({author.avatar});"></div>',
            '<h6>{author.name}</h6>',
            '<h6>{author.desc}</h6>',
            '</div>'
        ].join("")
    }
});
