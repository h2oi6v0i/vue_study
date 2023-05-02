const app = Vue.createApp({
    /************************* 생 명 주 기 *************************/
    /********************** 강의에서 쓰는 훅 ✨ **********************/
  
    /**
     * beforeCreate()
     * 화면에서 아무것도 볼 수 없다.
     * 이 단계에서는 Vue 앱도 완전히 초기화된 상태가 아니다.
     */
    beforeCreate() {
        console.log( 'beforeCreate()' );
    },
  
    /**
     * created() ✨
     * Vue 앱이 내부적으로 초기화되었으나 마운트 된 상태는 아니다.
     * 따라서 눈에 보이는 건 없다.
     */
    created() {
        console.log( 'created()' );
    },
  
    /**
     * beforeMount()
     * 앱이 실제로 마운트 되기(화면에 무언가 표시되기) 직전에 트리거 됨
     */
    beforeMount() {
        console.log( 'beforeMount()' );
    },
  
    /**
     * mounted() ✨
     * beforeMount까지는 화면에 아무것도 없지만 mounted 훅 이후에는 화면에 표시되는 것이 생김
     * 내부적으로 초기화를 마쳤고 데이터도 처리됐고 템플릿이 컴파일을 마쳤기 때문에 화면에 표시되는 출력값이 생김
     */
    mounted() {
        console.log( 'mounted()' );
    },
  
    /************* 데 이 터 변 경 (업데이트 사항이 생겨야 실행되는 훅) *************/
    
    /**
     * beforeUpdate()
     * 화면에 변경 사항 아직 안 보임
     */
    beforeUpdate() {
        console.log( 'beforeUpdate()' );
    },
  
    /**
     * updated() ✨
     * 화면에 변경 사항 보임
     */
    updated() {
        console.log( 'updated()' );
    },
  
    /**************************** 마운트 해제 ****************************/
    
    beforeUnmount() {
        console.log( 'beforeUnmount()' );
    },
  
    /**
     * unmounted() ✨
     */
    unmounted() {
        console.log( 'unmounted()' );
    },
  });
  
  app.mount( '#app' );
  