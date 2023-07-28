import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizResponse, QuizStore } from "../../utils/type";
const initialState: QuizResponse = {
    quizResponse: {}
}
export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuiz: (state: QuizResponse, action: PayloadAction<QuizStore>) => {
            const { quizId, quizData } = action.payload;
            state.quizResponse[quizId] = quizData;

    }}
});

export const { addQuiz } = quizSlice.actions;
const quizReducer = quizSlice.reducer;
export default quizReducer;