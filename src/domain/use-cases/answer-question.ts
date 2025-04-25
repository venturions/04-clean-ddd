import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Answer {
    const anwser = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    return anwser
  }
}
