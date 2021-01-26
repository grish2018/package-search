import { searchResults, currentPackage } from '../../api/fetch'

export default {
    state: {
        searchResults: [],
        currentPackage: {},
        totalResults: 0,
        isLoading: false,
        isLoadingCurrentPackage: false,
        showModal: false
    },
    getters: {
        searchResults(state) {
            return state.searchResults
        },
        isLoading(state) {
            return state.isLoading
        },
        isLoadingCurrentPackage(state) {
            return state.isLoadingCurrentPackage
        },
        currentPackage(state) {
            return state.currentPackage
        },
        totalResults(state) {
            return state.totalResults
        },
        showModal(state) {
            return state.showModal
        }
    },
    actions: {
        async fetchSearchResults({ commit, state }, { text, from = 0 }) {
            state.isLoading = true
            try {
                const { data } = await searchResults(text, from);
                commit('setSearchResults', data.objects);
                commit('setTotalResults', data.total)
                state.isLoading = false
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCurrentPackage({ commit, state }, name) {
            state.isLoadingCurrentPackage = true
            try {
                const { data } = await currentPackage(name);
                commit('setCurrentPackage', data);
                state.isLoadingCurrentPackage = false
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        setSearchResults(state, searchResults) {
            state.searchResults = searchResults
        },
        setTotalResults(state, total) {
            state.totalResults = total
        },
        setCurrentPackage(state, currentPackage) {
            state.currentPackage = currentPackage
        },
        toggleShowModal(state, res) {
            state.showModal = res
        }
    }
}