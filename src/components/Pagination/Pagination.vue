<template>
  <div class="pager-container">
    <a href="javascript:void(0)" class="btn prev end">上一页</a>
    <a href="javascript:void(0)" class="pagei select">1</a>
    <a href="#" class="pagei">2</a>
    <a href="#" class="pagei">3</a>
    <a href="#" class="pagei">4</a>
    <a href="#" class="pagei">5</a>
    <a href="#" class="pagei">6</a>
    <a href="#" class="pagei">7</a>
    <a href="#" class="pagei">8</a>
    <span class="dot">...</span>
    <a href="#" class="pagei">34</a>
    <a href="#" class="btn next">下一页</a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style lang='less'>
.pager-container {
  margin: 20px 0;
  text-align: center;
  .pagei {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    background-color: #fff;
    padding: 0 8px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    margin: 0 2px;
    &:hover {
      border-color: #666;
      text-decoration: none;
    }
    &.select {
      color: #fff;
      border-color: #a2161b;
      background-color: #e1151d;
      cursor: default;
    }
  }
  .dot {
    margin: 0 5px;
    vertical-align: middle;
  }
  .btn {
    display: inline-block;
    width: 66px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background: linear-gradient(#fcfcfc, #e6e6e6);
    &.prev {
      margin-right: 5px;
    }
    &.next {
      margin-left: 5px;
    }
    &:hover {
      text-decoration: none;
      background: linear-gradient(#fcfcfc, #f0f0f0);
    }
    &.end {
      cursor: default;
      color: #cacaca;
      background: linear-gradient(#fafafa, #e8e8e8);
    }
  }
}
</style>