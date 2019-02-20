# vue-qiugu-ms

## 介绍
* 此项目会更新一些基于element-ui的组件
* 项目中用到的接口是博主自行编写的java接口，各位可以换成自己的接口或者是mock数据模拟
* 博主后端java还在学习中，很多接口都是假的，所以很多接口可能报404，辛苦诸位将此项目作为一个参考

## 功能组件

<p>此项目主要为博主平日工作当中用到的一些组件，在这里把这里组件提取出来做成一个大家可能会遇到的一些需求的业务组件，供大家参考</p>

* 选择省市联动天气组件，博主也是参考用了vue-area-linkage的省市插件，再次也是非常感谢此插件的作者，另外就是用的一些开放的天气api，原作者文章[地址](https://blog.csdn.net/c__chao/article/details/78573737)，根据城市来生成相应的天气折线图
* 项目的整体样式主要是学习了网上一位大神的管理系统，地址在[这里](https://github.com/JasonBai007/vue-seed)，大家也可以去看看
* element行可编辑组件，可以实现行内编辑，行删除，添加行等，为了方便后端接受数据，因此传给后端的数据有这么几个，tableData表格数据、addData新增行数据、updateData更新行数据、deleteData删除行数据，根据这些参数，后台进行最终更新数据返回的操作
* 权限管理，即根据addRoutes动态路由，根据后台传来的角色参数生成新的路由表
* 表单验证，传统表单验证依靠element自带的验证就可以了，但是有时候业务需要，我们的input、select等组件可能并不包含在form表单中，因此我们需要单独将验证拎出来做了一个自定义指令的实数表单验证、可以输入正负数，带小数点等，根据每次键盘按下的键来作判断验证
* 带表格的富文本编辑器，因为vue比较有名的vue-quill-editor是不带插入表格功能的，因此要是需要插入表格的话，博主提供的这个tinymce和wangeditor则都是可以进行插入表格的

## 最后
如果有任何疑问都可以通过博主邮箱476710564@qq.com或者是issue来告诉博主，博主还是一个菜鸟，也欢迎大神来指点丫
