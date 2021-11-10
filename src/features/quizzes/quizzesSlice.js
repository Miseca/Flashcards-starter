import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addQuizIds } from '../topics/topicsSlice';


export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, topicId, name, cardIds} = action.payload;
            state.quizzes[id] = {id, topicId, name, cardIds};
        }
    }
});
/* Code to destructure action.payload
        const {name, id, topicId, cardIds} = action.payload;
*/

export const createNewQuizThunk = (payload) => {
    return (dispatch) => {
      // dispatch multiple actions here
      dispatch(addQuiz({
          name: payload.name,
          topicId: payload.topicId,
          id: payload.id,
          cardIds: payload.cardIds
      }));
      dispatch(addQuizIds({
          quizId: payload.id,
          topicId: payload.topicId
      }));
    };
};



export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;