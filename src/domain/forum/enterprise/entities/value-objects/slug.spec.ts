import { Slug } from './slug'

test('it should be able to create a slug from text', () => {
  const slug = Slug.createFromText('An example title')

  expect(slug.value).toEqual('an-example-title')
})
