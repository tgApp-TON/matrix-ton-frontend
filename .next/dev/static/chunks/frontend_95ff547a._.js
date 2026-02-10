(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
                width: 495,
                height: 770,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/layout/AnimatedBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ScrollButtons() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "70bac619de3255ed5c2aaa8e3c6a3c1cfe665c192d6191acd36106b45a49e5fb") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "70bac619de3255ed5c2aaa8e3c6a3c1cfe665c192d6191acd36106b45a49e5fb";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            totalEarned: 0,
            activeTables: 0,
            directReferrals: 0,
            totalReferrals: 0,
            totalCycles: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [userStats, setUserStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [referralsList, setReferralsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [upline, setUpline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] !== isMenuOpen) {
        t2 = ({
            "ScrollButtons[useEffect()]": ()=>{
                const fetchUserStats = {
                    "ScrollButtons[useEffect() > fetchUserStats]": async ()=>{
                        const userId = localStorage.getItem("matrix_ton_user_id") || "1";
                        const tablesRes = await fetch(`/api/user/tables?userId=${userId}`);
                        const tablesData = await tablesRes.json();
                        if (tablesData.success) {
                            const activeTables = tablesData.tables.filter(_ScrollButtonsUseEffectFetchUserStatsTablesDataTablesFilter).length;
                            const totalCycles = tablesData.tables.reduce(_ScrollButtonsUseEffectFetchUserStatsTablesDataTablesReduce, 0);
                            setUserStats({
                                "ScrollButtons[useEffect() > fetchUserStats > setUserStats()]": (prev)=>({
                                        ...prev,
                                        totalEarned: 0,
                                        activeTables,
                                        totalCycles
                                    })
                            }["ScrollButtons[useEffect() > fetchUserStats > setUserStats()]"]);
                        }
                        const referralsRes = await fetch(`/api/user/referrals?userId=${userId}`);
                        const referralsData = await referralsRes.json();
                        if (referralsData.success) {
                            setUserStats({
                                "ScrollButtons[useEffect() > fetchUserStats > setUserStats()]": (prev_0)=>({
                                        ...prev_0,
                                        directReferrals: referralsData.directCount,
                                        totalReferrals: referralsData.totalTreeCount
                                    })
                            }["ScrollButtons[useEffect() > fetchUserStats > setUserStats()]"]);
                            setReferralsList(referralsData.directReferrals.slice(0, 3));
                            setUpline(referralsData.upline);
                        }
                    }
                }["ScrollButtons[useEffect() > fetchUserStats]"];
                if (isMenuOpen) {
                    fetchUserStats();
                }
            }
        })["ScrollButtons[useEffect()]"];
        t3 = [
            isMenuOpen
        ];
        $[3] = isMenuOpen;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== isDark) {
        t4 = ({
            "ScrollButtons[toggleTheme]": ()=>{
                setIsDark(!isDark);
                document.documentElement.classList.toggle("light-theme");
            }
        })["ScrollButtons[toggleTheme]"];
        $[6] = isDark;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const toggleTheme = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            position: "fixed",
            top: "24px",
            left: "24px",
            zIndex: 99999,
            width: "128px",
            height: "128px"
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            width: "128px",
            height: "128px",
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
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== isDark) {
        t7 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 48,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 140,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 48,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 140,
            columnNumber: 67
        }, this);
        $[10] = isDark;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t7 || $[13] !== toggleTheme) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleTheme,
                style: t6,
                children: t7
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 148,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[12] = t7;
        $[13] = toggleTheme;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 99999,
            width: "128px",
            height: "128px"
        };
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== isMenuOpen) {
        t10 = ({
            "ScrollButtons[<button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
        })["ScrollButtons[<button>.onClick]"];
        $[16] = isMenuOpen;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(30, 30, 50, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(139, 92, 246, 0.5)",
            boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s"
        };
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== isMenuOpen) {
        t12 = isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 48,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 201,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "56px",
                        height: "6px",
                        background: "rgba(168, 85, 247, 0.9)",
                        borderRadius: "10px"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 206,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "56px",
                        height: "6px",
                        background: "rgba(168, 85, 247, 0.9)",
                        borderRadius: "10px"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 211,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "56px",
                        height: "6px",
                        background: "rgba(168, 85, 247, 0.9)",
                        borderRadius: "10px"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 216,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 201,
            columnNumber: 70
        }, this);
        $[19] = isMenuOpen;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t10 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t10,
                style: t11,
                children: t12
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 229,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== isMenuOpen || $[25] !== referralsList || $[26] !== upline || $[27] !== userStats) {
        t14 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: 99998
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 238,
                    columnNumber: 27
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "100%",
                        zIndex: 99999,
                        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                        overflowY: "auto",
                        color: "#ffffff",
                        paddingTop: "120px",
                        lineHeight: "1.8"
                    },
                    className: "p-12 menu-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBackground"], {}, void 0, false, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 255,
                            columnNumber: 37
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-300",
                                                style: {
                                                    fontSize: "4.5rem"
                                                },
                                                children: "@CryptoKing"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 255,
                                                columnNumber: 148
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 255,
                                            columnNumber: 143
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "ScrollButtons[<button>.onClick]": ()=>setIsMenuOpen(false)
                                            }["ScrollButtons[<button>.onClick]"],
                                            style: {
                                                position: "fixed",
                                                top: "24px",
                                                right: "24px",
                                                width: "128px",
                                                height: "128px",
                                                borderRadius: "50%",
                                                background: "rgba(139, 92, 246, 0.2)",
                                                backdropFilter: "blur(10px)",
                                                border: "1px solid rgba(139, 92, 246, 0.4)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition: "all 0.3s",
                                                zIndex: 100000
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 48,
                                                className: "text-purple-300"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 275,
                                                columnNumber: 16
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 257,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 255,
                                    columnNumber: 111
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-12 mb-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 min-h-[200px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        style: {
                                                            fontSize: "3.75rem"
                                                        },
                                                        children: "Total Earned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 269
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white font-bold",
                                                        style: {
                                                            fontSize: "6rem"
                                                        },
                                                        children: [
                                                            userStats.totalEarned,
                                                            " TON"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 275,
                                                columnNumber: 218
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 275,
                                            columnNumber: 118
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 min-h-[200px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        style: {
                                                            fontSize: "3.75rem"
                                                        },
                                                        children: "Active Tables"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 214
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white font-bold",
                                                        style: {
                                                            fontSize: "6rem"
                                                        },
                                                        children: [
                                                            userStats.activeTables,
                                                            "/12"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 279,
                                                columnNumber: 163
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 279,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 rounded-2xl bg-gradient-to-br from-pink-600/20 to-red-600/20 min-h-[200px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        style: {
                                                            fontSize: "3.75rem"
                                                        },
                                                        children: "Referrals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 199
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-gray-400",
                                                                style: {
                                                                    fontSize: "2.5rem"
                                                                },
                                                                children: "Direct"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 86
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white font-bold",
                                                                style: {
                                                                    fontSize: "3rem"
                                                                },
                                                                children: userStats.directReferrals
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 35
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-gray-400",
                                                                style: {
                                                                    fontSize: "2.5rem"
                                                                },
                                                                children: "Total Tree"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 112
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white font-bold",
                                                                style: {
                                                                    fontSize: "3rem"
                                                                },
                                                                children: userStats.totalReferrals
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 283,
                                                columnNumber: 162
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 283,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-10 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 min-h-[200px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        style: {
                                                            fontSize: "3.75rem"
                                                        },
                                                        children: "Total Cycles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 225
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white font-bold",
                                                        style: {
                                                            fontSize: "6rem"
                                                        },
                                                        children: userStats.totalCycles
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 293,
                                                columnNumber: 174
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 293,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 275,
                                    columnNumber: 74
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    style: {
                                        marginTop: "80px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-white mb-10",
                                            style: {
                                                fontSize: "6rem"
                                            },
                                            children: "My Referral Tree"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 299,
                                            columnNumber: 14
                                        }, this),
                                        upline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-10",
                                                    style: {
                                                        fontSize: "2.25rem",
                                                        color: "#a78bfa"
                                                    },
                                                    children: "↑ Referred by"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 71
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-10 rounded-2xl bg-purple-600/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-white",
                                                                    style: {
                                                                        fontSize: "3rem"
                                                                    },
                                                                    children: [
                                                                        "@",
                                                                        upline.nickname
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 144
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400",
                                                                    style: {
                                                                        fontSize: "2rem",
                                                                        marginTop: "8px"
                                                                    },
                                                                    children: [
                                                                        upline.activeTables,
                                                                        " tables • ",
                                                                        upline.referralsCount,
                                                                        " referrals"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 48
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 139
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 88
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 301,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-10",
                                                    style: {
                                                        fontSize: "2.25rem",
                                                        color: "#22d3ee"
                                                    },
                                                    children: [
                                                        "↓ My Direct Referrals (",
                                                        userStats.directReferrals,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-8",
                                                    children: [
                                                        referralsList.length > 0 ? referralsList.map(_ScrollButtonsReferralsListMap) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-10 rounded-2xl bg-white/5 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-gray-400",
                                                                style: {
                                                                    fontSize: "2.5rem"
                                                                },
                                                                children: "No direct referrals yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 239
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 182
                                                        }, this),
                                                        userStats.directReferrals > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-10 rounded-2xl bg-white/5 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400",
                                                                    style: {
                                                                        fontSize: "2.5rem"
                                                                    },
                                                                    children: [
                                                                        "+ ",
                                                                        userStats.directReferrals - 3,
                                                                        " more referrals"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 149
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: _ScrollButtonsButtonOnClick,
                                                                    className: "text-purple-400 hover:underline",
                                                                    style: {
                                                                        fontSize: "2rem",
                                                                        marginTop: "8px"
                                                                    },
                                                                    children: "View All →"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 76
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 92
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 309,
                                            columnNumber: 119
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 297,
                                    columnNumber: 67
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 255,
                            columnNumber: 59
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 243,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true);
        $[24] = isMenuOpen;
        $[25] = referralsList;
        $[26] = upline;
        $[27] = userStats;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== t13 || $[30] !== t14 || $[31] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t8,
                t13,
                t14
            ]
        }, void 0, true);
        $[29] = t13;
        $[30] = t14;
        $[31] = t8;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    return t15;
}
_s(ScrollButtons, "ba2jECNHQeI0cjzXxvJez3iQZIg=");
_c = ScrollButtons;
function _ScrollButtonsButtonOnClick() {
    return window.location.href = "/referrals";
}
function _ScrollButtonsReferralsListMap(ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 rounded-2xl bg-cyan-600/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-white",
                            style: {
                                fontSize: "3rem"
                            },
                            children: [
                                "@",
                                ref.nickname
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 344,
                            columnNumber: 128
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400",
                            style: {
                                fontSize: "2rem",
                                marginTop: "8px"
                            },
                            children: [
                                ref.activeTables,
                                " tables • ",
                                ref.referralsCount,
                                " referrals"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 346,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-green-400 font-bold",
                            style: {
                                fontSize: "2.5rem",
                                marginTop: "8px"
                            },
                            children: [
                                "💰 ",
                                ref.totalEarnings || 0,
                                " TON"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 349,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 344,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-400",
                    style: {
                        fontSize: "2rem"
                    },
                    children: "Active"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 352,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 344,
            columnNumber: 72
        }, this)
    }, ref.id, false, {
        fileName: "[project]/frontend/components/ScrollButtons.tsx",
        lineNumber: 344,
        columnNumber: 10
    }, this);
}
function _ScrollButtonsUseEffectFetchUserStatsTablesDataTablesReduce(sum, t_0) {
    return sum + t_0.cycleNumber;
}
function _ScrollButtonsUseEffectFetchUserStatsTablesDataTablesFilter(t) {
    return t.status === "ACTIVE";
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/tables/CanvasTableCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ScrollButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TablesPage() {
    _s();
    const [userTables, setUserTables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TablesPage.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem('matrix_ton_user_id') || '1';
            }
            //TURBOPACK unreachable
            ;
        }
    }["TablesPage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TablesPage.useEffect": ()=>{
            const fetchTables = {
                "TablesPage.useEffect.fetchTables": async ()=>{
                    try {
                        const response = await fetch(`/api/user/tables?userId=${userId}`);
                        const data = await response.json();
                        if (data.success) {
                            setUserTables(data.tables);
                        }
                    } catch (error) {
                        console.error('Failed to fetch tables:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["TablesPage.useEffect.fetchTables"];
            fetchTables();
        }
    }["TablesPage.useEffect"], [
        userId
    ]);
    const activeTables = userTables.filter((t)=>t.status === 'ACTIVE');
    const activeTableNumbers = activeTables.map((t_0)=>t_0.tableNumber);
    const totalEarned = 156.8;
    const totalReferrals = 47;
    const totalCycles = userTables.reduce((sum, t_1)=>sum + t_1.cycleNumber, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative",
        children: [
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    localStorage.clear();
                    window.location.href = '/dashboard';
                },
                className: "fixed top-4 left-4 z-[99999] px-4 py-2 bg-red-500 text-white rounded text-sm",
                children: "Reset Registration"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 40,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollButtons"], {}, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto p-4 max-w-5xl relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                        maxWidth: '900px',
                        margin: '0 auto 0 calc(50% - 450px - 40px)',
                        padding: '0 40px',
                        marginBottom: '3rem'
                    },
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-2 text-center py-12",
                        style: {
                            color: '#ffffff',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        },
                        children: "Loading tables..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/tables/page.tsx",
                        lineNumber: 58,
                        columnNumber: 22
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
                        const table = userTables.find((t_2)=>t_2.tableNumber === tableNumber);
                        const isActive = table ? table.status === 'ACTIVE' : false;
                        const price = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_PRICES"][tableNumber - 1];
                        const slots = table ? [
                            table.positions.find((p)=>p.position === 1) || null,
                            table.positions.find((p_0)=>p_0.position === 2) || null,
                            table.positions.find((p_1)=>p_1.position === 3) || null,
                            table.positions.find((p_2)=>p_2.position === 4) || null
                        ] : [
                            null,
                            null,
                            null,
                            null
                        ];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$tables$2f$CanvasTableCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTableCard"], {
                                tableNumber: tableNumber,
                                price: price,
                                cycles: table?.cycleNumber || 0,
                                slots: slots,
                                isActive: isActive
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/tables/page.tsx",
                                lineNumber: 70,
                                columnNumber: 19
                            }, this)
                        }, tableNumber, false, {
                            fileName: "[project]/frontend/app/tables/page.tsx",
                            lineNumber: 69,
                            columnNumber: 18
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/tables/page.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(TablesPage, "qgl40haw7yWLHGVHdFMZNeNbOKM=");
_c = TablesPage;
var _c;
__turbopack_context__.k.register(_c, "TablesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sun
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
];
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sun", __iconNode);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Moon
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
            key: "kfwtm"
        }
    ]
];
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("moon", __iconNode);
;
 //# sourceMappingURL=moon.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=frontend_95ff547a._.js.map