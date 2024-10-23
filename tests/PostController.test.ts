import { expect, test, describe, beforeAll } from 'vitest'
import { execSync } from 'node:child_process'

const postControllerPath = '../workbench/resources/js/actions/App/Http/Controllers/PostController'

beforeAll(async () => {
    execSync('vendor/bin/testbench solder:generate --base=workbench/resources/js')
})

describe('index', async () => {
    const { index } = await import(postControllerPath)

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

describe('create', async () => {
    const { create } = await import(postControllerPath)

    test('properties', () => {
      expect(Object.keys(create)).toEqual(['href', 'get', 'head', 'definition'])
    })

    test('href', () => {
        expect(create.href()).toBe('/posts/create')
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
    const { store } = await import(postControllerPath)

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

describe('show', async () => {
    const { show } = await import('../workbench/resources/js/actions/App/Http/Controllers/PostController')

    test('properties', () => {
      expect(Object.keys(show)).toEqual(['href', 'get', 'head', 'definition'])
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

describe('edit', async () => {
    const { edit } = await import(postControllerPath)

    test('properties', () => {
      expect(Object.keys(edit)).toEqual(['href', 'get', 'head', 'definition'])
    })

    test('href', () => {
        expect(edit.href({ post: 1 })).toBe('/posts/1/edit')
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
    const { update } = await import(postControllerPath)

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

describe('destroy', async () => {
    const { destroy } = await import(postControllerPath)

    test('properties', () => {
      expect(Object.keys(destroy)).toEqual(['href', 'delete', 'definition'])
    })

    test('href', () => {
        expect(destroy.href({ post: 1 })).toBe('/posts/1')
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
