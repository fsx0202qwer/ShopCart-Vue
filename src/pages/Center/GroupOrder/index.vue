<template>
  <div class="order-right">
          <div class="order-content">
            <div class="title">
              <h3>团购订单</h3>
            </div>
            <div class="chosetype">
              <table>
                <thead>
                  <tr>
                    <th width="29%">商品</th>
                    <th width="31%">订单详情</th>
                    <th width="13%">收货人</th>
                    <th>金额</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div style="margin:0px 0px 20px 10px">
                团购订单信息..
            </div>
            
          </div>
          <Like></Like>
        </div>
</template>

<script>
import Like from '@/pages/Center/Like'
export default {
    name:'GroupOrder',
    components:{Like}
}
</script>

<style lang="less" scoped>

        //右边
        .order-right {
          float: right;
          width: 83.33%;

          //订单部分
          .order-content {
            margin: 0 20px;
            color: #666;

            //标题
            .title {
              margin-bottom: 22px;
              border: 1px solid #ddd;

              h3 {
                padding: 12px 10px;
                font-size: 15px;
                background-color: #f1f1f1;

              }
            }

            //表头
            .chosetype {
              margin-bottom: 15px;
              color: #666;

              table {
                border: 1px solid #e6e6e6;
                border-collapse: separate;
                border-radius: 2px;
                width: 100%;
                max-width: 100%;
                border-spacing: 0;

                th {
                  padding: 6px 8px;
                  color: #666;
                  font-weight: 700;
                  vertical-align: bottom;
                  background-color: #f4f4f4;
                  line-height: 18px;
                  border-bottom: 1px solid #e6e6e6;
                  font-size: 12px;
                  text-align: left;
                }
              }
            }
          }

        }
</style>