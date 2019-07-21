
export default {
  state: {
    message: []
  },
  actions: {
    updateMessage (context, { message, status }) {
      console.log(message, status)
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('MESSAGE', message, status, timestamp)
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessage (context, num) {
      context.commit('REMOVE', num)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.commit('TIMEREMOVE', timestamp)
      }, 5000)
    }
  },
  mutations: {
    MESSAGE (state, message, status, timestamp) {
      let messages = []
      messages.push({
        message,
        status,
        timestamp
      })
      state.message = messages
    },
    TIMEREMOVE (state, timestamp) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === timestamp) {
          state.messages.splice(i, 1)
        }
      })
    },
    REMOVE (state, num) {
      state.message.split(num, 1)
    }
  }
}
