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
        console.dir(operation);
        var store = this.getList().getStore(),
                newRecords = operation.getRecords();
        if (newRecords.length !== 0) {
            store.removeAll(true);
            store.insert(0, newRecords);
        }
        this.setState("loaded");
        this.fireEvent('latestfetched', this);
        if (this.getAutoSnapBack()) {
            this.snapBack(true);
        }
    },
    snapBack: function(force) {
        if (this.getState() !== "loaded" && force !== true)
            return;

        var list = this.getList(),
                scroller = list.getScrollable().getScroller();
        console.log('scroller-refresh');
        scroller.refresh();
        scroller.minPosition.y = 0;
        console.log('scroller-on');
        scroller.on({
            scrollend: this.onSnapBackEnd,
            single: true,
            scope: this
        });

        this.setIsSnappingBack(true);
        console.log('scroller-scrollTo');
        scroller.scrollTo(null, 0, {duration: this.getSnappingAnimationDuration()});
    }
});
