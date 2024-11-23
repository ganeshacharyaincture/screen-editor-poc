import {createSlice} from '@reduxjs/toolkit'

type Component = {
    id: number,
    name: string
}

type Container = {
    id: number,
    components: Component[]
}

const initialState: {containers: Container[]} = {
    containers: []
}

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        addContainer: (state, action) => {
            state.containers.push(action.payload)
        }
    }
})

export default containerSlice.reducer;
export const { addContainer } = containerSlice.actions;