import { h, defineComponent, ref } from 'vue'
import { NButton } from '@q-labs/naive-ui-plus'

const App = defineComponent({
  setup () {
    return {
      count: ref(0)
    }
  },
  render () {
    return [
      h(
        NButton,
        {
          onClick: () => this.count++
        },
        { default: () => this.count }
      )
    ]
  }
})

export default App
