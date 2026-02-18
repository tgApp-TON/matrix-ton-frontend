'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface StatsData {
  user: {
    nickname: string;
    registeredAt: string;
  };
  allTime: {
    invested: number;
    earned: number;
    referrals: number;
    activeTables: number;
  };
  last30Days: {
    invested: number;
    earned: number;
    referrals: number;
  };
}

export default function StatsPage() {
  const router = useRouter();
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const userId = localStorage.getItem('matrix_ton_user_id');
        if (!userId) {
          router.push('/register');
          return;
        }

        const response = await fetch(`/api/stats?userId=${userId}`);
        const data = await response.json();

        if (data.error) throw new Error(data.error);

        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [router]);

  const allTimeProfit = stats ? stats.allTime.earned - stats.allTime.invested : 0;
  const last30Profit = stats ? stats.last30Days.earned - stats.last30Days.invested : 0;

  return (
    <div className="min-h-screen relative" style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      {!loading && (
        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          style={{
            position: 'fixed',
            top: 'calc(52px + env(safe-area-inset-top, 0px))',
            right: '12px',
            zIndex: 99999,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(168,85,247,0.2)',
            border: '1px solid rgba(168,85,247,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={26} style={{ color: 'rgba(168,85,247,0.9)' }} />
        </button>
      )}
      <div
        className="w-full relative z-10 overflow-y-auto"
        style={{
          paddingTop: '70px',
          minHeight: '100vh',
          paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <div className="max-w-md mx-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-white text-base">Загрузка...</p>
            </div>
          ) : !stats ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-white text-base">Ошибка загрузки статистики</p>
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold text-white mb-1">Статистика</h1>
              <p className="text-white/70 text-xs">{stats.user.nickname}</p>
              <p className="text-white/70 text-xs mb-4">
                Регистрация: {new Date(stats.user.registeredAt).toLocaleDateString('ru-RU')}
              </p>

              {/* За всё время */}
              <div className="bg-white/5 rounded-xl p-4 mb-3">
                <h2 className="text-lg font-semibold text-white mb-3">За всё время</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-xs mb-0.5">Потрачено</div>
                    <div className="text-white font-semibold text-base">
                      {stats.allTime.invested.toFixed(2)} <span className="text-white text-sm">TON</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-xs mb-0.5">Заработано</div>
                    <div className="text-white font-semibold text-base">
                      {stats.allTime.earned.toFixed(2)} <span className="text-white text-sm">TON</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-xs mb-0.5">Рефералов</div>
                    <div className="text-white font-semibold text-base">{stats.allTime.referrals}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-xs mb-0.5">Столов</div>
                    <div className="text-white font-semibold text-base">{stats.allTime.activeTables}/12</div>
                  </div>
                </div>
                <div className="mt-3 pt-3">
                  <div className="text-white/70 text-xs mb-0.5">Чистая прибыль</div>
                  <div
                    className={`text-xl font-bold ${allTimeProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {(allTimeProfit >= 0 ? '+' : '') + allTimeProfit.toFixed(2)} TON
                  </div>
                </div>
              </div>

              {/* За 30 дней */}
              <div className="bg-white/5 rounded-xl p-4">
                <h2 className="text-lg font-semibold text-white mb-3">За последние 30 дней</h2>
                <div className="space-y-2">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-xs">Потрачено</span>
                      <span className="text-white font-semibold text-base">{stats.last30Days.invested.toFixed(2)} TON</span>
                    </div>
                    <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500/80 rounded-full"
                        style={{
                          width: `${Math.min(100, (stats.last30Days.invested / Math.max(stats.allTime.invested, 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-xs">Заработано</span>
                      <span className="text-white font-semibold text-base">{stats.last30Days.earned.toFixed(2)} TON</span>
                    </div>
                    <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500/80 rounded-full"
                        style={{
                          width: `${Math.min(100, (stats.last30Days.earned / Math.max(stats.allTime.earned, 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-xs">Новых рефералов</span>
                      <span className="text-white font-semibold text-base">{stats.last30Days.referrals}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500/80 rounded-full"
                        style={{
                          width: `${Math.min(100, (stats.last30Days.referrals / Math.max(stats.allTime.referrals, 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3">
                  <div className="text-white/70 text-xs mb-0.5">Чистая прибыль за месяц</div>
                  <div
                    className={`text-xl font-bold ${last30Profit >= 0 ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {(last30Profit >= 0 ? '+' : '') + last30Profit.toFixed(2)} TON
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
