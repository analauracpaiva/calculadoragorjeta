import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

export default await (async () => {
const __VLS_setup = async () => {
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
return {};
},
});
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js';
const __VLS_types: typeof import('./__VLS_types.js');

const __VLS_options = {};

let __VLS_name!: 'App';
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_Component, new () => {}>> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components. /* __VLS_.SearchTexts.Components */;
({} as __VLS_types.GlobalAttrs). /* __VLS_.SearchTexts.GlobalAttrs */;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'logo'?: boolean; } &
{ 'logo'?: boolean; } &
{ 'wrapper'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
declare const HelloWorld: __VLS_types.ConvertInvalidJsxElement<
'HelloWorld' extends keyof typeof __VLS_components ? typeof __VLS_components['HelloWorld'] : 'HelloWorld' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['HelloWorld'] : unknown>;
__VLS_components.HelloWorld;
__VLS_ctx.HelloWorld;
declare const __VLS_0: __VLS_types.ExtractEmit2<typeof HelloWorld>;
/* Completion: Emits */
// @ts-ignore
__VLS_0('/* __VLS_.SearchTexts.Completion.Emit.HelloWorld */');
/* Completion: Props */
// @ts-ignore
(<HelloWorld /* __VLS_.SearchTexts.Completion.Props.HelloWorld */ />);
declare const TheWelcome: __VLS_types.ConvertInvalidJsxElement<
'TheWelcome' extends keyof typeof __VLS_components ? typeof __VLS_components['TheWelcome'] : 'TheWelcome' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx['TheWelcome'] : unknown>;
__VLS_components.TheWelcome;
__VLS_ctx.TheWelcome;
declare const __VLS_1: __VLS_types.ExtractEmit2<typeof TheWelcome>;
/* Completion: Emits */
// @ts-ignore
__VLS_1('/* __VLS_.SearchTexts.Completion.Emit.TheWelcome */');
/* Completion: Props */
// @ts-ignore
(<TheWelcome /* __VLS_.SearchTexts.Completion.Props.TheWelcome */ />);
{
<header></header>;
{
<img alt={"\u0056\u0075\u0065\u0020\u006c\u006f\u0067\u006f"} class={"\u006c\u006f\u0067\u006f"} src={"\u002e\u002f\u0061\u0073\u0073\u0065\u0074\u0073\u002f\u006c\u006f\u0067\u006f\u002e\u0073\u0076\u0067"} width={"\u0031\u0032\u0035"} height={"\u0031\u0032\u0035"} />;
}
{
<div class={"\u0077\u0072\u0061\u0070\u0070\u0065\u0072"}></div>;
{
<HelloWorld msg={"\u0059\u006f\u0075\u0020\u0064\u0069\u0064\u0020\u0069\u0074\u0021"} />;
}
}
}
{
<main></main>;
{
<TheWelcome />;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['logo'];
__VLS_styleScopedClasses['wrapper'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_component = (await import('vue')).defineComponent({
setup() {
return {
HelloWorld: HelloWorld,
TheWelcome: TheWelcome,
};
},
});
return {} as typeof __VLS_Component & (new () => { $slots: ReturnType<typeof __VLS_template>; });
};
return await __VLS_setup();
})();
