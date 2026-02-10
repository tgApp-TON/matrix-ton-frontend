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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/tables/CanvasTableCard.tsx [app-client] (ecmascript)");
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
function TablesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "2d74d88f8cf1903bb1765f974bde72b8bf42140a31e1625bfc45b21661277337") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d74d88f8cf1903bb1765f974bde72b8bf42140a31e1625bfc45b21661277337";
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
                            lineNumber: 166,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: "Loading tables..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/tables/page.tsx",
                            lineNumber: 166,
                            columnNumber: 199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 166,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 166,
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
    let totalCycles;
    if ($[5] !== tables) {
        activeTables = tables.filter(_TablesPageTablesFilter);
        const activeTableNumbers = activeTables.map(_TablesPageActiveTablesMap);
        totalCycles = tables.reduce(_TablesPageTablesReduce, 0);
        t7 = "min-h-screen relative";
        t5 = "container mx-auto p-4 max-w-5xl relative z-10";
        let t8;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
                children: "Matrix TON Tables"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 188,
                columnNumber: 12
            }, this);
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 text-center",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: [
                        activeTables.length,
                        " of 12 tables active"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 193,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        t3 = "grid grid-cols-2 gap-6 mb-12";
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
                        lineNumber: 205,
                        columnNumber: 58
                    }, this)
                }, tableNumber, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 205,
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
        $[12] = totalCycles;
    } else {
        activeTables = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
        totalCycles = $[12];
    }
    let t8;
    if ($[14] !== t3 || $[15] !== t4) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 227,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t4;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
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
                                lineNumber: 236,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Total Earned"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 236,
                                columnNumber: 237
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 236,
                        columnNumber: 137
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: [
                            156.8,
                            " TON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 236,
                        columnNumber: 302
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 236,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 236,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                    className: "h-5 w-5 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 243,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-400",
                    children: "Active Tables"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 243,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== activeTables.length) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: [
                            activeTables.length,
                            "/12"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 250,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 250,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[19] = activeTables.length;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
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
                                lineNumber: 258,
                                columnNumber: 189
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Referrals"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 258,
                                columnNumber: 232
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 258,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: 47
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 258,
                        columnNumber: 294
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 258,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-5 w-5 text-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 265,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-gray-400",
                    children: "Total Cycles"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 265,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== totalCycles) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-white",
                        children: totalCycles
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 272,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 272,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[23] = totalCycles;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t11 || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
                t9,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t15 || $[29] !== t5 || $[30] !== t6 || $[31] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t5;
        $[30] = t6;
        $[31] = t8;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== t16 || $[34] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t16
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t7;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    return t17;
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

//# sourceMappingURL=frontend_ae90857c._.js.map