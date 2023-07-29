import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizData, QuizStore } from "../../utils/type";
const initialState: QuizData = {
    quizResponse: {},
    canSwitch: false
    
}
export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuiz: (state: QuizData, action: PayloadAction<QuizStore>) => {
            const { quizId, quizData } = action.payload;
            state.quizResponse[quizId] = quizData;
            state.canSwitch = true
        },
        canSwitch: (state: QuizData, action: PayloadAction<boolean>) => {
            state.canSwitch = action.payload
        }
   
}
});

export const { addQuiz, canSwitch } = quizSlice.actions;
const quizReducer = quizSlice.reducer;
export default quizReducer;