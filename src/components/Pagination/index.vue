<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-if="startEndInterval[0] > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="startEndInterval[0] > 2">...</button>

    <button
      :class="{ active: pageNo === item }"
      v-for="item in startEndInterval"
      :key="item"
      @click="$emit('getPageNo', item)"
    >
      {{ item }}
    </button>

    <button v-if="startEndInterval[continues - 1] < totalPage - 1">...</button>
    <button
      v-if="startEndInterval[continues - 1] < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo === totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <button class="total">共 {{ total }} 条</button>
    <div>{{ startEndInterval }}</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  pageNo: Number,
  pageSize: Number,
  total: Number,
  continues: Number
});

defineEmits(["getPageNo"]);

const totalPage = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});

const startEndInterval = computed(() => {
  const { continues, pageNo } = props;
  let start;
  let end;
  if (continues > totalPage.value) {
    start = 1;
    end = totalPage.value;
  } else {
    start = pageNo - Math.floor(continues / 2);
    end = pageNo + Math.floor(continues / 2);

    if (start < 1) {
      start = 1;
      end = continues;
    }

    if (end > totalPage.value) {
      start = totalPage.value - continues + 1;
      end = totalPage.value;
    }
  }
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
});
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }

  .total {
    margin-left: 30px;
  }
}
.active {
  background: skyblue;
}
</style>
