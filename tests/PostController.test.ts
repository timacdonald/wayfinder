import { expect, test, describe, beforeAll } from 'vitest'
import { index, show } from '../workbench/resources/js/actions/App/Http/Controllers/PostController'
import {execSync} from 'node:child_process'

beforeAll(() => {
    execSync('vendor/bin/testbench solder:generate --base=workbench/resources/js')
})

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

describe('show', () => {
    test('definition', () => {
      expect(Object.keys(show.definition)).toEqual(['methods', 'uri'])
      expect(show.definition.uri).toBe('/posts/{post}')
      expect(show.definition.methods).toEqual(['get', 'head'])
    })

    test('href', () => {
        expect(show.href({ post: 1 })).toBe('/posts/1')
    })

    test('get', () => {
        expect(show.get({ post: 1 })).toEqual({
            action: '/posts/1',
            method: 'get',
            _method: 'get'
        })
    })

    test('head', () => {
        expect(show.head({ post: 1 })).toEqual({
            action: '/posts/1',
            method: 'get',
            _method: 'head'
        })
    })
})
