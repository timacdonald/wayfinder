import {expect, it, test} from "vitest";
import { fixedDomain, dynamicDomain } from '../workbench/resources/js/actions/App/Http/Controllers/DomainController'

it('can generate fixed domain urls', () => {
    expect(fixedDomain.url({ param: 'foo' })).toBe('//example.test/fixed-domain/foo')
})

it('can generate dynamic domain urls', () => {
    expect(dynamicDomain.url({
        domain: 'tim.macdonald',
        param: 'foo',
    })).toBe('//tim.macdonald.au/dynamic-domain/foo')
})
