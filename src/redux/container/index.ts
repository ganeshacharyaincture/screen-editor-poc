import {createSlice} from '@reduxjs/toolkit'
import {Component} from "../component";

type Index = {
    id: number,
    components: Component[]
}

const initialState: {containers: Index[]} = {
    containers: []
}

const containerSlice = createSlice({
    name: 'container',
    initialState,
    reducers: {
        addContainer: (state, action) => {
            state.containers.push(action.payload)
        },
        upsertComponent: (state, action) => {
            const { containerId, component } = action.payload;
            const container = state.containers.find((c) => c.id === containerId);
            if (container) {
                container.components.push(component);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase("component/addComponent", (state, action) => {
            const { containerId, component } = action.payload;
            const container = state.containers.find((c) => c.id === containerId);
            if (container) {
                container.components.push(component);
            }
            return state;
        })
    }
})

export default containerSlice.reducer;
export const { addContainer, upsertComponent } = containerSlice.actions;