Ext.define('HERSS.utils.FirstPagePullRefresh', {
    extend: 'Ext.plugin.PullRefresh',
    config: {
        pullText: '下拉可以更新',
        releaseText: '松开开始更新',
        loadingText: '正在刷新……',
        loadedText: '刷新成功',
        lastUpdatedText: '最近更新时间'
    },
    onLatestFetched: function(operation) {
        var store = this.getList().getStore(),
                newRecords = operation.getRecords();
        store.removeAll(true);
        store.insert(0, newRecords);
        this.setState("loaded");
        this.fireEvent('latestfetched', this);
        if (this.getAutoSnapBack()) {
            this.snapBack();
        }
    }
});
