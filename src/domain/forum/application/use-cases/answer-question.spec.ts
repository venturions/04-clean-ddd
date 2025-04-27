import { InMemoryAnswersRepository } from '../../../../../test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

beforeEach(() => {
  inMemoryAnswersRepository = new InMemoryAnswersRepository()
  sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
})

describe('Create Answer', () => {
  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      instructorId: 'instructor-1',
      questionId: 'question-1',
      content: 'Nova resposta',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
