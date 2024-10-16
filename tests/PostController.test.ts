import { expect, test, describe, beforeAll } from 'vitest'
import { index, show, store, update } from '../workbench/resources/js/actions/App/Http/Controllers/PostController'
import {execSync} from 'node:child_process'

beforeAll(() => {
    execSync('vendor/bin/testbench solder:generate --base=workbench/resources/js')
})

describe('index', () => {
    test('properties', () => {
      expect(Object.keys(index)).toEqual(['href', 'get', 'head', 'definition'])
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

    test('definition', () => {
      expect(Object.keys(index.definition)).toEqual(['methods', 'uri'])
      expect(index.definition.methods).toEqual(['get', 'head'])
      expect(index.definition.uri).toBe('/posts')
    })
})

describe('show', () => {
    test('properties', () => {
      expect(Object.keys(index)).toEqual(['href', 'get', 'head', 'definition'])
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

    test('definition', () => {
      expect(Object.keys(show.definition)).toEqual(['methods', 'uri'])
      expect(show.definition.methods).toEqual(['get', 'head'])
      expect(show.definition.uri).toBe('/posts/{post}')
    })

})

describe('store', () => {
    test('properties', () => {
      expect(Object.keys(store)).toEqual(['href', 'post', 'definition'])
    })

    test('href', () => {
        expect(store.href()).toBe('/posts')
    })

    test('post', () => {
        expect(store.post()).toEqual({
            action: '/posts',
            method: 'post',
            _method: 'post'
        })
    })

    test('definition', () => {
      expect(Object.keys(store.definition)).toEqual(['methods', 'uri'])
      expect(store.definition.methods).toEqual(['post'])
      expect(store.definition.uri).toBe('/posts')
    })
})

describe('update', () => {
    test('properties', () => {
      expect(Object.keys(update)).toEqual(['href', 'patch', 'definition'])
    })

    test('href', () => {
        expect(update.href({ post: 1 })).toBe('/posts/1')
    })

    test('patch', () => {
        expect(update.patch({ post: 1 })).toEqual({
            action: '/posts/1',
            method: 'post',
            _method: 'patch'
        })
    })

    test('definition', () => {
      expect(Object.keys(update.definition)).toEqual(['methods', 'uri'])
      expect(update.definition.methods).toEqual(['patch'])
      expect(update.definition.uri).toBe('/posts/{post}')
    })
})
