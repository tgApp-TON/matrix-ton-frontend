module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/frontend/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ovyukomdxoymgvqhztyv.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92eXVrb21keG95bWd2cWh6dHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1MDAxNjQsImV4cCI6MjA4NjA3NjE2NH0.GgbXI2Y99zK284PznjV8Cdi3TXZtSAzNFbX_JWtEjHk");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/frontend/app/api/user/referrals/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/supabase.ts [app-route] (ecmascript)");
;
;
// Recursive function to count all referrals in the tree
async function countReferralTree(userId) {
    const { data: directRefs } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select('id').eq('referrerId', userId);
    if (!directRefs || directRefs.length === 0) return 0;
    let total = directRefs.length;
    // Count referrals of each direct referral (recursive)
    for (const ref of directRefs){
        total += await countReferralTree(ref.id);
    }
    return total;
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    if (!userId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'User ID required'
        }, {
            status: 400
        });
    }
    try {
        // Get DIRECT referrals (only those who came via this user's ref link)
        const { data: directReferrals, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select(`
        id,
        nickname,
        telegramUsername,
        accountCreatedDate,
        isVerified
      `).eq('referrerId', parseInt(userId)).order('accountCreatedDate', {
            ascending: false
        });
        if (error) throw error;
        // Get stats for each direct referral
        const referralsWithStats = await Promise.all((directReferrals || []).map(async (ref)=>{
            // Count active tables
            const { data: tables } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('Table').select('id').eq('userId', ref.id).eq('status', 'ACTIVE');
            // Count their direct referrals
            const { data: subReferrals } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select('id').eq('referrerId', ref.id);
            // Calculate earnings (sum of completed table positions after 10% commission)
            const { data: positions } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('TablePosition').select('amountPaid').eq('partnerUserId', ref.id).eq('status', 'PAID_OUT');
            const totalEarnings = (positions || []).reduce((sum, pos)=>{
                // Subtract 10% commission
                const afterCommission = parseFloat(pos.amountPaid || '0') * 0.9;
                return sum + afterCommission;
            }, 0);
            return {
                ...ref,
                activeTables: tables?.length || 0,
                referralsCount: subReferrals?.length || 0,
                totalEarnings: Math.round(totalEarnings * 100) / 100 // Round to 2 decimals
            };
        }));
        // Count total tree (recursive - all levels)
        const totalTreeCount = await countReferralTree(parseInt(userId));
        // Get user's referrer (upline) info
        let upline = null;
        const { data: currentUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select('referrerId').eq('id', parseInt(userId)).single();
        if (currentUser?.referrerId && currentUser.referrerId !== 1) {
            // Only fetch if referrer is NOT MASTER
            const { data: referrerData } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select('id, nickname, telegramUsername').eq('id', currentUser.referrerId).single();
            if (referrerData) {
                // Get referrer's stats
                const { data: refTables } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('Table').select('id').eq('userId', referrerData.id).eq('status', 'ACTIVE');
                const { data: refReferrals } = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('User').select('id').eq('referrerId', referrerData.id);
                upline = {
                    ...referrerData,
                    activeTables: refTables?.length || 0,
                    referralsCount: refReferrals?.length || 0
                };
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            directReferrals: referralsWithStats,
            directCount: directReferrals?.length || 0,
            totalTreeCount,
            upline,
            stats: {
                direct: directReferrals?.length || 0,
                total: totalTreeCount
            }
        });
    } catch (error) {
        console.error('Referrals fetch error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch referrals'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a4283feb._.js.map