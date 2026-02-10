(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/lib/ton-connect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tonConnectManifest",
    ()=>tonConnectManifest,
    "tonConnectOptions",
    ()=>tonConnectOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tonconnect/ui-react/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tonconnect/ui/lib/index.mjs [app-client] (ecmascript)");
;
// Get the current origin (works in both client and server)
function getAppUrl() {
    if ("TURBOPACK compile-time truthy", 1) {
        // Client-side: use current origin
        return window.location.origin;
    }
    //TURBOPACK unreachable
    ;
}
const tonConnectManifest = {
    url: getAppUrl(),
    name: 'Matrix TON',
    iconUrl: `${getAppUrl()}/icon-512.png`,
    termsOfUseUrl: `${getAppUrl()}/terms`,
    privacyPolicyUrl: `${getAppUrl()}/privacy`
};
const tonConnectOptions = {
    manifestUrl: `${getAppUrl()}/tonconnect-manifest.json`,
    buttonRootId: 'ton-connect-button',
    uiPreferences: {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"].DARK
    },
    walletsListConfiguration: {
        includeWallets: [
            {
                appName: 'tonkeeper',
                name: 'Tonkeeper',
                imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
                aboutUrl: 'https://tonkeeper.com',
                universalLink: 'https://app.tonkeeper.com/ton-connect',
                bridgeUrl: 'https://bridge.tonapi.io/bridge',
                platforms: [
                    'ios',
                    'android',
                    'chrome',
                    'firefox'
                ]
            },
            {
                appName: 'mytonwallet',
                name: 'MyTonWallet',
                imageUrl: 'https://static.mytonwallet.io/icon-256.png',
                aboutUrl: 'https://mytonwallet.io',
                universalLink: 'https://connect.mytonwallet.org',
                bridgeUrl: 'https://tonconnectbridge.mytonwallet.org/bridge',
                platforms: [
                    'chrome',
                    'firefox',
                    'ios',
                    'android'
                ]
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/providers/TonConnectProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TonConnectProvider",
    ()=>TonConnectProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tonconnect/ui-react/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$ton$2d$connect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/ton-connect.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function TonConnectProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ce7c4436da4eb0501768570c06a7ab114f8d77391e3b60a4920a7de22894c3ad") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ce7c4436da4eb0501768570c06a7ab114f8d77391e3b60a4920a7de22894c3ad";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TonConnectUIProvider"], {
            manifestUrl: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$ton$2d$connect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tonConnectOptions"].manifestUrl,
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/components/providers/TonConnectProvider.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = TonConnectProvider;
var _c;
__turbopack_context__.k.register(_c, "TonConnectProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/providers/TelegramProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramProvider",
    ()=>TelegramProvider,
    "useTelegram",
    ()=>useTelegram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const TelegramContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    webApp: null,
    isReady: false,
    isPremium: false,
    referralCode: null
});
function TelegramProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "10da0adf3ff240ec220eac12540074101a6080ee57c88cb3ff5af175411b2aec") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10da0adf3ff240ec220eac12540074101a6080ee57c88cb3ff5af175411b2aec";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [referralCode, setReferralCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TelegramProvider[useEffect()]": ()=>{
                const isInTelegram = ("TURBOPACK compile-time value", "object") !== "undefined" && window.Telegram?.WebApp;
                if (isInTelegram && window.Telegram) {
                    const WebApp = window.Telegram.WebApp;
                    WebApp.ready();
                    WebApp.expand();
                    const tgUser = WebApp.initDataUnsafe.user;
                    if (tgUser) {
                        setUser({
                            id: tgUser.id,
                            first_name: tgUser.first_name,
                            last_name: tgUser.last_name,
                            username: tgUser.username,
                            language_code: tgUser.language_code,
                            is_premium: tgUser.is_premium
                        });
                    }
                    const startParam = WebApp.initDataUnsafe?.start_param;
                    if (startParam) {
                        setReferralCode(startParam);
                        console.log("Referral code from URL:", startParam);
                    }
                    WebApp.setHeaderColor("#000000");
                    WebApp.setBackgroundColor("#000000");
                } else {
                    setUser({
                        id: 123456789,
                        first_name: "Test",
                        last_name: "User",
                        username: "testuser",
                        language_code: "en",
                        is_premium: true
                    });
                    const urlParams = new URLSearchParams(window.location.search);
                    const refParam = urlParams.get("ref");
                    if (refParam) {
                        setReferralCode(refParam);
                        console.log("Referral code from browser URL:", refParam);
                    }
                }
                setIsReady(true);
            }
        })["TelegramProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = user?.is_premium || false;
    let t4;
    if ($[3] !== isReady || $[4] !== referralCode || $[5] !== t3 || $[6] !== user) {
        t4 = {
            user,
            webApp: ("TURBOPACK compile-time truthy", 1) ? window.Telegram?.WebApp : "TURBOPACK unreachable",
            isReady,
            isPremium: t3,
            referralCode
        };
        $[3] = isReady;
        $[4] = referralCode;
        $[5] = t3;
        $[6] = user;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const value = t4;
    let t5;
    if ($[8] !== children || $[9] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TelegramContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/components/providers/TelegramProvider.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = value;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(TelegramProvider, "1AXqbkJo0PKHT2JCNSmqvSh4YHg=");
_c = TelegramProvider;
const useTelegram = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "10da0adf3ff240ec220eac12540074101a6080ee57c88cb3ff5af175411b2aec") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10da0adf3ff240ec220eac12540074101a6080ee57c88cb3ff5af175411b2aec";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TelegramContext);
};
_s1(useTelegram, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "TelegramProvider");
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
"[project]/frontend/components/ui/ScrollIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicator",
    ()=>ScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScrollIndicator() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7e4779a5046d2d7c3eb9112d9ca4682afb79d54135aeed7e4cb8a565acab88ae") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e4779a5046d2d7c3eb9112d9ca4682afb79d54135aeed7e4cb8a565acab88ae";
    }
    const [showScrollDown, setShowScrollDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showScrollUp, setShowScrollUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ScrollIndicator[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollIndicator[useEffect() > handleScroll]": ()=>{
                        const scrollTop = window.scrollY;
                        const scrollHeight = document.documentElement.scrollHeight;
                        const clientHeight = window.innerHeight;
                        const isScrollable = scrollHeight > clientHeight;
                        if (!isScrollable) {
                            setShowScrollDown(false);
                            setShowScrollUp(false);
                            return;
                        }
                        setShowScrollDown(scrollTop + clientHeight < scrollHeight - 100);
                        setShowScrollUp(scrollTop > 100);
                    }
                }["ScrollIndicator[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                handleScroll();
                window.addEventListener("resize", handleScroll);
                return ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                };
            }
        })["ScrollIndicator[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const scrollDown = _ScrollIndicatorScrollDown;
    const scrollUp = _ScrollIndicatorScrollUp;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 99997,
            display: "flex",
            flexDirection: "column",
            gap: "12px"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== showScrollUp) {
        t3 = showScrollUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollUp,
            style: {
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "rgba(139, 92, 246, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                animation: "fadeIn 0.3s"
            },
            onMouseEnter: _ScrollIndicatorButtonOnMouseEnter,
            onMouseLeave: _ScrollIndicatorButtonOnMouseLeave,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                className: "text-purple-300",
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/components/ui/ScrollIndicator.tsx",
                lineNumber: 85,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/ScrollIndicator.tsx",
            lineNumber: 72,
            columnNumber: 26
        }, this);
        $[4] = showScrollUp;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== showScrollDown) {
        t4 = showScrollDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollDown,
            style: {
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "rgba(139, 92, 246, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s",
                animation: "bounce 2s infinite"
            },
            onMouseEnter: _ScrollIndicatorButtonOnMouseEnter2,
            onMouseLeave: _ScrollIndicatorButtonOnMouseLeave2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "text-purple-300",
                size: 20
            }, void 0, false, {
                fileName: "[project]/frontend/components/ui/ScrollIndicator.tsx",
                lineNumber: 106,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ui/ScrollIndicator.tsx",
            lineNumber: 93,
            columnNumber: 28
        }, this);
        $[6] = showScrollDown;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ui/ScrollIndicator.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(ScrollIndicator, "Yn2Bs9XU8H/Em+YcN7SzuhNXUW8=");
_c = ScrollIndicator;
function _ScrollIndicatorButtonOnMouseLeave2(e_2) {
    e_2.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
    e_2.currentTarget.style.transform = "scale(1)";
}
function _ScrollIndicatorButtonOnMouseEnter2(e_1) {
    e_1.currentTarget.style.background = "rgba(139, 92, 246, 0.3)";
    e_1.currentTarget.style.transform = "scale(1.1)";
}
function _ScrollIndicatorButtonOnMouseLeave(e_0) {
    e_0.currentTarget.style.background = "rgba(139, 92, 246, 0.2)";
    e_0.currentTarget.style.transform = "scale(1)";
}
function _ScrollIndicatorButtonOnMouseEnter(e) {
    e.currentTarget.style.background = "rgba(139, 92, 246, 0.3)";
    e.currentTarget.style.transform = "scale(1.1)";
}
function _ScrollIndicatorScrollUp() {
    window.scrollBy({
        top: -window.innerHeight * 0.8,
        behavior: "smooth"
    });
}
function _ScrollIndicatorScrollDown() {
    window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "ScrollIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_9d6735ce._.js.map