<template>
  <div>
    <!-- slot에 데이터가 없을 때 렌더링 막는 방법 -->
    <!-- $slots.header가 undefined이면 false이기 때문에 렌더링 되지 않는다. -->
    <header v-if="$slots.header">
        <slot name="header">
            <!-- <h2>The Default</h2> -->
        </slot>
    </header>
    <!-- name이 없는 <slot>은 기본 슬롯이 되고 "default"라는 이름을 갖는다. -->
    <!-- name이 없는 slot은 하나만 있어야 한다. -->
    <slot></slot>
  </div>
</template>

<script>
export default {
    mounted() {
        /**
         * $slots은 Vue에서 제공하는 내장 프로퍼티로 컴포넌트가 다른 슬롯에 대해 수신하는 슬롯 데이터에 관한 정보를 보유한다.
         * 컴포넌트가 사용될 때마다 mounted가 호출된다. 즉, BaseCard 컴포넌트가 사용된 횟수만큼 console.log가 찍힌다.
         */
        console.log( this.$slots.header );
    },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>