/**
 * @see \App\Http\Controllers\OptionalController::manyOptional
 * @see /Users/tim/Code/solder/workbench/app/Http/Controllers/OptionalController.php:5
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
        method: "post",
        _method: "post",
    },
