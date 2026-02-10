(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-header",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-title",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-description",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c3 = CardDescription;
function CardAction(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-action",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c4 = CardAction;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-content",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 241,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c5 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82896d17a6dda3f36c69d8506eca599611e5e9d1ca1c1946b81fd4cc43ad4947";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "card-footer",
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/card.tsx",
            lineNumber: 282,
            columnNumber: 10
        }, this);
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/tables/CanvasTableCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasTableCard",
    ()=>CanvasTableCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CanvasTableCard({ tableNumber, price, cycles, slots, isActive }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasTableCard.useEffect": ()=>{
            if (!canvasRef.current) return;
            class TonTableCard {
                canvas;
                ctx;
                dpr;
                opts;
                time;
                card;
                animationId;
                constructor(canvas, options){
                    this.canvas = canvas;
                    this.ctx = canvas.getContext('2d');
                    this.dpr = Math.max(1, window.devicePixelRatio || 1);
                    this.time = 0;
                    this.opts = {
                        table: options.table ?? 1,
                        ton: options.ton ?? 10,
                        cyclesClosed: options.cyclesClosed ?? 12,
                        slots: options.slots ?? [
                            null,
                            null,
                            null,
                            null
                        ],
                        width: options.width ?? 450,
                        height: options.height ?? 700,
                        animate: options.animate ?? true,
                        isActive: options.isActive ?? true
                    };
                    this.resize(this.opts.width, this.opts.height);
                    if (this.opts.animate) {
                        this.loop = this.loop.bind(this);
                        this.animationId = requestAnimationFrame(this.loop);
                    } else {
                        this.draw(0);
                    }
                }
                resize(width, height) {
                    this.opts.width = width;
                    this.opts.height = height;
                    this.canvas.width = Math.floor(width * this.dpr);
                    this.canvas.height = Math.floor(height * this.dpr);
                    this.canvas.style.width = `${width}px`;
                    this.canvas.style.height = `${height}px`;
                    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
                    this.draw(0);
                }
                roundRect(ctx, x, y, w, h, r) {
                    const rr = Math.min(r, w / 2, h / 2);
                    ctx.beginPath();
                    ctx.moveTo(x + rr, y);
                    ctx.arcTo(x + w, y, x + w, y + h, rr);
                    ctx.arcTo(x + w, y + h, x, y + h, rr);
                    ctx.arcTo(x, y + h, x, y, rr);
                    ctx.arcTo(x, y, x + w, y, rr);
                    ctx.closePath();
                }
                getAnimatedGradient(ctx, x, y, w, h, t) {
                    const phase = t * 0.001 % 1;
                    const colors = [
                        {
                            r: 59,
                            g: 130,
                            b: 246
                        },
                        {
                            r: 139,
                            g: 92,
                            b: 246
                        },
                        {
                            r: 236,
                            g: 72,
                            b: 153
                        },
                        {
                            r: 59,
                            g: 130,
                            b: 246
                        }
                    ];
                    const grad = ctx.createLinearGradient(x, y, x + w, y + h);
                    for(let i = 0; i < 3; i++){
                        const pos = (i / 2 + phase) % 1;
                        const idx = Math.floor(pos * 3);
                        const nextIdx = (idx + 1) % 3;
                        const localPhase = pos * 3 % 1;
                        const c1 = colors[idx];
                        const c2 = colors[nextIdx];
                        const r = Math.round(c1.r + (c2.r - c1.r) * localPhase);
                        const g = Math.round(c1.g + (c2.g - c1.g) * localPhase);
                        const b = Math.round(c1.b + (c2.b - c1.b) * localPhase);
                        grad.addColorStop(i / 2, `rgba(${r}, ${g}, ${b}, 0.9)`);
                    }
                    return grad;
                }
                drawDiamondIcon(ctx, x, y, s) {
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.strokeStyle = this.opts.isActive ? 'rgba(160, 235, 255, 0.95)' : 'rgba(100, 100, 120, 0.5)';
                    ctx.lineWidth = 2;
                    const w = s;
                    const h = s * 0.72;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(w * 0.22, -h * 0.35);
                    ctx.lineTo(w * 0.78, -h * 0.35);
                    ctx.lineTo(w, 0);
                    ctx.lineTo(w * 0.5, h);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(w * 0.22, -h * 0.35);
                    ctx.lineTo(w * 0.5, 0);
                    ctx.lineTo(w * 0.78, -h * 0.35);
                    ctx.moveTo(w * 0.22, -h * 0.35);
                    ctx.lineTo(w * 0.35, 0);
                    ctx.lineTo(w * 0.5, h);
                    ctx.moveTo(w * 0.78, -h * 0.35);
                    ctx.lineTo(w * 0.65, 0);
                    ctx.lineTo(w * 0.5, h);
                    ctx.stroke();
                    if (this.opts.isActive) {
                        ctx.shadowColor = 'rgba(120,220,255,0.9)';
                        ctx.shadowBlur = 18;
                        ctx.stroke();
                    }
                    ctx.restore();
                }
                drawPlatforms(t) {
                    const ctx = this.ctx;
                    const W = this.opts.width;
                    const H = this.opts.height;
                    if (!this.opts.isActive) return;
                    const cx = W / 2;
                    const baseY = H * 0.88;
                    const baseW = W * 0.72;
                    const baseH = H * 0.045;
                    const layers = [
                        {
                            scale: 1.08,
                            yOff: 18,
                            alpha: 0.25
                        },
                        {
                            scale: 1.00,
                            yOff: 9,
                            alpha: 0.35
                        },
                        {
                            scale: 0.92,
                            yOff: 0,
                            alpha: 0.45
                        }
                    ];
                    layers.forEach({
                        "CanvasTableCard.useEffect": (L, idx)=>{
                            const lw = baseW * L.scale;
                            const lh = baseH;
                            const x = cx - lw / 2;
                            const y = baseY + L.yOff;
                            const g = ctx.createLinearGradient(x, y, x + lw, y + lh);
                            g.addColorStop(0, `rgba(30, 60, 160, ${L.alpha})`);
                            g.addColorStop(0.5, `rgba(60, 40, 180, ${L.alpha})`);
                            g.addColorStop(1, `rgba(120, 40, 200, ${L.alpha})`);
                            ctx.fillStyle = g;
                            this.roundRect(ctx, x, y, lw, lh, 12);
                            ctx.fill();
                            const pulse = 0.6 + 0.4 * Math.sin(t * 0.003 + idx * 0.8);
                            ctx.strokeStyle = this.getAnimatedGradient(ctx, x, y, lw, lh, t);
                            ctx.globalAlpha = pulse * 0.7;
                            ctx.lineWidth = 2;
                            this.roundRect(ctx, x, y, lw, lh, 12);
                            ctx.stroke();
                            ctx.globalAlpha = 1;
                        }
                    }["CanvasTableCard.useEffect"]);
                }
                drawCardShell(t) {
                    const ctx = this.ctx;
                    const W = this.opts.width;
                    const H = this.opts.height;
                    const pad = Math.round(W * 0.08);
                    const x = pad;
                    const y = Math.round(H * 0.06);
                    const w = W - pad * 2;
                    const h = H - Math.round(H * 0.20);
                    this.card = {
                        x,
                        y,
                        w,
                        h
                    };
                    ctx.clearRect(0, 0, W, H);
                    this.drawPlatforms(t);
                    if (this.opts.isActive) {
                        ctx.save();
                        ctx.shadowColor = 'rgba(113, 83, 255, 0.6)';
                        ctx.shadowBlur = 30;
                        this.roundRect(ctx, x, y, w, h, 42);
                        ctx.strokeStyle = 'rgba(130,120,255,0.25)';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.restore();
                    }
                    const fill = ctx.createLinearGradient(x, y, x + w, y + h);
                    if (this.opts.isActive) {
                        fill.addColorStop(0, 'rgba(7, 18, 70, 0.82)');
                        fill.addColorStop(0.55, 'rgba(8, 22, 88, 0.78)');
                        fill.addColorStop(1, 'rgba(28, 12, 88, 0.78)');
                    } else {
                        fill.addColorStop(0, 'rgba(20, 20, 30, 0.6)');
                        fill.addColorStop(1, 'rgba(30, 30, 40, 0.6)');
                    }
                    ctx.fillStyle = fill;
                    this.roundRect(ctx, x, y, w, h, 42);
                    ctx.fill();
                    if (this.opts.isActive) {
                        const pulse = 0.7 + 0.3 * Math.sin(t * 0.002);
                        ctx.strokeStyle = this.getAnimatedGradient(ctx, x, y, w, h, t);
                        ctx.globalAlpha = pulse;
                        ctx.lineWidth = 3;
                        this.roundRect(ctx, x, y, w, h, 42);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                        ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
                        ctx.shadowBlur = 40;
                        ctx.lineWidth = 2;
                        this.roundRect(ctx, x, y, w, h, 42);
                        ctx.stroke();
                        ctx.shadowBlur = 0;
                    }
                    if (this.opts.isActive) {
                        const dustY = y + h * 0.70;
                        for(let i = 0; i < 50; i++){
                            const px = x + 12 + i * 37.17 % (w - 24);
                            const py = dustY + (i * 53.91 + t * 0.02) % (h - (dustY - y) - 12);
                            const a = 0.15 + i * 0.07 % 0.3;
                            ctx.fillStyle = i % 3 === 0 ? `rgba(90,220,255,${a})` : `rgba(200,120,255,${a})`;
                            ctx.beginPath();
                            ctx.arc(px, py, i % 5 * 0.18 + 0.6, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
                drawHeader() {
                    const ctx = this.ctx;
                    const { x, y, w } = this.card;
                    const iconX = x + w * 0.09;
                    const iconY = y + 45;
                    this.drawDiamondIcon(ctx, iconX, iconY, 40);
                    ctx.font = '700 38px Inter, system-ui, Arial, sans-serif';
                    ctx.fillStyle = this.opts.isActive ? 'rgba(240,248,255,0.95)' : 'rgba(160,160,170,0.7)';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`Table ${this.opts.table}`, x + w * 0.35, y + 45);
                }
                drawSlots() {
                    const ctx = this.ctx;
                    const { x, y, w } = this.card;
                    const topY = y + 100;
                    const slotW = (w - 60) / 2;
                    const slotH = 80;
                    const gap = 15;
                    const slotPositions = [
                        {
                            x: x + 20,
                            y: topY
                        },
                        {
                            x: x + 20 + slotW + gap,
                            y: topY
                        },
                        {
                            x: x + 20,
                            y: topY + slotH + 12
                        },
                        {
                            x: x + 20 + slotW + gap,
                            y: topY + slotH + 12
                        }
                    ];
                    ctx.font = '600 18px Inter, system-ui, Arial, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    slotPositions.forEach({
                        "CanvasTableCard.useEffect": (s, i)=>{
                            const slot = this.opts.slots[i];
                            const filled = slot?.nickname || slot?.filled;
                            const fill = ctx.createLinearGradient(s.x, s.y, s.x + slotW, s.y + slotH);
                            if (filled && this.opts.isActive) {
                                fill.addColorStop(0, 'rgba(34, 197, 94, 0.35)');
                                fill.addColorStop(1, 'rgba(59, 130, 246, 0.35)');
                            } else {
                                fill.addColorStop(0, 'rgba(34, 53, 130, 0.35)');
                                fill.addColorStop(1, 'rgba(40, 28, 125, 0.25)');
                            }
                            ctx.fillStyle = fill;
                            this.roundRect(ctx, s.x, s.y, slotW, slotH, 16);
                            ctx.fill();
                            if (filled && this.opts.isActive) {
                                const pulse = 0.6 + 0.4 * Math.sin(this.time * 0.003 + i * 0.5);
                                ctx.strokeStyle = this.getAnimatedGradient(ctx, s.x, s.y, slotW, slotH, this.time + i * 500);
                                ctx.globalAlpha = pulse;
                                ctx.lineWidth = 2.5;
                                this.roundRect(ctx, s.x, s.y, slotW, slotH, 16);
                                ctx.stroke();
                                ctx.globalAlpha = 1;
                                ctx.shadowColor = 'rgba(34, 197, 94, 0.6)';
                                ctx.shadowBlur = 15;
                                ctx.lineWidth = 1.5;
                                this.roundRect(ctx, s.x, s.y, slotW, slotH, 16);
                                ctx.stroke();
                                ctx.shadowBlur = 0;
                            } else if (!filled || !this.opts.isActive) {
                                ctx.strokeStyle = this.opts.isActive ? 'rgba(89,223,255,0.4)' : 'rgba(60,60,70,0.3)';
                                ctx.lineWidth = 1.5;
                                this.roundRect(ctx, s.x, s.y, slotW, slotH, 16);
                                ctx.stroke();
                            }
                            if (slot?.nickname) {
                                ctx.fillStyle = this.opts.isActive ? 'rgba(230,245,255,0.95)' : 'rgba(160,160,170,0.7)';
                                ctx.fillText(slot.nickname, s.x + slotW / 2, s.y + slotH / 2);
                            } else if (!filled) {
                                ctx.fillStyle = 'rgba(120,120,130,0.5)';
                                ctx.fillText('Empty', s.x + slotW / 2, s.y + slotH / 2);
                            }
                        }
                    }["CanvasTableCard.useEffect"]);
                    ctx.textAlign = 'left';
                }
                drawTonBar() {
                    const ctx = this.ctx;
                    const { x, y, w } = this.card;
                    const barX = x + 20;
                    const barY = y + 295;
                    const barW = w - 40;
                    const barH = 70;
                    const g = ctx.createLinearGradient(barX, barY, barX + barW, barY);
                    if (this.opts.isActive) {
                        g.addColorStop(0, 'rgba(17,33,125,0.85)');
                        g.addColorStop(0.5, 'rgba(18,46,165,0.8)');
                        g.addColorStop(1, 'rgba(97,41,163,0.85)');
                    } else {
                        g.addColorStop(0, 'rgba(40,40,50,0.6)');
                        g.addColorStop(1, 'rgba(50,50,60,0.6)');
                    }
                    ctx.fillStyle = g;
                    this.roundRect(ctx, barX, barY, barW, barH, 16);
                    ctx.fill();
                    if (this.opts.isActive) {
                        const pulse = 0.7 + 0.3 * Math.sin(this.time * 0.0025);
                        ctx.strokeStyle = this.getAnimatedGradient(ctx, barX, barY, barW, barH, this.time);
                        ctx.globalAlpha = pulse;
                        ctx.lineWidth = 2.5;
                        this.roundRect(ctx, barX, barY, barW, barH, 16);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                    ctx.font = '700 42px Inter, system-ui, Arial, sans-serif';
                    ctx.fillStyle = this.opts.isActive ? 'rgba(235,245,255,0.98)' : 'rgba(160,160,170,0.7)';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${this.opts.ton} TON`, barX + barW / 2, barY + barH / 2);
                    ctx.textAlign = 'left';
                }
                drawCycles() {
                    const ctx = this.ctx;
                    const { x, y, w } = this.card;
                    ctx.font = '500 28px Inter, system-ui, Arial, sans-serif';
                    ctx.fillStyle = this.opts.isActive ? 'rgba(234,244,255,0.95)' : 'rgba(160,160,170,0.7)';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`Cycles closed: ${this.opts.cyclesClosed}`, x + w / 2, y + 400);
                    ctx.textAlign = 'left';
                }
                draw(timeMs) {
                    this.time = timeMs;
                    this.drawCardShell(timeMs);
                    this.drawHeader();
                    this.drawSlots();
                    this.drawTonBar();
                    this.drawCycles();
                }
                loop(ts) {
                    this.draw(ts);
                    this.animationId = requestAnimationFrame(this.loop.bind(this));
                }
                destroy() {
                    if (this.animationId) {
                        cancelAnimationFrame(this.animationId);
                    }
                }
            }
            const slotsData = slots.map({
                "CanvasTableCard.useEffect.slotsData": (slot)=>({
                        nickname: slot?.nickname,
                        filled: slot?.filled || !!slot?.nickname
                    })
            }["CanvasTableCard.useEffect.slotsData"]);
            cardRef.current = new TonTableCard(canvasRef.current, {
                table: tableNumber,
                ton: price,
                cyclesClosed: cycles,
                slots: slotsData,
                animate: true,
                width: 450,
                height: 700,
                isActive: isActive
            });
            return ({
                "CanvasTableCard.useEffect": ()=>{
                    cardRef.current?.destroy();
                }
            })["CanvasTableCard.useEffect"];
        }
    }["CanvasTableCard.useEffect"], [
        tableNumber,
        price,
        cycles,
        slots,
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "w-full h-auto"
    }, void 0, false, {
        fileName: "[project]/frontend/components/tables/CanvasTableCard.tsx",
        lineNumber: 429,
        columnNumber: 10
    }, this);
}
_s(CanvasTableCard, "aQNFsZptYbQn4e0xrXpa3UBUgO8=");
_c = CanvasTableCard;
var _c;
__turbopack_context__.k.register(_c, "CanvasTableCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ScrollButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollButtons",
    ()=>ScrollButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScrollButtons() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "df3b6ff4b209b560ea96bce3eaf2bbd7c4fd5910c76d80948e51e9edebb951ef") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df3b6ff4b209b560ea96bce3eaf2bbd7c4fd5910c76d80948e51e9edebb951ef";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] !== isDark) {
        t0 = ({
            "ScrollButtons[toggleTheme]": ()=>{
                setIsDark(!isDark);
                document.documentElement.classList.toggle("light-theme");
            }
        })["ScrollButtons[toggleTheme]"];
        $[1] = isDark;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const toggleTheme = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            position: "fixed",
            top: "24px",
            left: "24px",
            zIndex: 99999,
            width: "64px",
            height: "64px"
        };
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(139, 92, 246, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s"
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isDark) {
        t3 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 24,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 65,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 24,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 65,
            columnNumber: 67
        }, this);
        $[5] = isDark;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3 || $[8] !== toggleTheme) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                style: t2,
                children: t3
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 73,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = toggleTheme;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 99999,
            width: "64px",
            height: "64px"
        };
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            background: "rgba(30, 30, 50, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(139, 92, 246, 0.5)",
            boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)"
        };
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    let t8;
    if ($[12] !== isMenuOpen) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full h-full rounded-full flex items-center justify-center transition-all hover:scale-110",
                style: t6,
                onClick: {
                    "ScrollButtons[<button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
                }["ScrollButtons[<button>.onClick]"],
                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-8 w-8 text-purple-300"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 111,
                    columnNumber: 59
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "28px",
                                height: "3px",
                                background: "rgba(168, 85, 247, 0.9)",
                                borderRadius: "10px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 116,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "28px",
                                height: "3px",
                                background: "rgba(168, 85, 247, 0.9)",
                                borderRadius: "10px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 121,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "28px",
                                height: "3px",
                                background: "rgba(168, 85, 247, 0.9)",
                                borderRadius: "10px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 126,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 111,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 109,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        t8 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: 99998
                    },
                    onClick: {
                        "ScrollButtons[<div>.onClick]": ()=>setIsMenuOpen(false)
                    }["ScrollButtons[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 132,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "380px",
                        zIndex: 99999,
                        background: "linear-gradient(180deg, #1B2735 0%, #090A0F 100%)",
                        boxShadow: "-4px 0 40px rgba(0, 0, 0, 0.5)"
                    },
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 148,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 hover:bg-white/10 rounded-lg transition",
                                    onClick: {
                                        "ScrollButtons[<button>.onClick]": ()=>setIsMenuOpen(false)
                                    }["ScrollButtons[<button>.onClick]"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-7 w-7 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 150,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 148,
                                    columnNumber: 138
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 148,
                            columnNumber: 26
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl",
                                    style: {
                                        background: "rgba(139, 92, 246, 0.1)",
                                        border: "1px solid rgba(139, 92, 246, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Total Earned"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 153,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-white",
                                                children: "156.8 TON"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 153,
                                                columnNumber: 129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 153,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 150,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl",
                                    style: {
                                        background: "rgba(139, 92, 246, 0.1)",
                                        border: "1px solid rgba(139, 92, 246, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Active Tables"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 156,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-white",
                                                children: "6/12"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 156,
                                                columnNumber: 130
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 156,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 153,
                                    columnNumber: 204
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl",
                                    style: {
                                        background: "rgba(139, 92, 246, 0.1)",
                                        border: "1px solid rgba(139, 92, 246, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Referrals"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 159,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-white",
                                                children: "47"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 159,
                                                columnNumber: 126
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 159,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 156,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-xl",
                                    style: {
                                        background: "rgba(139, 92, 246, 0.1)",
                                        border: "1px solid rgba(139, 92, 246, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Total Cycles"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 162,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-white",
                                                children: "46"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 162,
                                                columnNumber: 129
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 162,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 159,
                                    columnNumber: 194
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 150,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/tables",
                                    className: "flex items-center gap-4 px-6 py-4 rounded-xl transition-all text-lg font-semibold",
                                    style: {
                                        background: "rgba(139, 92, 246, 0.15)",
                                        border: "1px solid rgba(139, 92, 246, 0.3)",
                                        color: "#a78bfa"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "My Tables"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 162,
                                    columnNumber: 230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/referrals",
                                    className: "flex items-center gap-4 px-6 py-4 rounded-xl transition-all hover:bg-white/5 text-lg font-semibold text-gray-300",
                                    style: {
                                        border: "1px solid rgba(255, 255, 255, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 168,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Referrals"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 168,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 166,
                                    columnNumber: 69
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/stats",
                                    className: "flex items-center gap-4 px-6 py-4 rounded-xl transition-all hover:bg-white/5 text-lg font-semibold text-gray-300",
                                    style: {
                                        border: "1px solid rgba(255, 255, 255, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 170,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Statistics"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 170,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 168,
                                    columnNumber: 69
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/settings",
                                    className: "flex items-center gap-4 px-6 py-4 rounded-xl transition-all hover:bg-white/5 text-lg font-semibold text-gray-300",
                                    style: {
                                        border: "1px solid rgba(255, 255, 255, 0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 172,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 172,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 170,
                                    columnNumber: 75
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 162,
                            columnNumber: 203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 139,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true);
        $[12] = isMenuOpen;
        $[13] = t7;
        $[14] = t8;
    } else {
        t7 = $[13];
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t4 || $[16] !== t7 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t7,
                t8
            ]
        }, void 0, true);
        $[15] = t4;
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
}
_s(ScrollButtons, "K208f5LSgcad65qZ9EBQ43MpntY=");
_c = ScrollButtons;
var _c;
__turbopack_context__.k.register(_c, "ScrollButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TABLE_PRICES",
    ()=>TABLE_PRICES
]);
const TABLE_PRICES = {
    1: 10,
    2: 20,
    3: 40,
    4: 80,
    5: 160,
    6: 320,
    7: 640,
    8: 1280,
    9: 2560,
    10: 5120,
    11: 10240,
    12: 20480
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/tables/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/tables/CanvasTableCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ScrollButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TablesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "b2241cd7a240d7e817b241fa3fd8d41cc258c2b99495411ebda8132d55016864") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b2241cd7a240d7e817b241fa3fd8d41cc258c2b99495411ebda8132d55016864";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [tables, setTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TablesPage[useEffect()]": ()=>{
                setTables([
                    {
                        id: 1,
                        userId: 1,
                        tableNumber: 1,
                        status: "ACTIVE",
                        cycleNumber: 12,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: [
                            {
                                id: 1,
                                tableId: 1,
                                partnerUserId: 4,
                                partnerNickname: "Alice",
                                position: 1,
                                cycleNumber: 12,
                                amountPaid: 9,
                                amountReceived: 9,
                                status: "PAID_OUT",
                                createdAt: new Date().toISOString()
                            },
                            {
                                id: 2,
                                tableId: 1,
                                partnerUserId: 5,
                                partnerNickname: "Bob",
                                position: 2,
                                cycleNumber: 12,
                                amountPaid: 9,
                                amountReceived: 0,
                                status: "HELD_FOR_AUTOPURCHASE",
                                createdAt: new Date().toISOString()
                            },
                            {
                                id: 3,
                                tableId: 1,
                                partnerUserId: 7,
                                partnerNickname: "Charlie",
                                position: 3,
                                cycleNumber: 12,
                                amountPaid: 9,
                                amountReceived: 0,
                                status: "HELD_FOR_AUTOPURCHASE",
                                createdAt: new Date().toISOString()
                            },
                            {
                                id: 4,
                                tableId: 1,
                                partnerUserId: 8,
                                partnerNickname: "Diana",
                                position: 4,
                                cycleNumber: 12,
                                amountPaid: 9,
                                amountReceived: 0,
                                status: "PLATFORM_INCOME",
                                createdAt: new Date().toISOString()
                            }
                        ]
                    },
                    {
                        id: 2,
                        userId: 1,
                        tableNumber: 2,
                        status: "ACTIVE",
                        cycleNumber: 12,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: [
                            {
                                id: 5,
                                tableId: 2,
                                partnerUserId: 9,
                                partnerNickname: "Eve",
                                position: 1,
                                cycleNumber: 12,
                                amountPaid: 18,
                                amountReceived: 18,
                                status: "PAID_OUT",
                                createdAt: new Date().toISOString()
                            },
                            {
                                id: 6,
                                tableId: 2,
                                partnerUserId: 10,
                                partnerNickname: "Frank",
                                position: 2,
                                cycleNumber: 12,
                                amountPaid: 18,
                                amountReceived: 0,
                                status: "HELD_FOR_AUTOPURCHASE",
                                createdAt: new Date().toISOString()
                            }
                        ]
                    },
                    {
                        id: 3,
                        userId: 1,
                        tableNumber: 3,
                        status: "ACTIVE",
                        cycleNumber: 3,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: []
                    },
                    {
                        id: 4,
                        userId: 1,
                        tableNumber: 4,
                        status: "ACTIVE",
                        cycleNumber: 13,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: []
                    },
                    {
                        id: 5,
                        userId: 1,
                        tableNumber: 5,
                        status: "ACTIVE",
                        cycleNumber: 3,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: []
                    },
                    {
                        id: 6,
                        userId: 1,
                        tableNumber: 6,
                        status: "ACTIVE",
                        cycleNumber: 3,
                        createdAt: new Date().toISOString(),
                        closedAt: null,
                        positions: []
                    }
                ]);
                setLoading(false);
            }
        })["TablesPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (loading) {
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/tables/page.tsx",
                            lineNumber: 167,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: "Loading tables..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/tables/page.tsx",
                            lineNumber: 167,
                            columnNumber: 199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 167,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 167,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        return t3;
    }
    let activeTables;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let totalCycles;
    if ($[5] !== tables) {
        activeTables = tables.filter(_TablesPageTablesFilter);
        const activeTableNumbers = activeTables.map(_TablesPageActiveTablesMap);
        totalCycles = tables.reduce(_TablesPageTablesReduce, 0);
        t7 = "min-h-screen relative";
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: _TablesPageButtonOnClick,
                className: "fixed top-4 left-4 z-[99999] px-4 py-2 bg-red-500 text-white rounded text-sm",
                children: "Reset Registration"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 189,
                columnNumber: 54
            }, this);
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollButtons"], {}, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 190,
                columnNumber: 12
            }, this);
            $[15] = t8;
            $[16] = t9;
        } else {
            t8 = $[15];
            t9 = $[16];
        }
        t5 = "container mx-auto p-4 max-w-5xl relative z-10";
        let t10;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
                children: "Matrix TON Tables"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this);
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 text-center",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: [
                        activeTables.length,
                        " of 12 tables active"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 205,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        t3 = "grid grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto px-4";
        t4 = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
        ].map({
            "TablesPage[(anonymous)()]": (tableNumber)=>{
                const table = tables.find({
                    "TablesPage[(anonymous)() > tables.find()]": (t_2)=>t_2.tableNumber === tableNumber
                }["TablesPage[(anonymous)() > tables.find()]"]);
                const isActive = activeTableNumbers.includes(tableNumber);
                const price = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_PRICES"][tableNumber];
                const positions = table?.positions || [];
                const cycles = table?.cycleNumber || 0;
                const slots = [
                    positions.find(_TablesPageAnonymousPositionsFind),
                    positions.find(_TablesPageAnonymousPositionsFind2),
                    positions.find(_TablesPageAnonymousPositionsFind3),
                    positions.find(_TablesPageAnonymousPositionsFind4)
                ];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTableCard"], {
                        tableNumber: tableNumber,
                        price: price,
                        cycles: cycles,
                        slots: slots,
                        isActive: isActive
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 217,
                        columnNumber: 58
                    }, this)
                }, tableNumber, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 217,
                    columnNumber: 16
                }, this);
            }
        }["TablesPage[(anonymous)()]"]);
        $[5] = tables;
        $[6] = activeTables;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
        $[13] = t9;
        $[14] = totalCycles;
    } else {
        activeTables = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        t8 = $[12];
        t9 = $[13];
        totalCycles = $[14];
    }
    let t10;
    if ($[18] !== t3 || $[19] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[18] = t3;
        $[19] = t4;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "h-5 w-5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 252,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Total Earned"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 252,
                                columnNumber: 238
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 252,
                        columnNumber: 138
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: [
                            156.8,
                            " TON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 252,
                        columnNumber: 303
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 252,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    className: "h-5 w-5 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 259,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-400",
                    children: "Active Tables"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 259,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== activeTables.length) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: [
                            activeTables.length,
                            "/12"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 266,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 266,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[23] = activeTables.length;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-5 w-5 text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 274,
                                columnNumber: 189
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Referrals"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 274,
                                columnNumber: 232
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 274,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: 47
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 274,
                        columnNumber: 294
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 274,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-5 w-5 text-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 281,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-400",
                    children: "Total Cycles"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 281,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== totalCycles) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: totalCycles
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 288,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 288,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[27] = totalCycles;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t13 || $[30] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
                t11,
                t13,
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== t10 || $[33] !== t17 || $[34] !== t5 || $[35] !== t6) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t17;
        $[34] = t5;
        $[35] = t6;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t18 || $[38] !== t7 || $[39] !== t8 || $[40] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[37] = t18;
        $[38] = t7;
        $[39] = t8;
        $[40] = t9;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    return t19;
}
_s(TablesPage, "Moz5jHQyMd+ivZ4+NgEy+Kwh774=");
_c = TablesPage;
function _TablesPageAnonymousPositionsFind4(p_2) {
    return p_2.position === 4;
}
function _TablesPageAnonymousPositionsFind3(p_1) {
    return p_1.position === 3;
}
function _TablesPageAnonymousPositionsFind2(p_0) {
    return p_0.position === 2;
}
function _TablesPageAnonymousPositionsFind(p) {
    return p.position === 1;
}
function _TablesPageButtonOnClick() {
    localStorage.clear();
    window.location.href = "/dashboard";
}
function _TablesPageTablesReduce(sum, t_1) {
    return sum + t_1.cycleNumber;
}
function _TablesPageActiveTablesMap(t_0) {
    return t_0.tableNumber;
}
function _TablesPageTablesFilter(t) {
    return t.status === "ACTIVE";
}
var _c;
__turbopack_context__.k.register(_c, "TablesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_5803c032._.js.map