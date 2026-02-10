(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/components/tables/TableCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableCard",
    ()=>TableCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/diamond.js [app-client] (ecmascript) <export default as Diamond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
'use client';
;
;
;
function TableCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "8b195f0716f2125283759e2285b4fb67bc24014a7422e466d910f02e12b286fb") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b195f0716f2125283759e2285b4fb67bc24014a7422e466d910f02e12b286fb";
    }
    const { tableNumber, price, table, isActive } = t0;
    let t1;
    if ($[1] !== table?.positions) {
        t1 = table?.positions || [];
        $[1] = table?.positions;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const positions = t1;
    const cycles = table?.cycleNumber || 0;
    const t2 = `neon-card ${isActive ? "pulse-glow" : "opacity-40"}`;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__["Diamond"], {
            className: "w-6 h-6 text-cyan-400",
            style: {
                filter: "drop-shadow(0 0 5px #22d3ee)"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            textShadow: "0 0 10px rgba(255,255,255,0.5)"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== tableNumber) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-white",
            style: t4,
            children: [
                "Table ",
                tableNumber
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = tableNumber;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== isActive) {
        t6 = !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            className: "w-5 h-5 text-gray-500 ml-auto"
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 65,
            columnNumber: 23
        }, this);
        $[7] = isActive;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t5 || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
                t3,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [
            1,
            2,
            3,
            4
        ];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== positions) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 mb-4",
            children: t8.map({
                "TableCard[(anonymous)()]": (slot)=>{
                    const position = positions.find({
                        "TableCard[(anonymous)() > positions.find()]": (p)=>p.slotNumber === slot
                    }["TableCard[(anonymous)() > positions.find()]"]);
                    const isFilled = !!position;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `aspect-square rounded-lg border-2 ${isFilled ? "border-cyan-400 bg-cyan-400/10" : "border-purple-500/30 bg-purple-500/5"} flex items-center justify-center transition-all duration-300`,
                        style: {
                            boxShadow: isFilled ? "0 0 15px rgba(34, 211, 238, 0.3)" : "0 0 10px rgba(168, 85, 247, 0.1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-2xl font-bold ${isFilled ? "text-cyan-400" : "text-gray-500"}`,
                                    children: slot
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 43
                                }, this),
                                isFilled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-cyan-300 mt-1",
                                    children: "Filled"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 154
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/tables/TableCard.tsx",
                            lineNumber: 97,
                            columnNumber: 14
                        }, this)
                    }, slot, false, {
                        fileName: "[project]/frontend/components/tables/TableCard.tsx",
                        lineNumber: 95,
                        columnNumber: 18
                    }, this);
                }
            }["TableCard[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[13] = positions;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 text-sm",
            children: "Price:"
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== price) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-lg",
                    children: [
                        price,
                        " TON"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                    lineNumber: 114,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, this);
        $[16] = price;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== cycles) {
        t12 = cycles > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400 text-sm",
                    children: "Cycles:"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                    lineNumber: 122,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-400 font-semibold",
                    children: cycles
                }, void 0, false, {
                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                    lineNumber: 122,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 122,
            columnNumber: 25
        }, this);
        $[18] = cycles;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 text-sm",
            children: "Filled:"
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== positions.length) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-cyan-400 font-semibold",
                    children: [
                        positions.length,
                        "/4"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/tables/TableCard.tsx",
                    lineNumber: 137,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[21] = positions.length;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t11 || $[24] !== t12 || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== isActive) {
        t16 = isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300",
            style: {
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
            },
            children: "View Details"
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 155,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-4 w-full py-2 px-4 rounded-lg bg-gray-700 text-gray-400 font-semibold cursor-not-allowed",
            disabled: true,
            children: "Locked"
        }, void 0, false, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 157,
            columnNumber: 32
        }, this);
        $[27] = isActive;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t15 || $[30] !== t16 || $[31] !== t2 || $[32] !== t7 || $[33] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t7,
                t9,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/tables/TableCard.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
        $[31] = t2;
        $[32] = t7;
        $[33] = t9;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    return t17;
}
_c = TableCard;
var _c;
__turbopack_context__.k.register(_c, "TableCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeToggle() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "7ea7f6d01f574580d71f49ef7125066c4f260b01ef7034950fb8d5f16d53a37d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ea7f6d01f574580d71f49ef7125066c4f260b01ef7034950fb8d5f16d53a37d";
    }
    const [isGrayscale, setIsGrayscale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ThemeToggle[useEffect()]": ()=>{
                const saved = localStorage.getItem("theme-grayscale");
                if (saved === "true") {
                    setIsGrayscale(true);
                    document.documentElement.classList.add("grayscale-mode");
                }
            }
        })["ThemeToggle[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== isGrayscale) {
        t2 = ({
            "ThemeToggle[toggleTheme]": ()=>{
                const newValue = !isGrayscale;
                setIsGrayscale(newValue);
                if (newValue) {
                    document.documentElement.classList.add("grayscale-mode");
                    localStorage.setItem("theme-grayscale", "true");
                } else {
                    document.documentElement.classList.remove("grayscale-mode");
                    localStorage.setItem("theme-grayscale", "false");
                }
            }
        })["ThemeToggle[toggleTheme]"];
        $[3] = isGrayscale;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const toggleTheme = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            position: "fixed",
            top: "32px",
            left: "32px",
            zIndex: 50,
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = isGrayscale ? "Color Mode" : "Black & White Mode";
    const t5 = isGrayscale ? "linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899)" : "white";
    let t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "28px",
                height: "4px",
                background: t5,
                borderRadius: "9999px",
                transition: "background 0.3s ease"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ThemeToggle.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t4 || $[9] !== t6 || $[10] !== toggleTheme) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleTheme,
            style: t3,
            title: t4,
            children: t6
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ThemeToggle.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t6;
        $[10] = toggleTheme;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
}
_s(ThemeToggle, "Z/7MGLcftz+svA1xucFDrtmh/0s=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/MenuButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuButton",
    ()=>MenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function MenuButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "d6013d387d64d5e9f8091424bb62b35f3e30631334a32a71780a16cd2484bda7") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6013d387d64d5e9f8091424bb62b35f3e30631334a32a71780a16cd2484bda7";
    }
    const { isOpen, onClick } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            position: "fixed",
            top: "32px",
            right: "32px",
            width: "48px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== isOpen) {
        t2 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        width: "28px",
                        height: "4px",
                        background: "white",
                        borderRadius: "9999px",
                        transform: "rotate(45deg)",
                        transition: "all 0.3s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/MenuButton.tsx",
                    lineNumber: 43,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        width: "28px",
                        height: "4px",
                        background: "white",
                        borderRadius: "9999px",
                        transform: "rotate(-45deg)",
                        transition: "all 0.3s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/MenuButton.tsx",
                    lineNumber: 51,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "6px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "28px",
                        height: "3px",
                        background: "white",
                        borderRadius: "9999px",
                        transition: "all 0.3s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/MenuButton.tsx",
                    lineNumber: 63,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "28px",
                        height: "3px",
                        background: "white",
                        borderRadius: "9999px",
                        transition: "all 0.3s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/MenuButton.tsx",
                    lineNumber: 69,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "28px",
                        height: "3px",
                        background: "white",
                        borderRadius: "9999px",
                        transition: "all 0.3s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/MenuButton.tsx",
                    lineNumber: 75,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/MenuButton.tsx",
            lineNumber: 59,
            columnNumber: 18
        }, this);
        $[2] = isOpen;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClick || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            style: t1,
            "aria-label": "Menu",
            children: t2
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/MenuButton.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[4] = onClick;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = MenuButton;
var _c;
__turbopack_context__.k.register(_c, "MenuButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/ReferralTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReferralTree",
    ()=>ReferralTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ReferralTree(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "a9fb67bc090d349e07a7afdfac1d2060b6271ece24184b07137641a66e2fac42") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9fb67bc090d349e07a7afdfac1d2060b6271ece24184b07137641a66e2fac42";
    }
    const { isOpen, onClose } = t0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ({
            "ReferralTree[useEffect()]": ()=>{
                if (!isOpen) {
                    return;
                }
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                const dpr = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                ctx.scale(dpr, dpr);
                const particles = [];
                for(let i = 0; i < 30; i++){
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.2,
                        vy: (Math.random() - 0.5) * 0.2,
                        size: Math.random() * 1.5 + 0.5
                    });
                }
                let animationId;
                const animate = {
                    "ReferralTree[useEffect() > animate]": ()=>{
                        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
                        ctx.fillRect(0, 0, width, height);
                        particles.forEach({
                            "ReferralTree[useEffect() > animate > particles.forEach()]": (p)=>{
                                p.x = p.x + p.vx;
                                p.y = p.y + p.vy;
                                if (p.x < 0 || p.x > width) {
                                    p.vx = p.vx * -1;
                                }
                                if (p.y < 0 || p.y > height) {
                                    p.vy = p.vy * -1;
                                }
                                ctx.fillStyle = "rgba(200, 200, 200, 0.3)";
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                                ctx.fill();
                            }
                        }["ReferralTree[useEffect() > animate > particles.forEach()]"]);
                        animationId = requestAnimationFrame(animate);
                    }
                }["ReferralTree[useEffect() > animate]"];
                animate();
                return ()=>{
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                };
            }
        })["ReferralTree[useEffect()]"];
        t2 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isOpen) {
        return null;
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== onClose) {
        const referralTree = {
            sponsor: {
                nickname: "CryptoMaster",
                level: "Your Sponsor"
            },
            you: {
                nickname: "YOU",
                totalReferrals: 12
            },
            directReferrals: [
                {
                    nickname: "Alice2024",
                    partners: 3
                },
                {
                    nickname: "BobCrypto",
                    partners: 5
                },
                {
                    nickname: "Charlie99",
                    partners: 0
                },
                {
                    nickname: "DianaW",
                    partners: 2
                }
            ],
            level2: [
                {
                    nickname: "Eve_TON",
                    sponsor: "Alice2024"
                },
                {
                    nickname: "Frank123",
                    sponsor: "Alice2024"
                },
                {
                    nickname: "Grace_X",
                    sponsor: "Alice2024"
                },
                {
                    nickname: "Henry_Z",
                    sponsor: "BobCrypto"
                },
                {
                    nickname: "Ivy_TON",
                    sponsor: "BobCrypto"
                },
                {
                    nickname: "Jack_W",
                    sponsor: "DianaW"
                },
                {
                    nickname: "Kate_M",
                    sponsor: "DianaW"
                },
                {
                    nickname: "Leo_P",
                    sponsor: "BobCrypto"
                }
            ]
        };
        t12 = "fixed inset-0";
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = {
                backgroundColor: "#000000",
                color: "#ffffff",
                zIndex: 100
            };
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this);
            $[18] = t13;
            $[19] = t14;
        } else {
            t13 = $[18];
            t14 = $[19];
        }
        let t16;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = {
                position: "fixed",
                top: "32px",
                right: "32px",
                width: "48px",
                height: "48px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 101,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: 0
            };
            $[20] = t16;
        } else {
            t16 = $[20];
        }
        let t17;
        let t18;
        let t19;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "28px",
                    height: "3px",
                    background: "white",
                    borderRadius: "9999px"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this);
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "28px",
                    height: "3px",
                    background: "white",
                    borderRadius: "9999px"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, this);
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "28px",
                    height: "3px",
                    background: "white",
                    borderRadius: "9999px"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this);
            $[21] = t17;
            $[22] = t18;
            $[23] = t19;
        } else {
            t17 = $[21];
            t18 = $[22];
            t19 = $[23];
        }
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            style: t16,
            "aria-label": "Close",
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        t10 = "relative z-10 h-full overflow-y-auto";
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center p-6 border-b border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    style: {
                        color: "#ffffff"
                    },
                    children: "Referral Tree"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 232,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this);
            $[24] = t11;
        } else {
            t11 = $[24];
        }
        t6 = "p-6 max-w-4xl mx-auto";
        let t20;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs mb-2",
                style: {
                    color: "#999"
                },
                children: "↑ YOUR SPONSOR"
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, this);
            $[25] = t20;
        } else {
            t20 = $[25];
        }
        let t21;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = {
                background: "linear-gradient(135deg, rgba(100, 100, 100, 0.3), rgba(60, 60, 60, 0.3))",
                borderColor: "rgba(180, 180, 180, 0.5)",
                boxShadow: "0 0 20px rgba(150,150,150,0.3)"
            };
            $[26] = t21;
        } else {
            t21 = $[26];
        }
        let t22;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = {
                color: "#fff"
            };
            $[27] = t22;
        } else {
            t22 = $[27];
        }
        let t23;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = {
                color: "#aaa"
            };
            $[28] = t23;
        } else {
            t23 = $[28];
        }
        const t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-3 rounded-xl border-2",
            style: t21,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-bold",
                    style: t22,
                    children: referralTree.sponsor.nickname
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 278,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs",
                    style: t23,
                    children: referralTree.sponsor.level
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 278,
                    columnNumber: 160
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 278,
            columnNumber: 17
        }, this);
        let t25;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "2px",
                    height: "40px",
                    background: "linear-gradient(to bottom, rgba(200,200,200,0.5), rgba(200,200,200,0.2))"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this);
            $[29] = t25;
        } else {
            t25 = $[29];
        }
        if ($[30] !== t24) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-8",
                children: [
                    t20,
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 291,
                columnNumber: 12
            }, this);
            $[30] = t24;
            $[31] = t7;
        } else {
            t7 = $[31];
        }
        let t26;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = {
                background: "linear-gradient(135deg, rgba(150, 150, 150, 0.4), rgba(80, 80, 80, 0.4))",
                borderColor: "rgba(255, 255, 255, 0.8)",
                borderWidth: "3px",
                borderStyle: "solid",
                boxShadow: "0 0 30px rgba(200,200,200,0.5), inset 0 0 20px rgba(255,255,255,0.1)"
            };
            $[32] = t26;
        } else {
            t26 = $[32];
        }
        let t27;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = {
                color: "#fff"
            };
            $[33] = t27;
        } else {
            t27 = $[33];
        }
        let t28;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = {
                color: "#ccc"
            };
            $[34] = t28;
        } else {
            t28 = $[34];
        }
        const t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-8 py-4 rounded-2xl",
            style: t26,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-black text-center",
                    style: t27,
                    children: referralTree.you.nickname
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 328,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-center mt-1",
                    style: t28,
                    children: [
                        "Total Referrals: ",
                        referralTree.you.totalReferrals
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 328,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 328,
            columnNumber: 17
        }, this);
        let t30;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "2px",
                    height: "40px",
                    background: "linear-gradient(to bottom, rgba(200,200,200,0.5), rgba(200,200,200,0.2))"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 331,
                columnNumber: 13
            }, this);
            $[35] = t30;
        } else {
            t30 = $[35];
        }
        if ($[36] !== t29) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-8",
                children: [
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 341,
                columnNumber: 12
            }, this);
            $[36] = t29;
            $[37] = t8;
        } else {
            t8 = $[37];
        }
        let t31;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-sm mb-4",
                style: {
                    color: "#aaa"
                },
                children: "↓ DIRECT REFERRALS (Level 1)"
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 349,
                columnNumber: 13
            }, this);
            $[38] = t31;
        } else {
            t31 = $[38];
        }
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: referralTree.directReferrals.map(_ReferralTreeReferralTreeDirectReferralsMap)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 356,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 356,
            columnNumber: 10
        }, this);
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-sm mb-4",
                style: {
                    color: "#aaa"
                },
                children: "↓ LEVEL 2 REFERRALS"
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 358,
                columnNumber: 12
            }, this);
            $[39] = t5;
        } else {
            t5 = $[39];
        }
        t3 = "grid grid-cols-2 md:grid-cols-4 gap-3";
        t4 = referralTree.level2.map(_ReferralTreeReferralTreeLevel2Map);
        $[4] = onClose;
        $[5] = t10;
        $[6] = t11;
        $[7] = t12;
        $[8] = t13;
        $[9] = t14;
        $[10] = t15;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t10 = $[5];
        t11 = $[6];
        t12 = $[7];
        t13 = $[8];
        t14 = $[9];
        t15 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
        t7 = $[15];
        t8 = $[16];
        t9 = $[17];
    }
    let t16;
    if ($[40] !== t3 || $[41] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[40] = t3;
        $[41] = t4;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== t16 || $[44] !== t5) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[43] = t16;
        $[44] = t5;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            background: "linear-gradient(135deg, rgba(80, 80, 80, 0.3), rgba(40, 40, 40, 0.3))",
            borderColor: "rgba(150, 150, 150, 0.3)",
            boxShadow: "0 0 25px rgba(140,140,140,0.2)"
        };
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold mb-3",
            style: {
                color: "#fff"
            },
            children: "Structure Summary"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            style: {
                color: "#fff"
            },
            children: "4"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs",
                    style: {
                        color: "#aaa"
                    },
                    children: "Level 1"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 445,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[49] = t21;
    } else {
        t21 = $[49];
    }
    let t22;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            style: {
                color: "#fff"
            },
            children: "8"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs",
                    style: {
                        color: "#aaa"
                    },
                    children: "Level 2"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 463,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, this);
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            style: {
                color: "#fff"
            },
            children: "12"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-6 rounded-2xl border",
            style: t18,
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-4 text-center",
                    children: [
                        t21,
                        t23,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t24,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs",
                                    style: {
                                        color: "#aaa"
                                    },
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                                    lineNumber: 481,
                                    columnNumber: 145
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                            lineNumber: 481,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                    lineNumber: 481,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, this);
        $[53] = t25;
    } else {
        t25 = $[53];
    }
    let t26;
    if ($[54] !== t17 || $[55] !== t6 || $[56] !== t7 || $[57] !== t8 || $[58] !== t9) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t17,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[54] = t17;
        $[55] = t6;
        $[56] = t7;
        $[57] = t8;
        $[58] = t9;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== t10 || $[61] !== t11 || $[62] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[60] = t10;
        $[61] = t11;
        $[62] = t26;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    if ($[64] !== t12 || $[65] !== t13 || $[66] !== t14 || $[67] !== t15 || $[68] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            style: t13,
            children: [
                t14,
                t15,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[64] = t12;
        $[65] = t13;
        $[66] = t14;
        $[67] = t15;
        $[68] = t27;
        $[69] = t28;
    } else {
        t28 = $[69];
    }
    return t28;
}
_s(ReferralTree, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ReferralTree;
function _ReferralTreeReferralTreeLevel2Map(ref_0, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-2 rounded-lg border",
        style: {
            background: "linear-gradient(135deg, rgba(70, 70, 70, 0.25), rgba(40, 40, 40, 0.25))",
            borderColor: "rgba(130, 130, 130, 0.3)",
            boxShadow: "0 0 10px rgba(120,120,120,0.15)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-semibold text-center",
                style: {
                    color: "#ddd"
                },
                children: ref_0.nickname
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 529,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-center mt-1",
                style: {
                    color: "#666"
                },
                children: [
                    "via ",
                    ref_0.sponsor
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 531,
                columnNumber: 30
            }, this)
        ]
    }, i_1, true, {
        fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
        lineNumber: 525,
        columnNumber: 10
    }, this);
}
function _ReferralTreeReferralTreeDirectReferralsMap(ref, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 py-3 rounded-xl border",
                style: {
                    background: "linear-gradient(135deg, rgba(90, 90, 90, 0.3), rgba(50, 50, 50, 0.3))",
                    borderColor: "rgba(160, 160, 160, 0.4)",
                    boxShadow: "0 0 15px rgba(140,140,140,0.2)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-bold text-center",
                        style: {
                            color: "#fff"
                        },
                        children: ref.nickname
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                        lineNumber: 540,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-center mt-1",
                        style: {
                            color: "#888"
                        },
                        children: [
                            "Partners: ",
                            ref.partners
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                        lineNumber: 542,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 536,
                columnNumber: 64
            }, this),
            ref.partners > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "2px",
                    height: "30px",
                    background: "linear-gradient(to bottom, rgba(180,180,180,0.4), rgba(180,180,180,0.1))"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
                lineNumber: 544,
                columnNumber: 67
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/frontend/components/layout/ReferralTree.tsx",
        lineNumber: 536,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ReferralTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/StatsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsScreen",
    ()=>StatsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ReferralTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/ReferralTree.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StatsScreen(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "d3c060779d1db8ae6468e7dc3d91343ab52c8ed1971a6218bee496253572814f") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d3c060779d1db8ae6468e7dc3d91343ab52c8ed1971a6218bee496253572814f";
    }
    const { isOpen, onClose } = t0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showTree, setShowTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ({
            "StatsScreen[useEffect()]": ()=>{
                if (!isOpen) {
                    return;
                }
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                const dpr = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                ctx.scale(dpr, dpr);
                const particles = [];
                for(let i = 0; i < 50; i++){
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.3,
                        vy: (Math.random() - 0.5) * 0.3,
                        size: Math.random() * 2 + 1
                    });
                }
                let animationId;
                const animate = {
                    "StatsScreen[useEffect() > animate]": ()=>{
                        ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
                        ctx.fillRect(0, 0, width, height);
                        particles.forEach({
                            "StatsScreen[useEffect() > animate > particles.forEach()]": (p)=>{
                                p.x = p.x + p.vx;
                                p.y = p.y + p.vy;
                                if (p.x < 0 || p.x > width) {
                                    p.vx = p.vx * -1;
                                }
                                if (p.y < 0 || p.y > height) {
                                    p.vy = p.vy * -1;
                                }
                                ctx.fillStyle = "rgba(200, 200, 200, 0.4)";
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                                ctx.fill();
                                particles.forEach({
                                    "StatsScreen[useEffect() > animate > particles.forEach() > particles.forEach()]": (p2)=>{
                                        const dx = p.x - p2.x;
                                        const dy = p.y - p2.y;
                                        const dist = Math.sqrt(dx * dx + dy * dy);
                                        if (dist < 150) {
                                            ctx.strokeStyle = `rgba(150, 150, 150, ${0.2 * (1 - dist / 150)})`;
                                            ctx.lineWidth = 1;
                                            ctx.beginPath();
                                            ctx.moveTo(p.x, p.y);
                                            ctx.lineTo(p2.x, p2.y);
                                            ctx.stroke();
                                        }
                                    }
                                }["StatsScreen[useEffect() > animate > particles.forEach() > particles.forEach()]"]);
                            }
                        }["StatsScreen[useEffect() > animate > particles.forEach()]"]);
                        animationId = requestAnimationFrame(animate);
                    }
                }["StatsScreen[useEffect() > animate]"];
                animate();
                return ()=>{
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                };
            }
        })["StatsScreen[useEffect()]"];
        t2 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isOpen) {
        return null;
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            totalEarned: 1456.8,
            activePartners: 47,
            totalCycles: 156,
            pendingPayout: 54.2
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const stats = t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            color: "#ffffff"
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "absolute inset-0"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            position: "fixed",
            top: "32px",
            right: "32px",
            width: "48px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: 0
        };
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "28px",
                height: "3px",
                background: "white",
                borderRadius: "9999px"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "28px",
                height: "3px",
                background: "white",
                borderRadius: "9999px"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "28px",
                height: "3px",
                background: "white",
                borderRadius: "9999px"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] !== onClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            style: t6,
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[11] = onClose;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-6 border-b border-gray-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                style: {
                    color: "#ffffff"
                },
                children: "Statistics"
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 204,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            background: "linear-gradient(135deg, rgba(80, 80, 80, 0.3), rgba(40, 40, 40, 0.3))",
            borderImage: "linear-gradient(135deg, rgba(200,200,200,0.8), rgba(150,150,150,0.8), rgba(100,100,100,0.8)) 1",
            boxShadow: "0 0 40px rgba(150,150,150,0.3), inset 0 0 20px rgba(200,200,200,0.1)"
        };
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm mb-1 font-medium",
            style: {
                color: "#ffffff"
            },
            children: "Total Earned"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-5xl font-black",
                    style: {
                        color: "#ffffff"
                    },
                    children: [
                        stats.totalEarned,
                        " TON"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 233,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            background: "rgba(150, 150, 150, 0.3)"
        };
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-4",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-2xl",
                    style: t15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "w-8 h-8",
                        style: {
                            color: "#e5e5e5"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                        lineNumber: 251,
                        columnNumber: 116
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 251,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-3xl p-6 border-2",
            style: t12,
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-sm font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#b0b0b0"
                            },
                            children: "↑ 12.5%"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                            lineNumber: 260,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "#ffffff"
                            },
                            children: "vs last week"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                            lineNumber: 262,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 260,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            background: "linear-gradient(135deg, rgba(100, 100, 100, 0.2), rgba(60, 60, 60, 0.2))",
            borderColor: "rgba(150, 150, 150, 0.3)",
            boxShadow: "0 0 20px rgba(150,150,150,0.2)"
        };
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "w-6 h-6",
            style: {
                color: "#c0c0c0"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    let t20;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    style: {
                        color: "#ffffff"
                    },
                    children: stats.activePartners
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 291,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[22] = t20;
    } else {
        t20 = $[22];
    }
    let t21;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl p-5 border",
            style: t18,
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    style: {
                        color: "#ffffff"
                    },
                    children: "Active Partners"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 300,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            background: "linear-gradient(135deg, rgba(110, 110, 110, 0.2), rgba(70, 70, 70, 0.2))",
            borderColor: "rgba(160, 160, 160, 0.3)",
            boxShadow: "0 0 20px rgba(160,160,160,0.2)"
        };
        $[24] = t22;
    } else {
        t22 = $[24];
    }
    let t23;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
            className: "w-6 h-6",
            style: {
                color: "#d0d0d0"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[25] = t23;
    } else {
        t23 = $[25];
    }
    let t24;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    style: {
                        color: "#ffffff"
                    },
                    children: stats.totalCycles
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 329,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[26] = t24;
    } else {
        t24 = $[26];
    }
    let t25;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl p-5 border",
            style: t22,
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium",
                    style: {
                        color: "#ffffff"
                    },
                    children: "Cycles Closed"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 338,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[27] = t25;
    } else {
        t25 = $[27];
    }
    let t26;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            background: "linear-gradient(135deg, rgba(90, 90, 90, 0.2), rgba(50, 50, 50, 0.2))",
            borderColor: "rgba(140, 140, 140, 0.3)",
            boxShadow: "0 0 20px rgba(140,140,140,0.2)"
        };
        $[28] = t26;
    } else {
        t26 = $[28];
    }
    let t27;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
            className: "w-6 h-6",
            style: {
                color: "#b5b5b5"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[29] = t27;
    } else {
        t27 = $[29];
    }
    let t28;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold",
                    style: {
                        color: "#ffffff"
                    },
                    children: stats.pendingPayout
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 367,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[30] = t28;
    } else {
        t28 = $[30];
    }
    let t29;
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                t21,
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-5 border",
                    style: t26,
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium",
                            style: {
                                color: "#ffffff"
                            },
                            children: "Pending (TON)"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                            lineNumber: 377,
                            columnNumber: 133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 377,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        t30 = ({
            "StatsScreen[<button>.onClick]": ()=>setShowTree(true)
        })["StatsScreen[<button>.onClick]"];
        $[31] = t29;
        $[32] = t30;
    } else {
        t29 = $[31];
        t30 = $[32];
    }
    let t31;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            background: "linear-gradient(135deg, rgba(120, 120, 120, 0.3), rgba(70, 70, 70, 0.3))",
            borderColor: "rgba(200, 200, 200, 0.5)",
            boxShadow: "0 0 25px rgba(180,180,180,0.3)"
        };
        $[33] = t31;
    } else {
        t31 = $[33];
    }
    let t32;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "w-8 h-8",
            style: {
                color: "#e5e5e5"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[34] = t32;
    } else {
        t32 = $[34];
    }
    let t33;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xl font-bold",
            style: {
                color: "#ffffff"
            },
            children: "View Referral Tree"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[35] = t33;
    } else {
        t33 = $[35];
    }
    let t34;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t30,
            className: "w-full rounded-2xl p-6 border-2 transition-all hover:scale-105",
            style: t31,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4",
                children: [
                    t32,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t33,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                style: {
                                    color: "#aaa"
                                },
                                children: "See your network structure"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                                lineNumber: 420,
                                columnNumber: 191
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                        lineNumber: 420,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 420,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[36] = t34;
    } else {
        t34 = $[36];
    }
    let t35;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            background: "linear-gradient(135deg, rgba(70, 70, 70, 0.3), rgba(40, 40, 40, 0.3))",
            borderColor: "rgba(130, 130, 130, 0.2)",
            boxShadow: "0 0 30px rgba(130,130,130,0.2)"
        };
        $[37] = t35;
    } else {
        t35 = $[37];
    }
    let t36;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold mb-4",
            style: {
                color: "#ffffff"
            },
            children: "Tables Status"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[38] = t36;
    } else {
        t36 = $[38];
    }
    let t37;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl p-6 border",
            style: t35,
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ].map(_StatsScreenAnonymous)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 449,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[39] = t37;
    } else {
        t37 = $[39];
    }
    let t38;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            background: "linear-gradient(135deg, rgba(60, 60, 60, 0.3), rgba(30, 30, 30, 0.3))",
            borderColor: "rgba(120, 120, 120, 0.2)",
            boxShadow: "0 0 30px rgba(120,120,120,0.2)"
        };
        $[40] = t38;
    } else {
        t38 = $[40];
    }
    let t39;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold mb-4",
            style: {
                color: "#ffffff"
            },
            children: "Recent Activity"
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 467,
            columnNumber: 11
        }, this);
        $[41] = t39;
    } else {
        t39 = $[41];
    }
    let t40;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 h-full overflow-y-auto",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6",
                    children: [
                        t17,
                        t29,
                        t34,
                        t37,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl p-6 border",
                            style: t38,
                            children: [
                                t39,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        "New partner joined Table 2",
                                        "Cycle closed on Table 4",
                                        "Payout received: 18 TON",
                                        "Table 3 activated"
                                    ].map(_StatsScreenAnonymous2)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                                    lineNumber: 476,
                                    columnNumber: 178
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                            lineNumber: 476,
                            columnNumber: 121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                    lineNumber: 476,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[42] = t40;
    } else {
        t40 = $[42];
    }
    let t41;
    if ($[43] !== t10) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black",
            style: t4,
            children: [
                t5,
                t10,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[43] = t10;
        $[44] = t41;
    } else {
        t41 = $[44];
    }
    let t42;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "StatsScreen[<ReferralTree>.onClose]": ()=>setShowTree(false)
        })["StatsScreen[<ReferralTree>.onClose]"];
        $[45] = t42;
    } else {
        t42 = $[45];
    }
    let t43;
    if ($[46] !== showTree) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ReferralTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferralTree"], {
            isOpen: showTree,
            onClose: t42
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[46] = showTree;
        $[47] = t43;
    } else {
        t43 = $[47];
    }
    let t44;
    if ($[48] !== t41 || $[49] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t41,
                t43
            ]
        }, void 0, true);
        $[48] = t41;
        $[49] = t43;
        $[50] = t44;
    } else {
        t44 = $[50];
    }
    return t44;
}
_s(StatsScreen, "NqzsfqJwP2Ywg3uYjrMkShclN2o=");
_c = StatsScreen;
function _StatsScreenAnonymous2(activity, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 p-3 rounded-lg",
        style: {
            background: "rgba(255, 255, 255, 0.05)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2 h-2 rounded-full",
                style: {
                    background: "#c5c5c5"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 520,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium",
                style: {
                    color: "#ffffff"
                },
                children: activity
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 522,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-auto text-xs",
                style: {
                    color: "#ffffff"
                },
                children: [
                    i_0 + 2,
                    "m ago"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 524,
                columnNumber: 25
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
        lineNumber: 518,
        columnNumber: 10
    }, this);
}
function _StatsScreenAnonymous(num) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-4 rounded-xl",
        style: {
            background: "rgba(255, 255, 255, 0.05)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 rounded-full",
                        style: {
                            background: "#d0d0d0",
                            boxShadow: "0 0 10px rgba(200,200,200,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                        lineNumber: 531,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        style: {
                            color: "#ffffff"
                        },
                        children: [
                            "Table ",
                            num
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                        lineNumber: 534,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 531,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                style: {
                    color: "#ffffff"
                },
                children: [
                    "Active • Cycle #",
                    Math.floor(Math.random() * 20) + 1
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
                lineNumber: 536,
                columnNumber: 34
            }, this)
        ]
    }, num, true, {
        fileName: "[project]/frontend/components/layout/StatsScreen.tsx",
        lineNumber: 529,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "StatsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/ScrollButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollButtons",
    ()=>ScrollButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$MenuButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/MenuButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$StatsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/StatsScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ScrollButtons() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "94c543b8b844774b11b166f45dc43731f7727a11590eb15dd5244654750fbc66") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "94c543b8b844774b11b166f45dc43731f7727a11590eb15dd5244654750fbc66";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] !== lastScrollY) {
        t0 = ({
            "ScrollButtons[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollButtons[useEffect() > handleScroll]": ()=>{
                        const currentScrollY = window.scrollY;
                        if (currentScrollY > lastScrollY && currentScrollY > 50) {
                            setIsVisible(false);
                        } else {
                            setIsVisible(true);
                        }
                        setLastScrollY(currentScrollY);
                    }
                }["ScrollButtons[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollButtons[useEffect()]"];
        t1 = [
            lastScrollY
        ];
        $[1] = lastScrollY;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = isVisible ? "translateY(0)" : "translateY(-100px)";
    let t3;
    if ($[4] !== t2) {
        t3 = {
            transform: t2
        };
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
            fileName: "[project]/frontend/components/layout/ScrollButtons.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "transition-transform duration-300",
            style: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ScrollButtons.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = isVisible ? "translateY(0)" : "translateY(-100px)";
    let t7;
    if ($[9] !== t6) {
        t7 = {
            transform: t6
        };
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== isMenuOpen) {
        t8 = ({
            "ScrollButtons[<MenuButton>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
        })["ScrollButtons[<MenuButton>.onClick]"];
        $[11] = isMenuOpen;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== isMenuOpen || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$MenuButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuButton"], {
            isOpen: isMenuOpen,
            onClick: t8
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ScrollButtons.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[13] = isMenuOpen;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t7 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "transition-transform duration-300",
            style: t7,
            children: t9
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ScrollButtons.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[16] = t7;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "ScrollButtons[<StatsScreen>.onClose]": ()=>setIsMenuOpen(false)
        })["ScrollButtons[<StatsScreen>.onClose]"];
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== isMenuOpen) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$StatsScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsScreen"], {
            isOpen: isMenuOpen,
            onClose: t11
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/ScrollButtons.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[20] = isMenuOpen;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t10 || $[23] !== t12 || $[24] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                t10,
                t12
            ]
        }, void 0, true);
        $[22] = t10;
        $[23] = t12;
        $[24] = t5;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    return t13;
}
_s(ScrollButtons, "XqujocCzcTJ1dDY1MfkCKGuyPus=");
_c = ScrollButtons;
var _c;
__turbopack_context__.k.register(_c, "ScrollButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/AnimatedBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBackground",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AnimatedBackground() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3e8fba06e04cf9ef36599b6f60675ecbc28908ac0d2f9d52239915eb29d1c574") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e8fba06e04cf9ef36599b6f60675ecbc28908ac0d2f9d52239915eb29d1c574";
    }
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AnimatedBackground[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const stars = [];
                for(let i = 0; i < 100; i++){
                    stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 2,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        opacity: Math.random()
                    });
                }
                function animate() {
                    if (!ctx || !canvas) {
                        return;
                    }
                    ctx.fillStyle = "rgba(26, 26, 46, 0.1)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    stars.forEach({
                        "AnimatedBackground[useEffect() > animate > stars.forEach()]": (star)=>{
                            star.x = star.x + star.vx;
                            star.y = star.y + star.vy;
                            if (star.x < 0 || star.x > canvas.width) {
                                star.vx = star.vx * -1;
                            }
                            if (star.y < 0 || star.y > canvas.height) {
                                star.vy = star.vy * -1;
                            }
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                            ctx.fill();
                        }
                    }["AnimatedBackground[useEffect() > animate > stars.forEach()]"]);
                    requestAnimationFrame(animate);
                }
                animate();
                const handleResize = {
                    "AnimatedBackground[useEffect() > handleResize]": ()=>{
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                    }
                }["AnimatedBackground[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>window.removeEventListener("resize", handleResize);
            }
        })["AnimatedBackground[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/frontend/components/layout/AnimatedBackground.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(AnimatedBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AnimatedBackground;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/layout/RegistrationScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegistrationScreen",
    ()=>RegistrationScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$providers$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/providers/TelegramProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/AnimatedBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const COUNTRIES = [
    {
        code: 'US',
        name: 'United States',
        flag: '🇺🇸'
    },
    {
        code: 'RU',
        name: 'Russia',
        flag: '🇷🇺'
    },
    {
        code: 'GB',
        name: 'United Kingdom',
        flag: '🇬🇧'
    },
    {
        code: 'DE',
        name: 'Germany',
        flag: '🇩🇪'
    },
    {
        code: 'FR',
        name: 'France',
        flag: '🇫🇷'
    },
    {
        code: 'ES',
        name: 'Spain',
        flag: '🇪🇸'
    },
    {
        code: 'IT',
        name: 'Italy',
        flag: '🇮🇹'
    },
    {
        code: 'UA',
        name: 'Ukraine',
        flag: '🇺🇦'
    },
    {
        code: 'PL',
        name: 'Poland',
        flag: '🇵🇱'
    },
    {
        code: 'TR',
        name: 'Turkey',
        flag: '🇹🇷'
    }
];
function RegistrationScreen({ onComplete }) {
    _s();
    const { user, webApp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$providers$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('check');
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [referralCode, setReferralCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [referralStatus, setReferralStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isValidating, setIsValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checks, setChecks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        premium: false,
        accountAge: false,
        channelSubscribed: false
    });
    const isNicknameValid = nickname.length >= 3 && nickname.length <= 20 && /^[a-zA-Z0-9_]+$/.test(nickname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegistrationScreen.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const refCode = params.get('ref');
            if (refCode) {
                setReferralCode(refCode);
                validateReferralCode(refCode);
            }
        }
    }["RegistrationScreen.useEffect"], []);
    const validateReferralCode = async (code)=>{
        if (!code || code.length === 0) {
            setReferralStatus(null);
            return;
        }
        setIsValidating(true);
        try {
            const response = await fetch(`/api/referral/validate?code=${code}`);
            const data = await response.json();
            if (data.valid) {
                setReferralStatus({
                    valid: true,
                    username: data.username
                });
            } else {
                setReferralStatus({
                    valid: false,
                    error: 'Invalid referral code'
                });
            }
        } catch (error) {
            setReferralStatus({
                valid: false,
                error: 'Failed to validate code'
            });
        } finally{
            setIsValidating(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegistrationScreen.useEffect": ()=>{
            const timer = setTimeout({
                "RegistrationScreen.useEffect.timer": ()=>{
                    setChecks({
                        premium: user?.is_premium || false,
                        accountAge: true,
                        channelSubscribed: true
                    });
                    if (user?.is_premium) {
                        setTimeout({
                            "RegistrationScreen.useEffect.timer": ()=>setStep('nickname')
                        }["RegistrationScreen.useEffect.timer"], 3000);
                    }
                }
            }["RegistrationScreen.useEffect.timer"], 1000);
            return ({
                "RegistrationScreen.useEffect": ()=>clearTimeout(timer)
            })["RegistrationScreen.useEffect"];
        }
    }["RegistrationScreen.useEffect"], [
        user
    ]);
    const handleNicknameSubmit = ()=>{
        if (isNicknameValid) {
            setStep('country');
        }
    };
    const handleCountrySubmit = ()=>{
        if (country) {
            setStep('referral');
        }
    };
    const handleReferralSubmit = ()=>{
        console.log('Registration:', {
            nickname,
            country,
            referralCode
        });
        onComplete();
    };
    const handleSkipReferral = ()=>{
        setReferralCode('');
        setReferralStatus(null);
        onComplete();
    };
    const containerStyle = {
        position: 'relative',
        zIndex: 10,
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        background: 'rgba(26, 26, 46, 0.7)',
        backdropFilter: 'blur(20px)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
    };
    const inputStyle = {
        width: '100%',
        boxSizing: 'border-box',
        padding: '1rem 1.25rem',
        background: 'rgba(15, 15, 35, 0.6)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '0.75rem',
        color: '#ffffff',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease'
    };
    const buttonStyle = {
        width: '100%',
        boxSizing: 'border-box',
        padding: '1rem 1.5rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '0.75rem',
        color: '#ffffff',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBackground"], {}, void 0, false, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    animation: 'pulse 4s ease-in-out infinite',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '250px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    animation: 'pulse 4s ease-in-out infinite 1s',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '2rem 1rem'
                },
                children: [
                    step === 'check' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: containerStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                        size: 48,
                                        style: {
                                            color: '#8b5cf6',
                                            marginBottom: '1rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.75rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Checking Requirements"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.6)'
                                        },
                                        children: "Verifying your Telegram account..."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            background: checks.premium ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            border: `1px solid ${checks.premium ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                                            borderRadius: '0.75rem',
                                            transition: 'all 0.3s ease'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    borderRadius: '50%',
                                                    background: checks.premium ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '1rem'
                                                },
                                                children: checks.premium ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#22c55e'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 37
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    minWidth: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            marginBottom: '0.25rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                size: 16,
                                                                style: {
                                                                    color: '#8b5cf6'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: '#ffffff'
                                                                },
                                                                children: "Telegram Premium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            color: 'rgba(255, 255, 255, 0.6)',
                                                            margin: 0
                                                        },
                                                        children: checks.premium ? 'Premium subscription active' : 'Premium subscription required'
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            background: checks.accountAge ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            border: `1px solid ${checks.accountAge ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                                            borderRadius: '0.75rem',
                                            transition: 'all 0.3s ease'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    borderRadius: '50%',
                                                    background: checks.accountAge ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '1rem'
                                                },
                                                children: checks.accountAge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#22c55e'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 40
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: '#ffffff',
                                                            marginBottom: '0.25rem'
                                                        },
                                                        children: "Account Age"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            color: 'rgba(255, 255, 255, 0.6)',
                                                            margin: 0
                                                        },
                                                        children: checks.accountAge ? 'Account is older than 12 months' : 'Account must be 12+ months old'
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            background: checks.channelSubscribed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            border: `1px solid ${checks.channelSubscribed ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                                            borderRadius: '0.75rem',
                                            transition: 'all 0.3s ease'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    borderRadius: '50%',
                                                    background: checks.channelSubscribed ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '1rem'
                                                },
                                                children: checks.channelSubscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#22c55e'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 47
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: '#ffffff',
                                                            marginBottom: '0.25rem'
                                                        },
                                                        children: "Channel Subscription"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            color: 'rgba(255, 255, 255, 0.6)',
                                                            margin: 0
                                                        },
                                                        children: checks.channelSubscribed ? 'Subscribed to @MatrixTON_Official' : 'Subscribe to @MatrixTON_Official'
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            !checks.premium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1.5rem',
                                    padding: '1rem',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '0.75rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 20,
                                            style: {
                                                color: '#ef4444',
                                                marginTop: '0.125rem'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '0.875rem',
                                                        color: '#ffffff',
                                                        fontWeight: 600,
                                                        marginBottom: '0.5rem'
                                                    },
                                                    children: "Premium Required"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '0.875rem',
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        margin: 0
                                                    },
                                                    children: "Telegram Premium is required to join Matrix TON. Please upgrade your account and try again."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                    lineNumber: 407,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 400,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                        lineNumber: 227,
                        columnNumber: 30
                    }, this),
                    step === 'nickname' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: containerStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 48,
                                        style: {
                                            color: '#8b5cf6',
                                            marginBottom: '1rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.75rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Choose Your Nickname"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.6)'
                                        },
                                        children: "This will be your unique identifier in Matrix TON"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        },
                                        children: "Nickname"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: nickname,
                                        onChange: (e)=>setNickname(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '')),
                                        placeholder: "Enter nickname (3-20 chars)",
                                        style: inputStyle,
                                        maxLength: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.5)'
                                        },
                                        children: [
                                            nickname.length,
                                            "/20 characters • Letters, numbers, underscore only"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNicknameSubmit,
                                disabled: !isNicknameValid,
                                style: {
                                    ...buttonStyle,
                                    opacity: isNicknameValid ? 1 : 0.5,
                                    cursor: isNicknameValid ? 'pointer' : 'not-allowed'
                                },
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                        lineNumber: 437,
                        columnNumber: 33
                    }, this),
                    step === 'country' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: containerStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 48,
                                        style: {
                                            color: '#8b5cf6',
                                            marginBottom: '1rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.75rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Select Your Country"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.6)'
                                        },
                                        children: "This helps us provide better service"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        },
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: country,
                                        onChange: (e_0)=>setCountry(e_0.target.value),
                                        style: {
                                            ...inputStyle,
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                style: {
                                                    backgroundColor: '#1a1a2e'
                                                },
                                                children: "Select country"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this),
                                            COUNTRIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.code,
                                                    style: {
                                                        backgroundColor: '#1a1a2e'
                                                    },
                                                    children: [
                                                        c.flag,
                                                        " ",
                                                        c.name
                                                    ]
                                                }, c.code, true, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCountrySubmit,
                                disabled: !country,
                                style: {
                                    ...buttonStyle,
                                    opacity: country ? 1 : 0.5,
                                    cursor: country ? 'pointer' : 'not-allowed'
                                },
                                children: "Continue"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                        lineNumber: 492,
                        columnNumber: 32
                    }, this),
                    step === 'referral' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: containerStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                        size: 48,
                                        style: {
                                            color: '#8b5cf6',
                                            marginBottom: '1rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.75rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Referral Code"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255, 255, 255, 0.6)'
                                        },
                                        children: "Enter a referral code to join someone's team (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 553,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        },
                                        children: "Referral Code (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: referralCode,
                                                onChange: (e_1)=>{
                                                    const code_0 = e_1.target.value.toUpperCase();
                                                    setReferralCode(code_0);
                                                    if (code_0.length >= 3) {
                                                        validateReferralCode(code_0);
                                                    } else {
                                                        setReferralStatus(null);
                                                    }
                                                },
                                                placeholder: "Enter referral code",
                                                style: {
                                                    ...inputStyle,
                                                    paddingRight: '3rem',
                                                    border: referralStatus ? `1px solid ${referralStatus.valid ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}` : '1px solid rgba(139, 92, 246, 0.3)'
                                                },
                                                maxLength: 20
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 591,
                                                columnNumber: 17
                                            }, this),
                                            referralStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    right: '1rem',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)'
                                                },
                                                children: referralStatus.valid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#22c55e'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 20,
                                                    style: {
                                                        color: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                                lineNumber: 604,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this),
                                    isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            fontSize: '0.75rem',
                                            color: 'rgba(255, 255, 255, 0.5)'
                                        },
                                        children: "Validating code..."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 618,
                                        columnNumber: 32
                                    }, this),
                                    referralStatus && !isValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '0.5rem',
                                            fontSize: '0.75rem',
                                            color: referralStatus.valid ? '#22c55e' : '#ef4444'
                                        },
                                        children: referralStatus.valid ? `Valid! You'll join @${referralStatus.username}'s team` : referralStatus.error
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 626,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSkipReferral,
                                        style: {
                                            flex: 1,
                                            padding: '1rem 1.5rem',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '0.75rem',
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        },
                                        children: "Skip"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReferralSubmit,
                                        disabled: referralCode.length > 0 && (!referralStatus || !referralStatus.valid),
                                        style: {
                                            flex: 1,
                                            ...buttonStyle,
                                            opacity: referralCode.length === 0 || referralStatus && referralStatus.valid ? 1 : 0.5,
                                            cursor: referralCode.length === 0 || referralStatus && referralStatus.valid ? 'pointer' : 'not-allowed'
                                        },
                                        children: "Complete"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                        lineNumber: 552,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 50,
                    animation: 'bounce 2s infinite'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        background: 'rgba(102, 126, 234, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(102, 126, 234, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    },
                    onClick: ()=>window.scrollBy({
                            top: 300,
                            behavior: 'smooth'
                        }),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#667eea",
                        strokeWidth: "3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "6 9 12 15 18 9"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                        lineNumber: 689,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
                lineNumber: 695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/layout/RegistrationScreen.tsx",
        lineNumber: 185,
        columnNumber: 10
    }, this);
}
_s(RegistrationScreen, "rfZpEkMNENmR9A6VlAxC3yGL53Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$providers$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"]
    ];
});
_c = RegistrationScreen;
var _c;
__turbopack_context__.k.register(_c, "RegistrationScreen");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$TableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/tables/TableCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/ScrollButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$RegistrationScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/RegistrationScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TABLES = [
    {
        id: 1,
        price: 10,
        isActive: true
    },
    {
        id: 2,
        price: 20,
        isActive: false
    },
    {
        id: 3,
        price: 40,
        isActive: false
    },
    {
        id: 4,
        price: 80,
        isActive: false
    },
    {
        id: 5,
        price: 160,
        isActive: false
    },
    {
        id: 6,
        price: 320,
        isActive: false
    },
    {
        id: 7,
        price: 640,
        isActive: false
    },
    {
        id: 8,
        price: 1280,
        isActive: false
    },
    {
        id: 9,
        price: 2560,
        isActive: false
    },
    {
        id: 10,
        price: 5120,
        isActive: false
    },
    {
        id: 11,
        price: 10240,
        isActive: false
    },
    {
        id: 12,
        price: 20480,
        isActive: false
    }
];
function TablesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "639a02b21dbde635b1a41115962c516f6eeb098d6c7ff681808b1e36303aa33b") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "639a02b21dbde635b1a41115962c516f6eeb098d6c7ff681808b1e36303aa33b";
    }
    const [showRegistration, setShowRegistration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (showRegistration) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$RegistrationScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegistrationScreen"], {
                onComplete: {
                    "TablesPage[<RegistrationScreen>.onComplete]": ()=>setShowRegistration(false)
                }["TablesPage[<RegistrationScreen>.onComplete]"]
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 69,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    let t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                    children: "Matrix TON - Tables"
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 81,
                    columnNumber: 126
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 81,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollButtons"], {}, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 dark:bg-gray-900 pb-24",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: TABLES.map(_TablesPageTABLESMap)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 91,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 91,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(TablesPage, "rcoORHD/BPH+uSU9m1f/b+fCTkY=");
_c = TablesPage;
function _TablesPageTABLESMap(table) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$TableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCard"], {
        tableNumber: table.id,
        price: table.price,
        isActive: table.isActive
    }, table.id, false, {
        fileName: "[project]/frontend/app/tables/page.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TablesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_272150fa._.js.map