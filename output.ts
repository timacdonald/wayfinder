/**
 * @see \App\Http\Controllers\OptionalController::manyOptional
 * @see /Users/tim/Code/wayfinder/workbench/app/Http/Controllers/OptionalController.php:5
 */
export const manyOptional: {
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
    definition: {
        methods: ('post')[],
        uri: 'many-optional\/{one?}\/{two?}\/{three?}',
    },
} = {
    url: (args) => manyOptional.definition.uri
        .replace('{one?}', args?.['one']?.toString() ?? '')
        .replace('{two?}', args?.['two']?.toString() ?? '')
        .replace('{three?}', args?.['three']?.toString() ?? '')
        .replace(/\/+$/, ''),
    post: () => {

    },
}
