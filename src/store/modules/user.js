import { getTopics } from 'request'

export const user = {
    namespaced: true,
    state: {
        topics: []
    },
    getters: {
        allTopics: state => state.topics
    },
    mutations: {
        setTopics(state, result) {
            state.topics = result.data
        }
    },
    actions: {
        async fetchAllTopics({ commit }, option) {
            let result = await getTopics(option)
            commit('setTopics', result)
        }
    }
}