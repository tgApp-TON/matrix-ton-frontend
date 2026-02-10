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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "e10b43aab4b2e1b56dc6a8b68c4f4b236ce92a367a55e4e805177f353159f80a") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e10b43aab4b2e1b56dc6a8b68c4f4b236ce92a367a55e4e805177f353159f80a";
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
            lineNumber: 66,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 24,
            className: "text-purple-300"
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 66,
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
                lineNumber: 74,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 74,
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
                    lineNumber: 112,
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
                            lineNumber: 117,
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
                            lineNumber: 122,
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
                            lineNumber: 127,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 112,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                lineNumber: 110,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/ScrollButtons.tsx",
            lineNumber: 110,
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
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 133,
                    columnNumber: 26
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
                        color: "#ffffff"
                    },
                    className: "p-8 menu-text",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$layout$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBackground"], {}, void 0, false, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 148,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl font-bold text-white mb-1",
                                                    children: "Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 146
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-purple-300",
                                                    children: "@CryptoKing"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 206
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 148,
                                            columnNumber: 141
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "ScrollButtons[<button>.onClick]": ()=>setIsMenuOpen(false)
                                            }["ScrollButtons[<button>.onClick]"],
                                            style: {
                                                position: "fixed",
                                                top: "24px",
                                                right: "24px",
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
                                                transition: "all 0.3s",
                                                zIndex: 100000
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 28,
                                                className: "text-purple-300"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 166,
                                                columnNumber: 16
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 148,
                                            columnNumber: 258
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 148,
                                    columnNumber: 110
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-xl",
                                                        children: "Total Earned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 249
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-2xl font-bold",
                                                        children: "156.8 TON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 303
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 166,
                                                columnNumber: 198
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 107
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-4 rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-xl",
                                                        children: "Active Tables"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 517
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-2xl font-bold",
                                                        children: "6/12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 572
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 166,
                                                columnNumber: 466
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 377
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-4 rounded-xl bg-gradient-to-br from-pink-600/20 to-red-600/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-xl",
                                                        children: "Referrals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 780
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-2xl font-bold",
                                                        children: "47"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 831
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 166,
                                                columnNumber: 729
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 641
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-emerald-600/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-xl",
                                                        children: "Total Cycles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 1042
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white text-2xl font-bold",
                                                        children: "46"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 1096
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                lineNumber: 166,
                                                columnNumber: 991
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 898
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 166,
                                    columnNumber: 74
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "space-y-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/tables",
                                            className: "flex items-center gap-4 px-6 py-4 rounded-xl bg-purple-600/30 text-white text-xl font-semibold hover:bg-purple-600/40 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1360
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "My Tables"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1389
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 1201
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/referrals",
                                            className: "flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 text-gray-300 text-xl font-semibold hover:bg-white/10 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1569
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Referrals"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1598
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 1415
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/stats",
                                            className: "flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 text-gray-300 text-xl font-semibold hover:bg-white/10 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1774
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Statistics"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1808
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 1624
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/settings",
                                            className: "flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 text-gray-300 text-xl font-semibold hover:bg-white/10 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 1988
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 2020
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 1835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 166,
                                    columnNumber: 1169
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-white mb-4",
                                            children: "My Referral Tree"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 2091
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-purple-300 mb-2",
                                                    children: "↑ Referred by"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 2185
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-xl bg-purple-600/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-lg font-bold text-white",
                                                                        children: "@DiamondMaster"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 2355
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-400",
                                                                        children: "12 tables • 156 referrals"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 2421
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 2350
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-purple-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M5 10l7-7m0 0l7 7m-7-7v18"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 2609
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 2530
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 2497
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 2299
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 2250
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 2163
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-cyan-300 mb-2",
                                                    children: "↓ My Direct Referrals (47)"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 2743
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-cyan-600/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-white",
                                                                                children: "@Alice"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 2949
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: "6 tables • 23 referrals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 2999
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 2944
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-green-400 text-sm",
                                                                        children: "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 3073
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 2893
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 2846
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-cyan-600/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-white",
                                                                                children: "@Bob"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 3240
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: "3 tables • 12 referrals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 3288
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 3235
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-green-400 text-sm",
                                                                        children: "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 3362
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 3184
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 3137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-cyan-600/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-white",
                                                                                children: "@Charlie"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 3529
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-400",
                                                                                children: "8 tables • 34 referrals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                                lineNumber: 166,
                                                                                columnNumber: 3581
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 3524
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-green-400 text-sm",
                                                                        children: "Active"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 3655
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 3473
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 3426
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-white/5 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "+ 44 more referrals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 3774
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "/referrals",
                                                                    className: "text-purple-400 text-xs hover:underline",
                                                                    children: "View All"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 3838
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 3719
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 2819
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                            lineNumber: 166,
                                            columnNumber: 2738
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                                    lineNumber: 166,
                                    columnNumber: 2051
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ScrollButtons.tsx",
                            lineNumber: 148,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ScrollButtons.tsx",
                    lineNumber: 138,
                    columnNumber: 12
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
;
function TablesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "3b462d47987257ee9a183a6bde67f6092de36fb3eefffb305abd6ed05617d9a1") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3b462d47987257ee9a183a6bde67f6092de36fb3eefffb305abd6ed05617d9a1";
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
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== tables) {
        const activeTables = tables.filter(_TablesPageTablesFilter);
        const activeTableNumbers = activeTables.map(_TablesPageActiveTablesMap);
        tables.reduce(_TablesPageTablesReduce, 0);
        t7 = "min-h-screen relative";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: _TablesPageButtonOnClick,
                className: "fixed top-4 left-4 z-[99999] px-4 py-2 bg-red-500 text-white rounded text-sm",
                children: "Reset Registration"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 187,
                columnNumber: 54
            }, this);
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollButtons"], {}, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 188,
                columnNumber: 12
            }, this);
            $[13] = t8;
            $[14] = t9;
        } else {
            t8 = $[13];
            t9 = $[14];
        }
        t5 = "container mx-auto p-4 max-w-5xl relative z-10";
        let t10;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
                children: "Matrix TON Tables"
            }, void 0, false, {
                fileName: "[project]/frontend/app/tables/page.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this);
            $[15] = t10;
        } else {
            t10 = $[15];
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
                    lineNumber: 203,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 203,
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
                        lineNumber: 215,
                        columnNumber: 58
                    }, this)
                }, tableNumber, false, {
                    fileName: "[project]/frontend/app/tables/page.tsx",
                    lineNumber: 215,
                    columnNumber: 16
                }, this);
            }
        }["TablesPage[(anonymous)()]"]);
        $[5] = tables;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[16] !== t3 || $[17] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[16] = t3;
        $[17] = t4;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t5 || $[21] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t5;
        $[21] = t6;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11 || $[24] !== t7 || $[25] !== t8 || $[26] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: [
                t8,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/tables/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t7;
        $[25] = t8;
        $[26] = t9;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    return t12;
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
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Table
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
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M3 9h18",
            key: "1pudct"
        }
    ],
    [
        "path",
        {
            d: "M3 15h18",
            key: "5xshup"
        }
    ]
];
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("table", __iconNode);
;
 //# sourceMappingURL=table.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript) <export default as Table>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/table.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
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
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TrendingUp
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
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
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
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
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

//# sourceMappingURL=frontend_828f8a78._.js.map