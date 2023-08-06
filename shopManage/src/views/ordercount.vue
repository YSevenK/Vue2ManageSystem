<template>
    <div class="home">
        <!-- 定义图表外层容器 -->
        <div id="myHomeChart" ref="homeEcharts"></div>
    </div>
</template>


<script>
export default {
    data() {
        return {}
    },
    mounted() {
        // 调用当前图表
        this.dataChart()
    },
    methods: {
        // 绘制图表
        dataChart() {
            //初始化图表，this.$refs.homeEcharts获取到图表容器
            var myChart = this.$echarts.init(this.$refs.homeEcharts)
            // 初始化配置
            var option = {
                title: {
                    text: '订单统计'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
            // 把参数配置放到容器里
            myChart.setOption(option)
        },
        // 销毁实例(看项目需要进行销毁实例)
        destroyChart() {
            this.$echarts.init(this.$refs.homeEcharts).dispose();
        }
    }
}
</script>
<style>
/* 给图表容器定义宽高 */
#myHomeChart {
    width: 800px;
    height: 450px;
}
</style>
  