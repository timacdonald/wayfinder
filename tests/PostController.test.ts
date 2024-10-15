import { expect, test, describe } from 'vitest'
import { index } from '../workbench/resources/js/actions/App/Http/Controllers/PostController'

describe('index', () => {
    test('definition', () => {
      expect(Object.keys(index.definition)).toEqual(['methods', 'uri'])
      expect(index.definition.uri).toBe('/posts')
      expect(index.definition.methods).toEqual(['get', 'head'])
    })

    test('href', () => {
        expect(index.href()).toBe('/posts')
    })

    test('get', () => {
        expect(index.get()).toEqual({
            action: '/posts',
            method: 'get',
            _method: 'get'
        })
    })

    test('head', () => {
        expect(index.head()).toEqual({
            action: '/posts',
            method: 'get',
            _method: 'head'
        })
    })
})
