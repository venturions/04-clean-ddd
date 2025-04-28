import { Answer } from 'domain/forum/enterprise/entities/answer'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { AnswersRepository } from '../forum/application/repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const anwser = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answerRepository.create(anwser)

    return anwser
  }
}
