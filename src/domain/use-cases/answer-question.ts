import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const anwser = new Answer(content)

    return anwser
  }
}
