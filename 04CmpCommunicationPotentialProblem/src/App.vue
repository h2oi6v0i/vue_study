<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    />
    <knowledge-base @select-topic="activateTopic" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },

  provide() {
    return {
      /** 키는 자유 작명, this 사용해서 특정 인스턴스 데이터에 접근 */
      topics: this.topics 
    }
  },

  methods: {
    /**
     * 이 코드는 Vue.js의 메서드인 activateTopic를 정의하고 있습니다. 이 메서드는 topicId라는 매개변수를 받습니다.
     * 메서드 내부에서는 this.topics.find()를 사용하여 topicId와 일치하는 topic 객체를 찾습니다.
     * 이때 this.topics는 데이터 속성 중 하나로, topic 객체의 배열을 가지고 있습니다.
     * find() 메서드는 배열에서 조건에 맞는 첫 번째 요소를 찾아 해당 요소를 반환합니다.
     * find() 메서드는 콜백 함수를 인자로 받으며, 이 콜백 함수의 인자인 topic은 this.topics 배열의 요소를 하나씩 차례로 가리킵니다.
     * 콜백 함수 내부에서는 topic.id와 topicId를 비교하여 일치하는 요소를 찾습니다.
     * 마지막으로, this.activeTopic 데이터 속성에 일치하는 topic 객체를 할당하여 저장합니다.
     * 이를 통해 활성화된 topic 객체가 무엇인지를 추적하고 있습니다.
     */
    activateTopic( topicId ) {
      this.activeTopic = this.topics.find( ( topic ) => topic.id === topicId );
    },
  },

  mounted() {
    setTimeout( () => {
      this.topics.push( {
        id          : 'events',
        title       : 'Events',
        description : 'Events are important in Vue',
        fullText    : 'Events allow you to trigger code on demand!'
      } );
    }, 2000 ); // 2초 후에 함수 실행
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}
html {
 font-family: 'Poppins', sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>
