export default {
  mounted(el) {
    const input = el.querySelector('input')
    console.log(input, 'input')
    input.addEventListener('focus', () => {
      if (input.value.length) {
        input.select()
      }
    })
  }
}
