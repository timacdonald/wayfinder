/**
 * @see \App\Http\Controllers\ParameterNameController::camel
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/ParameterNameController.php:7
 */
export const camel: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/parameter-names\/{camelCase}\/camel',
    },
    url: (args: {
        camelCase: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        camelCase: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        camelCase: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/parameter-names\/{camelCase}\/camel',
    },
    url: (args) => {
        const parsedArgs = {
            camelCase: typeof args.camelCase === 'object'
                ? args.camelCase.id
                : args.camelCase,
        }

        return camel.definition.uri
            .replace('{camelCase}', parsedArgs.camelCase.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: camel.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: camel.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\ParameterNameController::studly
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/ParameterNameController.php:12
 */
export const studly: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/parameter-names\/{StudlyCase}\/studly',
    },
    url: (args: {
        StudlyCase: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        StudlyCase: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        StudlyCase: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/parameter-names\/{StudlyCase}\/studly',
    },
    url: (args) => {
        const parsedArgs = {
            StudlyCase: typeof args.StudlyCase === 'object'
                ? args.StudlyCase.id
                : args.StudlyCase,
        }

        return studly.definition.uri
            .replace('{StudlyCase}', parsedArgs.StudlyCase.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: studly.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: studly.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\ParameterNameController::snake
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/ParameterNameController.php:17
 */
export const snake: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/parameter-names\/{snake_case}\/snake',
    },
    url: (args: {
        snake_case: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        snake_case: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        snake_case: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/parameter-names\/{snake_case}\/snake',
    },
    url: (args) => {
        const parsedArgs = {
            snake_case: typeof args.snake_case === 'object'
                ? args.snake_case.id
                : args.snake_case,
        }

        return snake.definition.uri
            .replace('{snake_case}', parsedArgs.snake_case.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: snake.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: snake.url(args),
        method: 'get',
        _method: 'head',
    }),
}

/**
 * @see \App\Http\Controllers\ParameterNameController::screamingSnake
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/ParameterNameController.php:22
 */
export const screamingSnake: {
    definition: {
        methods: ('get'|'head')[],
        uri: '\/parameter-names\/{SCREAMING_SNAKE_CASE}\/screaming-snake',
    },
    url: (args: {
        SCREAMING_SNAKE_CASE: string|number|{ id: string|number },
    }) => string,
    get: (args: {
        SCREAMING_SNAKE_CASE: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'get',
    },
    head: (args: {
        SCREAMING_SNAKE_CASE: string|number|{ id: string|number },
    }) => {
        action: string,
        method: 'get',
        _method: 'head',
    },
} = {
    definition: {
        methods: ['get','head'],
        uri: '\/parameter-names\/{SCREAMING_SNAKE_CASE}\/screaming-snake',
    },
    url: (args) => {
        const parsedArgs = {
            SCREAMING_SNAKE_CASE: typeof args.SCREAMING_SNAKE_CASE === 'object'
                ? args.SCREAMING_SNAKE_CASE.id
                : args.SCREAMING_SNAKE_CASE,
        }

        return screamingSnake.definition.uri
            .replace('{SCREAMING_SNAKE_CASE}', parsedArgs.SCREAMING_SNAKE_CASE.toString())
            .replace(/\/+$/, '')
    },
    get: (args) => ({
        action: screamingSnake.url(args),
        method: 'get',
        _method: 'get',
    }),
    head: (args) => ({
        action: screamingSnake.url(args),
        method: 'get',
        _method: 'head',
    }),
}

