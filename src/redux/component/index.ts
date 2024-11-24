import {createSlice} from '@reduxjs/toolkit'
import {FC} from "react";

type ComponentProperty = {
    [key: string]: unknown
}

export type Component = {
    id: number
    type: string,
    component: FC<unknown>
    properties: ComponentProperty[]
}

const initialState: {components: Component[]} = {
    components: []
}

const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addComponent: (state, action) => {
            state.components.push(action.payload)
        }
    }
})

export const {addComponent} = componentSlice.actions;
export default componentSlice.reducer