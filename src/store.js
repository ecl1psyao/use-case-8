import {configureStore, createReducer} from '@reduxjs/toolkit'

const rootReducer = createReducer({
    firstName: '',
    lastName: '',
    message: '',
    email: ''
}, (builder) => {
    builder
        .addCase('SET_VALUES', (state, action) => action.payload)
})

const store = configureStore({
    reducer: rootReducer,
})

export default store