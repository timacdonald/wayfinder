import { expect, test, describe } from 'vitest'
import {optional } from '../workbench/resources/js/actions/App/Http/Controllers/Controller'

describe('optional', async () => {
    test('properties', () => {
      expect(Object.keys(optional)).toEqual(['href', 'post', 'definition'])
    })

    test('href', () => {
        expect(optional.href()).toBe('/optional')
        expect(optional.href({ parameter: 'xxxx' })).toBe('/optional/xxxx')
    })

    test('post', () => {
        expect(optional.post()).toEqual({
            action: '/optional',
            method: 'post',
            _method: 'post'
        })

        expect(optional.post({ parameter: 'xxxx' })).toEqual({
            action: '/optional/xxxx',
            method: 'post',
            _method: 'post'
        })
    })

    test('definition', () => {
      expect(Object.keys(optional.definition)).toEqual(['methods', 'uri'])
      expect(optional.definition.methods).toEqual(['post'])
      expect(optional.definition.uri).toBe('/optional/{parameter?}')
    })
})
