module.exports = [
"[project]/frontend/components/tables/CanvasTableCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasTableCard",
    ()=>CanvasTableCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function CanvasTableCard({ tableNumber, price, cycles, slots, isActive }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                    width: options.width ?? 495,
                    height: options.height ?? 770,
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
                layers.forEach((L, idx)=>{
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
                });
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
                slotPositions.forEach((s, i)=>{
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
                });
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
        const slotsData = slots.map((slot)=>({
                nickname: slot?.nickname,
                filled: slot?.filled || !!slot?.nickname
            }));
        cardRef.current = new TonTableCard(canvasRef.current, {
            table: tableNumber,
            ton: price,
            cyclesClosed: cycles,
            slots: slotsData,
            animate: true,
            width: 495,
            height: 770,
            isActive: isActive
        });
        return ()=>{
            cardRef.current?.destroy();
        };
    }, [
        tableNumber,
        price,
        cycles,
        slots,
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "w-full h-auto"
    }, void 0, false, {
        fileName: "[project]/frontend/components/tables/CanvasTableCard.tsx",
        lineNumber: 452,
        columnNumber: 10
    }, this);
}
}),
"[project]/frontend/components/ScrollButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollButtons",
    ()=>ScrollButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/AnimatedBackground.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ScrollButtons() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userStats, setUserStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalEarned: 0,
        activeTables: 0,
        directReferrals: 0,
        totalReferrals: 0,
        totalCycles: 0
    });
    const [referralsList, setReferralsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [upline, setUpline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserStats = async ()=>{
            const userId = localStorage.getItem('matrix_ton_user_id') || '1';
            // Fetch tables
            const tablesRes = await fetch(`/api/user/tables?userId=${userId}`);
            const tablesData = await tablesRes.json();
            if (tablesData.success) {
                const activeTables = tablesData.tables.filter((t)=>t.status === 'ACTIVE').length;
                const totalCycles = tablesData.tables.reduce((sum, t)=>sum + t.cycleNumber, 0);
                setUserStats((prev)=>({
                        ...prev,
                        totalEarned: 0,
                        activeTables,
                        totalCycles
                    }));
            }
            // Fetch referrals
            const referralsRes = await fetch(`/api/user/referrals?userId=${userId}`);
            const referralsData = await referralsRes.json();
            if (referralsData.success) {
                setUserStats((prev)=>({
                        ...prev,
                        directReferrals: referralsData.directCount,
                        totalReferrals: referralsData.totalTreeCount
                    }));
                // Save first 3 referrals for display
                setReferralsList(referralsData.directReferrals.slice(0, 3));
                setUpline(referralsData.upline); // Save upline
            }
        };
        if (isMenuOpen) {
            fetchUserStats();
        }
    }, [
        isMenuOpen
    ]);
    const toggleTheme = ()=>{
        setIsDark(!isDark);
        document.documentElement.classList.toggle('light-theme');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '24px',
                    left: '24px',
                    zIndex: 99999,
                    width: '128px',
                    height: '128px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleTheme,
                    style: {
                        width: '128px',
                        height: '128px',
                        borderRadius: '50%',
                        background: 'rgba(139, 92, 246, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    },
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        size: 48,
                        className: "text-purple-300"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        size: 48,
                        className: "text-purple-300"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 94,
                        columnNumber: 69
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '24px',
                    right: '24px',
                    zIndex: 99999,
                    width: '128px',
                    height: '128px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    style: {
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'rgba(30, 30, 50, 0.3)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(139, 92, 246, 0.5)',
                        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    },
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 48,
                        className: "text-purple-300"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '56px',
                                    height: '6px',
                                    background: 'rgba(168, 85, 247, 0.9)',
                                    borderRadius: '10px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '56px',
                                    height: '6px',
                                    background: 'rgba(168, 85, 247, 0.9)',
                                    borderRadius: '10px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '56px',
                                    height: '6px',
                                    background: 'rgba(168, 85, 247, 0.9)',
                                    borderRadius: '10px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 99998
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100%',
                            width: '100%',
                            zIndex: 99999,
                            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                            overflowY: 'auto',
                            color: '#ffffff',
                            paddingTop: '120px',
                            lineHeight: '1.8'
                        },
                        className: "p-12 menu-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedBackground"], {}, void 0, false, {
                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col h-full relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-300",
                                                    style: {
                                                        fontSize: '4.5rem'
                                                    },
                                                    children: "@CryptoKing"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsMenuOpen(false),
                                                style: {
                                                    position: 'fixed',
                                                    top: '24px',
                                                    right: '24px',
                                                    width: '128px',
                                                    height: '128px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(139, 92, 246, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid rgba(139, 92, 246, 0.4)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s',
                                                    zIndex: 100000
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 48,
                                                    className: "text-purple-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-12 mb-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-10 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 min-h-[200px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: '3.75rem'
                                                            },
                                                            children: "Total Earned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-bold",
                                                            style: {
                                                                fontSize: '6rem'
                                                            },
                                                            children: [
                                                                userStats.totalEarned,
                                                                " TON"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-10 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 min-h-[200px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: '3.75rem'
                                                            },
                                                            children: "Active Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-bold",
                                                            style: {
                                                                fontSize: '6rem'
                                                            },
                                                            children: [
                                                                userStats.activeTables,
                                                                "/12"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-10 rounded-2xl bg-gradient-to-br from-pink-600/20 to-red-600/20 min-h-[200px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: '3.75rem'
                                                            },
                                                            children: "Referrals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400",
                                                                    style: {
                                                                        fontSize: '2.5rem'
                                                                    },
                                                                    children: "Direct"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    style: {
                                                                        fontSize: '3rem'
                                                                    },
                                                                    children: userStats.directReferrals
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400",
                                                                    style: {
                                                                        fontSize: '2.5rem'
                                                                    },
                                                                    children: "Total Tree"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    style: {
                                                                        fontSize: '3rem'
                                                                    },
                                                                    children: userStats.totalReferrals
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-10 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 min-h-[200px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white",
                                                            style: {
                                                                fontSize: '3.75rem'
                                                            },
                                                            children: "Total Cycles"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-bold",
                                                            style: {
                                                                fontSize: '6rem'
                                                            },
                                                            children: userStats.totalCycles
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto",
                                        style: {
                                            marginTop: '80px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-white mb-10",
                                                style: {
                                                    fontSize: '6rem'
                                                },
                                                children: "My Referral Tree"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            upline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-16",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-10",
                                                        style: {
                                                            fontSize: '2.25rem',
                                                            color: '#a78bfa'
                                                        },
                                                        children: "↑ Referred by"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-10 rounded-2xl bg-purple-600/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white",
                                                                        style: {
                                                                            fontSize: '3rem'
                                                                        },
                                                                        children: [
                                                                            "@",
                                                                            upline.nickname
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-400",
                                                                        style: {
                                                                            fontSize: '2rem',
                                                                            marginTop: '8px'
                                                                        },
                                                                        children: [
                                                                            upline.activeTables,
                                                                            " tables • ",
                                                                            upline.referralsCount,
                                                                            " referrals"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-10",
                                                        style: {
                                                            fontSize: '2.25rem',
                                                            color: '#22d3ee'
                                                        },
                                                        children: [
                                                            "↓ My Direct Referrals (",
                                                            userStats.directReferrals,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-8",
                                                        children: [
                                                            referralsList.length > 0 ? referralsList.map((ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-10 rounded-2xl bg-cyan-600/10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-bold text-white",
                                                                                        style: {
                                                                                            fontSize: '3rem'
                                                                                        },
                                                                                        children: [
                                                                                            "@",
                                                                                            ref.nickname
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                        lineNumber: 297,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-gray-400",
                                                                                        style: {
                                                                                            fontSize: '2rem',
                                                                                            marginTop: '8px'
                                                                                        },
                                                                                        children: [
                                                                                            ref.activeTables,
                                                                                            " tables • ",
                                                                                            ref.referralsCount,
                                                                                            " referrals"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                        lineNumber: 300,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-green-400 font-bold",
                                                                                        style: {
                                                                                            fontSize: '2.5rem',
                                                                                            marginTop: '8px'
                                                                                        },
                                                                                        children: [
                                                                                            "💰 ",
                                                                                            ref.totalEarnings || 0,
                                                                                            " TON"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                        lineNumber: 303,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 296,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-green-400",
                                                                                style: {
                                                                                    fontSize: '2rem'
                                                                                },
                                                                                children: "Active"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 307,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, ref.id, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 25
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-10 rounded-2xl bg-white/5 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400",
                                                                    style: {
                                                                        fontSize: '2.5rem'
                                                                    },
                                                                    children: "No direct referrals yet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this),
                                                            userStats.directReferrals > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-10 rounded-2xl bg-white/5 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-400",
                                                                        style: {
                                                                            fontSize: '2.5rem'
                                                                        },
                                                                        children: [
                                                                            "+ ",
                                                                            userStats.directReferrals - 3,
                                                                            " more referrals"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>window.location.href = '/referrals',
                                                                        className: "text-purple-400 hover:underline",
                                                                        style: {
                                                                            fontSize: '2rem',
                                                                            marginTop: '8px'
                                                                        },
                                                                        children: "View All →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
}),
"[project]/frontend/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/frontend/components/ton/WalletConnectButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnectButton",
    ()=>WalletConnectButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tonconnect/ui-react/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function WalletConnectButton() {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTonAddress"])();
    const [tonConnectUI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTonConnectUI"])();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address) {
            // Fetch balance from blockchain
            fetchBalance(address);
        }
    }, [
        address
    ]);
    const fetchBalance = async (addr)=>{
        try {
            const response = await fetch(`https://tonapi.io/v2/accounts/${addr}`);
            const data = await response.json();
            const balanceNano = data.balance;
            const balanceTON = (parseInt(balanceNano) / 1e9).toFixed(2);
            setBalance(balanceTON);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TonConnectButton"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm",
                    children: "Connect wallet to activate tables"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-3 h-3 rounded-full bg-green-400 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-xl",
                        children: "Wallet Connected"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 text-sm mb-1",
                        children: "Address"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-mono text-sm",
                        children: [
                            address.slice(0, 8),
                            "...",
                            address.slice(-8)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 text-sm mb-1",
                        children: "Balance"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-bold text-3xl",
                        children: [
                            balance,
                            " TON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>tonConnectUI.disconnect(),
                className: "px-6 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold transition-all",
                children: "Disconnect"
            }, void 0, false, {
                fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ton/WalletConnectButton.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/lib/wallets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Platform wallets configuration
__turbopack_context__.s([
    "PLATFORM_WALLETS",
    ()=>PLATFORM_WALLETS,
    "calculatePaymentSplit",
    ()=>calculatePaymentSplit,
    "getPaymentDestination",
    ()=>getPaymentDestination
]);
const PLATFORM_WALLETS = {
    // INCOME WALLET - Pure profit
    INCOME: {
        address: ("TURBOPACK compile-time value", "UQBYh3n3OK44aZ4wG2CqbtZCFQdnBPZh7NgmWXVGzUceKCey"),
        purpose: 'Platform income',
        receives: [
            '100% of Table 1 payments',
            '10% commission from Table 2-12 payments'
        ]
    },
    // OPERATIONS WALLET - System operations
    OPERATIONS: {
        address: ("TURBOPACK compile-time value", "UQDhUgP6FM3RWU-14GgQAT3LD5l9tlCOkNDuNv18guKAs2W6"),
        purpose: 'System operations',
        receives: [
            '90% of Table 2-12 payments (after 10% commission)'
        ],
        handles: [
            'User payouts (slot 1)',
            'Holding funds (slots 2-3) for auto-purchase',
            'Table reactivation (slot 4)',
            'Spillover operations'
        ]
    }
};
function getPaymentDestination(tableNumber) {
    if (tableNumber === 1) {
        // Table 1: 100% to INCOME wallet
        return PLATFORM_WALLETS.INCOME.address;
    } else {
        // Table 2-12: Payment goes to OPERATIONS wallet
        // Backend will split: 10% to INCOME, 90% stays in OPERATIONS
        return PLATFORM_WALLETS.OPERATIONS.address;
    }
}
function calculatePaymentSplit(tableNumber, amount) {
    if (tableNumber === 1) {
        return {
            toIncome: amount,
            toOperations: 0,
            commission: amount // All is commission
        };
    } else {
        const commission = amount * 0.10;
        const operations = amount * 0.90;
        return {
            toIncome: commission,
            toOperations: operations,
            commission: commission
        };
    }
}
}),
"[project]/frontend/components/ton/TablePurchaseButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TablePurchaseButton",
    ()=>TablePurchaseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tonconnect/ui-react/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$ton$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@ton/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wallets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/wallets.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TablePurchaseButton({ tableNumber, price, isActive, isPurchasing = false }) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTonAddress"])();
    const [tonConnectUI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tonconnect$2f$ui$2d$react$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTonConnectUI"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePurchase = async ()=>{
        if (!address) {
            alert('Please connect your wallet first');
            return;
        }
        setLoading(true);
        try {
            const userId = localStorage.getItem('matrix_ton_user_id') || '1';
            // Payment recipient (platform wallet) - uses two-wallet system
            const recipientAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wallets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaymentDestination"])(tableNumber);
            // Create comment for transaction
            const comment = `table_${tableNumber}_${userId}_${Date.now()}`;
            const commentCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$ton$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beginCell"])().storeUint(0, 32).storeStringTail(comment).endCell();
            // Send transaction
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 600,
                messages: [
                    {
                        address: recipientAddress,
                        amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$ton$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNano"])(price).toString(),
                        payload: commentCell.toBoc().toString('base64')
                    }
                ]
            };
            const result = await tonConnectUI.sendTransaction(transaction);
            if (result) {
                console.log('Transaction sent:', result);
                // Notify backend about the transaction
                try {
                    const processResponse = await fetch('/api/payments/process', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            txHash: result.boc,
                            userId,
                            tableNumber,
                            amount: price,
                            fromAddress: address,
                            toAddress: recipientAddress
                        })
                    });
                    const processData = await processResponse.json();
                    if (processData.success) {
                        alert(`Table ${tableNumber} purchased successfully!`);
                        window.location.reload();
                    } else {
                        alert(`Transaction sent but processing failed: ${processData.error}`);
                    }
                } catch (processError) {
                    console.error('Payment processing error:', processError);
                    alert('Transaction sent! Processing will happen automatically.');
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Purchase error:', error);
            alert('Purchase failed. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    if (isActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: true,
            className: "w-full py-4 rounded-xl bg-green-600/20 text-green-400 font-bold text-xl cursor-not-allowed",
            children: "✓ Active"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ton/TablePurchaseButton.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this);
    }
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: true,
            className: "w-full py-4 rounded-xl bg-gray-600/20 text-gray-400 font-bold text-xl cursor-not-allowed",
            children: "Connect Wallet First"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ton/TablePurchaseButton.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handlePurchase,
        disabled: loading || isPurchasing,
        className: "w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        children: loading ? 'Processing...' : `Buy for ${price} TON`
    }, void 0, false, {
        fileName: "[project]/frontend/components/ton/TablePurchaseButton.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/TablesContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TablesContent",
    ()=>TablesContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/tables/CanvasTableCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ScrollButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ton$2f$WalletConnectButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ton/WalletConnectButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ton$2f$TablePurchaseButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ton/TablePurchaseButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function TablesContent() {
    const [userTables, setUserTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '1';
        setUserId(id);
        const fetchTables = async ()=>{
            try {
                const response = await fetch(`/api/user/tables?userId=${id}`);
                const data = await response.json();
                if (data.success) {
                    setUserTables(data.tables);
                }
            } catch (error) {
                console.error('Failed to fetch tables:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchTables();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative",
        children: [
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    localStorage.clear();
                    window.location.href = '/dashboard';
                },
                className: "fixed top-4 left-4 z-[99999] px-4 py-2 bg-red-500 text-white rounded text-sm",
                children: "Reset Registration"
            }, void 0, false, {
                fileName: "[project]/frontend/components/TablesContent.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollButtons"], {}, void 0, false, {
                fileName: "[project]/frontend/components/TablesContent.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto p-4 md:p-8 min-h-screen relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ton$2f$WalletConnectButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletConnectButton"], {}, void 0, false, {
                            fileName: "[project]/frontend/components/TablesContent.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/TablesContent.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto mb-12",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 md:col-span-2 text-center py-12",
                            style: {
                                color: '#ffffff',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            },
                            children: "Loading tables..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/TablesContent.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this) : [
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
                        ].map((tableNumber)=>{
                            const table = userTables.find((t)=>t.tableNumber === tableNumber);
                            const isActive = table ? table.status === 'ACTIVE' : false;
                            const price = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TABLE_PRICES"][tableNumber] || 0;
                            const slots = table ? [
                                table.positions.find((p)=>p.position === 1) || null,
                                table.positions.find((p)=>p.position === 2) || null,
                                table.positions.find((p)=>p.position === 3) || null,
                                table.positions.find((p)=>p.position === 4) || null
                            ] : [
                                null,
                                null,
                                null,
                                null
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTableCard"], {
                                        tableNumber: tableNumber,
                                        price: price,
                                        cycles: table?.cycleNumber || 0,
                                        slots: slots,
                                        isActive: isActive
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/TablesContent.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ton$2f$TablePurchaseButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TablePurchaseButton"], {
                                            tableNumber: tableNumber,
                                            price: price,
                                            isActive: isActive
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/TablesContent.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/TablesContent.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, tableNumber, true, {
                                fileName: "[project]/frontend/components/TablesContent.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/TablesContent.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/TablesContent.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/TablesContent.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_c7f1bb85._.js.map