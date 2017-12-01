<script>
// import ShortcodeParser from 'meta-shortcodes'
// import Temperature from 'Temperature.vue'
import Vue from 'vue'

export default {
  props: ['content', 'template'],
  // data: () => {
  //     return {
  //         text: 'Heat oven at [temp c=200]',
  //         parser: ShortcodeParser()
  //     }
  // },
  methods: {
      parseShortcodes(text) {
          return this.parser.parse(text)
      }
  },
  render(createElement) {

    const templateValue = this.template //this.parseShortcodes(this.text) //returns something like this <div class="intruction">'Heat oven at <temperature :celsius="200"></temperature>'</div>

    var cmp = Vue.component('block-content', {
      template: templateValue,
      props: ['data'],
      
    })

    return createElement(
      'div', {
        attrs: {
          'class': 'block'
        }
      }, [
        createElement(cmp)
      ]
    )
  }
}
</script>
