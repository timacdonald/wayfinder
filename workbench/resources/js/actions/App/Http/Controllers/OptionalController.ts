/**
 * @see \App\Http\Controllers\OptionalController::optional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/OptionalController.php:7
 */
export const optional: {
    href: (args?: { parameter?: string|number }) => string,
    post: (args?: { parameter?: string|number }) => { action: string, method: "post", _method: "post" },
    definition: { methods: ("post")[], uri: "\/optional\/{parameter?}" },
} = {
    href: (args?: { parameter?: string|number }) => optional.definition.uri.replace("{parameter?}", (args?.["parameter"]?.toString() ?? '')).replace(/\/+$/, ''),
    post: (args?: { parameter?: string|number }) => ({
        action: optional.definition.uri.replace("{parameter?}", (args?.["parameter"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "post",
        _method: "post",
    }),
    definition: {
        methods: ["post"],
        uri: "\/optional\/{parameter?}",
    },
}

/**
 * @see \App\Http\Controllers\OptionalController::manyOptional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/OptionalController.php:12
 */
export const manyOptional: {
    href: (args?: { one?: string|number, two?: string|number, three?: string|number }) => string,
    post: (args?: { one?: string|number, two?: string|number, three?: string|number }) => { action: string, method: "post", _method: "post" },
    definition: { methods: ("post")[], uri: "\/many-optional\/{one?}\/{two?}\/{three?}" },
} = {
    href: (args?: { one?: string|number, two?: string|number, three?: string|number }) => manyOptional.definition.uri.replace("{one?}", (args?.["one"]?.toString() ?? '')).replace("{two?}", (args?.["two"]?.toString() ?? '')).replace("{three?}", (args?.["three"]?.toString() ?? '')).replace(/\/+$/, ''),
    post: (args?: { one?: string|number, two?: string|number, three?: string|number }) => ({
        action: manyOptional.definition.uri.replace("{one?}", (args?.["one"]?.toString() ?? '')).replace("{two?}", (args?.["two"]?.toString() ?? '')).replace("{three?}", (args?.["three"]?.toString() ?? '')).replace(/\/+$/, ''),
        method: "post",
        _method: "post",
    }),
    definition: {
        methods: ["post"],
        uri: "\/many-optional\/{one?}\/{two?}\/{three?}",
    },
}

