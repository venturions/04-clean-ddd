import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: 'instructor-1',
    questionId: 'question-1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
