import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const {name, id, icon} = action.payload;
            state.topics[id] = {id, name, icon, quizIds: []};
        },
        addQuizIds: (state, action) => {
            const { quizId, topicId } = action.payload; 
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});
/* WORKING CODE
            const newTopic = {
                name: action.payload.name,
                id: action.payload.id,
                icon: action.payload.icon,
                quizIds: []
            }
            state.topics[action.payload.id] = newTopic; 
*/

/* NOT WORKING
            state.topics[action.payload.id].push({
                ...action.payload,
                quizIds: []
*/

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIds } = topicsSlice.actions;
export default topicsSlice.reducer;