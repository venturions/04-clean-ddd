import { Answer } from '../entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const anwser = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    await this.answerRepository.create(anwser)

    return anwser
  }
}
