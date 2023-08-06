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
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    data: [
                        '直接访问',
                        '市场',
                        '搜索引擎',
                        '电子邮件',
                        '联盟广告',
                        '视频广告',
                        '百度',
                        'Google',
                        '必应',
                        '其他'
                    ]
                },
                series: [
                    {
                        name: '来自',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            position: 'inner',
                            fontSize: 14
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1548, name: '搜索引擎' },
                            { value: 775, name: '直接访问' },
                            { value: 679, name: '市场', selected: true }
                        ]
                    },
                    {
                        name: '来自',
                        type: 'pie',
                        radius: ['45%', '60%'],
                        labelLine: {
                            length: 30
                        },
                        label: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#F6F8FC',
                            borderColor: '#8C8D8E',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#6E7079',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#8C8D8E',
                                    width: '100%',
                                    borderWidth: 1,
                                    height: 0
                                },
                                b: {
                                    color: '#4C5058',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#fff',
                                    backgroundColor: '#4C5058',
                                    padding: [3, 4],
                                    borderRadius: 4
                                }
                            }
                        },
                        data: [
                            { value: 1048, name: '百度' },
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '直接访问' },
                            { value: 251, name: 'Google' },
                            { value: 234, name: '联盟广告' },
                            { value: 147, name: '必应' },
                            { value: 135, name: '视频广告' },
                            { value: 102, name: '其他' }
                        ]
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
    width: 700px;
    height: 700px;
}
</style>
  