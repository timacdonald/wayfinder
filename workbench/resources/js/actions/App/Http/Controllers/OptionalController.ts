const validateParameters = (args: Record<string, unknown>|undefined, optional: string[]) => {
    const missing = optional.filter((key) => ! args?.[key])
    const expectedMissing = optional.slice(missing.length * -1)

    for (let i = 0; i < missing.length; i++) {
        if (missing[i] !== expectedMissing[i]) {
            throw Error('whoops')
        }
    }
}

/**
 * @see \App\Http\Controllers\OptionalController::optional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/OptionalController.php:5
 */
export const optional: {
    definition: {
        methods: ('post')[],
        uri: '\/optional\/{parameter?}',
    },
    url: (args?: {
        parameter?: string|number,
    }) => string,
    post: (args?: {
        parameter?: string|number,
    }) => {
        action: string,
        method: 'post',
        _method: 'post',
    },
} = {
    definition: {
        methods: ['post'],
        uri: '\/optional\/{parameter?}',
    },
    url: (args) => {
        validateParameters(args, [
            "parameter",
        ])

        return optional.definition.uri
            .replace('{parameter?}', args?.['parameter']?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    post: (args) => ({
        action: optional.url(args),
        method: 'post',
        _method: 'post',
    }),
}
/**
 * @see \App\Http\Controllers\OptionalController::manyOptional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/OptionalController.php:5
 */
export const manyOptional: {
    definition: {
        methods: ('post')[],
        uri: '\/many-optional\/{one?}\/{two?}\/{three?}',
    },
    url: (args?: {
        one?: string|number,
        two?: string|number,
        three?: string|number,
    }) => string,
    post: (args?: {
        one?: string|number,
        two?: string|number,
        three?: string|number,
    }) => {
        action: string,
        method: 'post',
        _method: 'post',
    },
} = {
    definition: {
        methods: ['post'],
        uri: '\/many-optional\/{one?}\/{two?}\/{three?}',
    },
    url: (args) => {
        validateParameters(args, [
            "one",
            "two",
            "three",
        ])

        return manyOptional.definition.uri
            .replace('{one?}', args?.['one']?.toString() ?? '')
            .replace('{two?}', args?.['two']?.toString() ?? '')
            .replace('{three?}', args?.['three']?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    post: (args) => ({
        action: manyOptional.url(args),
        method: 'post',
        _method: 'post',
    }),
}
