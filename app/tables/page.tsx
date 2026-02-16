'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { CanvasTableCard } from '@/components/tables/CanvasTableCard';
import { ScrollButtons } from '@/components/ScrollButtons';
import { MenuPanel } from '@/components/layout/MenuPanel';
import { TABLE_PRICES } from '@/lib/types';

export default function TablesPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [userTables, setUserTables] = useState<any[]>([]);
  const [matrixTables, setMatrixTables] = useState<Record<number, any>>({});
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useState<string>('');
  const [userWallet, setUserWallet] = useState<string>('');
  const [buyingTable, setBuyingTable] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('matrix_ton_grayscale');
    const value = saved === 'true' || saved === '1';
    setIsGrayscale(value);
    document.documentElement.style.filter = value ? 'grayscale(100%)' : '';
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.style.filter = isGrayscale ? 'grayscale(100%)' : '';
  }, [isGrayscale]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedId = localStorage.getItem('matrix_ton_user_id');
    if (!storedId) {
      router.replace('/register');
      return;
    }
    let cancelled = false;
    (async () => {
      const verifyRes = await fetch(`/api/auth/me?userId=${encodeURIComponent(storedId)}`);
      const verifyData = await verifyRes.json();
      if (cancelled) return;
      if (!verifyData.exists) {
        localStorage.removeItem('matrix_ton_user_id');
        router.replace('/register');
        return;
      }
      setUserId(storedId);
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
              progressIntervalRef.current = null;
            }
            return 95;
          }
          return prev + 2;
        });
      }, 50);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [loading]);

  useEffect(() => {
    const storedId = localStorage.getItem('matrix_ton_user_id');
    if (!storedId) return;
    fetch(`/api/auth/me?userId=${storedId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setUserNickname(data.user.nickname || '');
          setUserWallet(data.user.tonWallet || '');
        }
      });
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchTables = async () => {
      try {
        const [tablesRes, statusRes] = await Promise.all([
          fetch(`/api/user/tables?userId=${userId}`),
          fetch(`/api/table/status?userId=${userId}`),
        ]);
        const tablesData = await tablesRes.json();
        const statusData = await statusRes.json();
        if (tablesData.success) setUserTables(tablesData.tables);
        if (statusData.tables) {
          const map: Record<number, any> = {};
          statusData.tables.forEach((t: any) => {
            map[t.tableNumber] = t;
          });
          setMatrixTables(map);
        }
      } catch (error) {
        console.error('Failed to fetch tables:', error);
      } finally {
        setProgress(100);
        setLoading(false);
      }
    };
    fetchTables();
  }, [userId]);

  // Always show tables 1–12
  const allTableNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  const refreshTables = async () => {
    if (!userId) return;
    try {
      const [tablesRes, statusRes] = await Promise.all([
        fetch(`/api/user/tables?userId=${userId}`),
        fetch(`/api/table/status?userId=${userId}`),
      ]);
      const tablesData = await tablesRes.json();
      const statusData = await statusRes.json();
      if (tablesData.success) setUserTables(tablesData.tables);
      if (statusData.tables) {
        const map: Record<number, any> = {};
        statusData.tables.forEach((t: any) => {
          map[t.tableNumber] = t;
        });
        setMatrixTables(map);
      }
    } catch (error) {
      console.error('Failed to fetch tables:', error);
    }
  };

  const handleBuyTable = async (tableNumber: number) => {
    if (!userId) return;
    setBuyingTable(tableNumber);
    try {
      const res = await fetch('/api/table/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: parseInt(userId, 10), tableNumber }),
      });
      const data = await res.json();
      if (data.success) {
        await refreshTables();
        setToast({ msg: `Table ${tableNumber} activated!`, type: 'success' });
      } else {
        setToast({ msg: data.error ?? 'Purchase failed', type: 'error' });
      }
    } catch (e) {
      setToast({ msg: 'Transaction failed', type: 'error' });
    } finally {
      setBuyingTable(null);
    }
  };

  const toggleGrayscale = () => {
    const next = !isGrayscale;
    setIsGrayscale(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('matrix_ton_grayscale', next ? 'true' : 'false');
    }
  };

  return (
    <div className="min-h-screen relative" style={{ minHeight: '100vh' }}>
      {!loading && (
        <>
          <button
            type="button"
            onClick={toggleGrayscale}
            style={{
              position: 'fixed',
              top: '12px',
              left: '12px',
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
            {isGrayscale ? (
              <Moon size={26} style={{ color: 'rgba(168,85,247,0.9)' }} />
            ) : (
              <Sun size={26} style={{ color: 'rgba(168,85,247,0.9)' }} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            style={{
              position: 'fixed',
              top: '12px',
              right: '12px',
              zIndex: 99999,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(168,85,247,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(168,85,247,0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <span style={{ width: '28px', height: '3px', background: 'rgba(168,85,247,0.9)', borderRadius: '10px' }} />
            <span style={{ width: '28px', height: '3px', background: 'rgba(168,85,247,0.9)', borderRadius: '10px' }} />
            <span style={{ width: '28px', height: '3px', background: 'rgba(168,85,247,0.9)', borderRadius: '10px' }} />
          </button>
          <ScrollButtons />
        </>
      )}
      <div
        className="w-full relative z-10"
        style={{
          paddingTop: '70px',
          minHeight: '100vh',
        }}
      >
        <div
          className="grid grid-cols-2 pt-[90px] mb-12"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: 'fit-content',
            margin: '0 auto',
            gap: '0px',
          }}
        >
          {loading ? (
            <div
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 99999,
                paddingTop: '0',
                backgroundColor: 'transparent',
              }}
            >
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '24px', textAlign: 'center' }}>Loading tables...</p>
              <p style={{ fontSize: '1.5rem', color: 'white', marginBottom: '16px', textAlign: 'center' }}>{progress}%</p>
              <div style={{ width: '250px', height: '8px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                <div
                  style={{ width: `${progress}%`, height: '100%', backgroundColor: '#a855f7', borderRadius: '4px', transition: 'width 0.1s' }}
                />
              </div>
            </div>
          ) : (
            allTableNumbers.map((tableNumber) => {
              const userTable = userTables.find((t: any) => t.tableNumber === tableNumber);
              const isActive = !!userTable && userTable.status === 'ACTIVE';
              const price = TABLE_PRICES[tableNumber] ?? 0;
              const positions = userTable?.positions ?? [];
              const mt = matrixTables[tableNumber];
              const slotFilled = [mt?.slot1, mt?.slot2, mt?.slot3, mt?.slot4].map((s) => s != null);
              // Only pass nickname for display (never telegramUsername/telegramId)
              const toSlot = (p: any) => p ? { nickname: p.partnerNickname ?? p.nickname, filled: true } : null;
              const slots: [(any | null)?, (any | null)?, (any | null)?, (any | null)?] = [
                toSlot(positions.find((p: any) => p.position === 1) ?? null),
                toSlot(positions.find((p: any) => p.position === 2) ?? null),
                toSlot(positions.find((p: any) => p.position === 3) ?? null),
                toSlot(positions.find((p: any) => p.position === 4) ?? null),
              ];
              if (isActive && mt) {
                slots[0] = slotFilled[0] ? { filled: true } : null;
                slots[1] = slotFilled[1] ? { filled: true } : null;
                slots[2] = slotFilled[2] ? { filled: true } : null;
                slots[3] = slotFilled[3] ? { filled: true } : null;
              }
              const cycles = userTable ? (userTable.cycleNumber ?? 1) - 1 : 0;
              const prevTableActive = userTables.some((t: any) => t.tableNumber === tableNumber - 1 && t.status === 'ACTIVE');
              const isUnlocked = tableNumber === 1 || prevTableActive;
              const statusBuy = isUnlocked && !isActive;
              const isBuying = buyingTable === tableNumber;

              return (
                <div key={tableNumber} style={{ width: '44vw' }}>
                  <CanvasTableCard
                    tableNumber={tableNumber}
                    price={price}
                    cycles={cycles}
                    slots={slots}
                    isActive={isActive}
                    isUnlocked={isUnlocked}
                    onBuy={() => handleBuyTable(tableNumber)}
                  />
                  {isActive && (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center', marginTop: 6 }}>
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: slotFilled[i] ? '#a855f7' : 'transparent',
                            border: '1px solid',
                            borderColor: slotFilled[i] ? '#a855f7' : '#6b7280',
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {statusBuy && (
                    <button
                      type="button"
                      onClick={() => handleBuyTable(tableNumber)}
                      disabled={isBuying}
                      style={{
                        background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                        color: 'white',
                        fontWeight: 700,
                        borderRadius: 8,
                        padding: '8px 16px',
                        width: '100%',
                        marginTop: 8,
                        cursor: isBuying ? 'not-allowed' : 'pointer',
                        border: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      {isBuying ? 'Processing...' : `BUY • ${price} TON`}
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {toast && (
        <div
          role="alert"
          style={{
            position: 'fixed',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 999999,
            background: toast.type === 'success' ? '#22c55e' : '#ef4444',
            color: 'white',
            borderRadius: 12,
            padding: '12px 24px',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
}
