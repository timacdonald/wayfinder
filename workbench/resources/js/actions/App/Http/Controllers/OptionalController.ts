const validateParameters = (args: Record<string, unknown>|undefined, optional: string[]) => {
    const missing = optional.filter((key) => ! args?.[key])
    const expectedMissing = optional.slice(missing.length * -1)

    for (let i = 0; i < missing.length; i++) {
        if (missing[i] !== expectedMissing[i]) {
            throw Error('Unexpected optional parameters missing. Unable to generate a URL.')
        }
    }
}

/**
 * @see \App\Http\Controllers\OptionalController::optional
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/OptionalController.php:7
 */
export const optional: {
    definition: {
        methods: ('post')[],
        uri: string,
    },
    url: (args?: {
        parameter?: string|number|{ id: string|number },
    }) => string,
    post: (args?: {
        parameter?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'post',
        _method: 'post',
    },
} = {
    definition: {
        methods: ['post'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: (args) => {
        validateParameters(args, [
            "parameter",
        ])

        const parsedArgs = {
            parameter: typeof args?.parameter === 'object'
                ? args.parameter.id
                : args?.parameter,
        }

        return optional.definition.uri
            .replace('{parameter?}', parsedArgs.parameter?.toString() ?? '')
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
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/OptionalController.php:12
 */
export const manyOptional: {
    definition: {
        methods: ('post')[],
        uri: string,
    },
    url: (args?: {
        one?: string|number|{ id: string|number },
        two?: string|number|{ id: string|number },
        three?: string|number|{ id: string|number },
    }) => string,
    post: (args?: {
        one?: string|number|{ id: string|number },
        two?: string|number|{ id: string|number },
        three?: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'post',
        _method: 'post',
    },
} = {
    definition: {
        methods: ['post'],
        get uri() {
            if (this._uri) {
            console.log('calculated')
                return this._uri
            }

            return this._uri = globalThis.location.protocol+'//'+globalThis.location.host+''
        },
    },
    url: (args) => {
        validateParameters(args, [
            "one",
            "two",
            "three",
        ])

        const parsedArgs = {
            one: typeof args?.one === 'object'
                ? args.one.id
                : args?.one,
            two: typeof args?.two === 'object'
                ? args.two.id
                : args?.two,
            three: typeof args?.three === 'object'
                ? args.three.id
                : args?.three,
        }

        return manyOptional.definition.uri
            .replace('{one?}', parsedArgs.one?.toString() ?? '')
            .replace('{two?}', parsedArgs.two?.toString() ?? '')
            .replace('{three?}', parsedArgs.three?.toString() ?? '')
            .replace(/\/+$/, '')
    },
    post: (args) => ({
        action: manyOptional.url(args),
        method: 'post',
        _method: 'post',
    }),
}

