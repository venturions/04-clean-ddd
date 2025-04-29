import { makeAnswer } from '../../../../../test/factories/make-answer'
import { InMemoryAnswerAttachmentsRepository } from '../../../../../test/repositories/in-memory-answer-attachments-repository'
import { InMemoryAnswersRepository } from '../../../../../test/repositories/in-memory-answers-repository'
import { OnAnswerCreated } from './on-answer-created'

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository,
    )
  })

  it('should  send a notification when an answer is created', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _onAnswerCreated = new OnAnswerCreated()

    const answer = makeAnswer()

    inMemoryAnswersRepository.create(answer)
  })
})
