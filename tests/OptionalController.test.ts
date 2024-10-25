import { expect, test, describe } from 'vitest'
import {optional, manyOptional } from '../workbench/resources/js/actions/App/Http/Controllers/OptionalController'

describe('optional', async () => {
    test('url', () => {
        expect(optional.url()).toBe('/optional')
        expect(optional.url({ parameter: 'xxxx' })).toBe('/optional/xxxx')
    })

    test('definition', () => {
      expect(optional.definition.uri).toBe('/optional/{parameter?}')
    })
})

describe('manyOptional', async () => {
    test('url', () => {
        expect(manyOptional.url()).toBe('/many-optional')
        expect(manyOptional.url({ one: '1' })).toBe('/many-optional/1')
        expect(manyOptional.url({ one: '1', two: '2' })).toBe('/many-optional/1/2')
        expect(manyOptional.url({ one: '1', two: '2', three: '3' })).toBe('/many-optional/1/2/3')
        // TODO: can this throw an exception or be typed away?
        expect(manyOptional.url({ three: '3' })).toBe('/many-optional///3')
    })

    test('definition', () => {
      expect(manyOptional.definition.uri).toBe('/many-optional/{one?}/{two?}/{three?}')
    })
})
