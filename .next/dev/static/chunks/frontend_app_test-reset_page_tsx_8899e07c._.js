(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/test-reset/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestResetPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function TestResetPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "21a30ce8437757b68fae509e712a9945e46086d65bd62e93e63d868b3d31635e") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21a30ce8437757b68fae509e712a9945e46086d65bd62e93e63d868b3d31635e";
    }
    const handleReset = _TestResetPageHandleReset;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            zIndex: 1000,
            position: "relative"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleReset,
                style: {
                    padding: "32px 64px",
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#ffffff",
                    fontSize: "32px",
                    fontWeight: "bold",
                    borderRadius: "24px",
                    border: "3px solid #fca5a5",
                    boxShadow: "0 20px 60px rgba(239, 68, 68, 0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    zIndex: 10000
                },
                onMouseEnter: _TestResetPageButtonOnMouseEnter,
                onMouseLeave: _TestResetPageButtonOnMouseLeave,
                children: "\uD83D\uDD04 Reset & Test Registration"
            }, void 0, false, {
                fileName: "[project]/frontend/app/test-reset/page.tsx",
                lineNumber: 25,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/test-reset/page.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = TestResetPage;
function _TestResetPageButtonOnMouseLeave(e_0) {
    e_0.currentTarget.style.transform = "scale(1)";
    e_0.currentTarget.style.boxShadow = "0 20px 60px rgba(239, 68, 68, 0.5)";
}
function _TestResetPageButtonOnMouseEnter(e) {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 25px 80px rgba(239, 68, 68, 0.7)";
}
function _TestResetPageHandleReset() {
    localStorage.clear();
    window.location.href = "/dashboard";
}
var _c;
__turbopack_context__.k.register(_c, "TestResetPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_app_test-reset_page_tsx_8899e07c._.js.map