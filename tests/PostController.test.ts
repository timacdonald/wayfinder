import { expect, test, describe } from 'vitest'
import { index } from '../workbench/resources/js/actions/App/Http/Controllers/PostController'

describe('index', () => {
    test('definition', () => {
      expect(Object.keys(index.definition)).toEqual(['methods', 'uri', 'action'])
      expect(index.definition.uri).toBe('/posts')
      expect(index.definition.methods).toEqual(['get', 'head'])
      expect(index.definition.action).toEqual(['App\\Http\\Controllers\\PostController', 'index'])
    })
})
