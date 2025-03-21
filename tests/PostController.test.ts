import { expect, test, describe, beforeEach } from 'vitest'
import { index, create, store, show, edit, update, destroy } from '../workbench/resources/js/actions/App/Http/Controllers/PostController'
import {beforeEach} from 'node:test'

describe('index', async () => {
    test('properties', () => {
      expect(Object.keys(index)).toEqual(['definition', 'url', 'get', 'head'])
    })

    test('url', () => {
        expect(index.url()).toBe('/posts')
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

describe('create', async () => {
    test('properties', () => {
      expect(Object.keys(create)).toEqual(['definition', 'url', 'get', 'head'])
    })

    test('url', () => {
        expect(create.url()).toBe('/posts/create')
    })

    test('get', () => {
        expect(create.get()).toEqual({
            action: '/posts/create',
            method: 'get',
            _method: 'get'
        })
    })

    test('head', () => {
        expect(create.head()).toEqual({
            action: '/posts/create',
            method: 'get',
            _method: 'head'
        })
    })

    test('definition', () => {
      expect(Object.keys(create.definition)).toEqual(['methods', 'uri'])
      expect(create.definition.methods).toEqual(['get', 'head'])
      expect(create.definition.uri).toBe('/posts/create')
    })
})

describe('store', async () => {
    test('properties', () => {
      expect(Object.keys(store)).toEqual(['definition', 'url', 'post'])
    })

    test('url', () => {
        expect(store.url()).toBe('/posts')
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

describe('show', async () => {
    test('properties', () => {
      expect(Object.keys(show)).toEqual(['definition', 'url', 'get', 'head'])
    })

    test('url', () => {
        expect(show.url({ post: 1 })).toBe('/posts/1')
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

describe('edit', async () => {
    test('properties', () => {
      expect(Object.keys(edit)).toEqual(['definition', 'url', 'get', 'head'])
    })

    test('url', () => {
        expect(edit.url({ post: 1 })).toBe('/posts/1/edit')
    })

    test('get', () => {
        expect(edit.get({ post: 1 })).toEqual({
            action: '/posts/1/edit',
            method: 'get',
            _method: 'get'
        })
    })

    test('head', () => {
        expect(edit.head({ post: 1 })).toEqual({
            action: '/posts/1/edit',
            method: 'get',
            _method: 'head'
        })
    })

    test('definition', () => {
      expect(Object.keys(edit.definition)).toEqual(['methods', 'uri'])
      expect(edit.definition.methods).toEqual(['get', 'head'])
      expect(edit.definition.uri).toBe('/posts/{post}/edit')
    })
})

describe('update', async () => {
    test('properties', () => {
      expect(Object.keys(update)).toEqual(['definition', 'url', 'patch'])
    })

    test('url', () => {
        expect(update.url({ post: 1 })).toBe('/posts/1')
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

describe('destroy', async () => {
    test('properties', () => {
      expect(Object.keys(destroy)).toEqual(['definition', 'url', 'delete'])
    })

    test('url', () => {
        expect(destroy.url({ post: 1 })).toBe('/posts/1')
    })

    test('delete', () => {
        expect(destroy.delete({ post: 1 })).toEqual({
            action: '/posts/1',
            method: 'post',
            _method: 'delete'
        })
    })

    test('definition', () => {
      expect(Object.keys(destroy.definition)).toEqual(['methods', 'uri'])
      expect(destroy.definition.methods).toEqual(['delete'])
      expect(destroy.definition.uri).toBe('/posts/{post}')
    })
})
