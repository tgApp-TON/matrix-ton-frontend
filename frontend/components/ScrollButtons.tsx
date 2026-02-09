'use client';

import { useState, useEffect } from 'react';
import { X, Table, Users, TrendingUp, Settings, Sun, Moon } from 'lucide-react';
import { AnimatedBackground } from '@/components/layout/AnimatedBackground';

export function ScrollButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [userStats, setUserStats] = useState({
    totalEarned: 0,
    activeTables: 0,
    directReferrals: 0, // Personal workers
    totalReferrals: 0,  // Entire tree
    totalCycles: 0
  });
  const [referralsList, setReferralsList] = useState<any[]>([]);
  const [upline, setUpline] = useState<any>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      const userId = localStorage.getItem('matrix_ton_user_id') || '1';
      
      // Fetch tables
      const tablesRes = await fetch(`/api/user/tables?userId=${userId}`);
      const tablesData = await tablesRes.json();
      
      if (tablesData.success) {
        const activeTables = tablesData.tables.filter((t: any) => t.status === 'ACTIVE').length;
        const totalCycles = tablesData.tables.reduce((sum: number, t: any) => sum + t.cycleNumber, 0);
        
        setUserStats(prev => ({
          ...prev,
          totalEarned: 0, // TODO: calculate from transactions
          activeTables,
          totalCycles
        }));
      }

      // Fetch referrals
      const referralsRes = await fetch(`/api/user/referrals?userId=${userId}`);
      const referralsData = await referralsRes.json();

      if (referralsData.success) {
        setUserStats(prev => ({
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
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <>
      {/* Theme Button - TOP LEFT */}
      <div style={{ 
        position: 'fixed', 
        top: '24px', 
        left: '24px',
        zIndex: 99999,
        width: '128px',
        height: '128px'
      }}>
        <button
          onClick={toggleTheme}
          style={{
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
          }}
        >
          {isDark ? <Sun size={48} className="text-purple-300" /> : <Moon size={48} className="text-purple-300" />}
        </button>
      </div>

      {/* Menu Button - TOP RIGHT */}
      <div 
        style={{ 
          position: 'fixed', 
          top: '24px', 
          right: '24px', 
          zIndex: 99999,
          width: '128px',
          height: '128px'
        }}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
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
          }}
        >
          {isMenuOpen ? (
            <X size={48} className="text-purple-300" />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <div 
                style={{ 
                  width: '56px',
                  height: '6px',
                  background: 'rgba(168, 85, 247, 0.9)',
                  borderRadius: '10px'
                }}
              />
              <div 
                style={{ 
                  width: '56px',
                  height: '6px',
                  background: 'rgba(168, 85, 247, 0.9)',
                  borderRadius: '10px'
                }}
              />
              <div 
                style={{ 
                  width: '56px',
                  height: '6px',
                  background: 'rgba(168, 85, 247, 0.9)',
                  borderRadius: '10px'
                }}
              />
            </div>
          )}
        </button>
      </div>

      {/* Side Menu Panel */}
      {isMenuOpen && (
        <>
          <div 
            style={{ 
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 99998
            }}
          />
          <div 
            style={{ 
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
            }}
            className="p-12 menu-text"
          >
            <AnimatedBackground />
            <div className="flex flex-col h-full relative z-10">
              {/* Header */}
              <div className="relative mb-20">
                <div>
                  <p className="text-purple-300" style={{ fontSize: '4.5rem' }}>@CryptoKing</p>
                </div>
                
                {/* Close button - matches menu button style exactly */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  style={{
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
                  }}
                >
                  <X size={48} className="text-purple-300" />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="flex flex-col gap-12 mb-20">
                <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 min-h-[200px]">
                  <div className="flex items-center justify-between">
                    <div className="text-white" style={{ fontSize: '3.75rem' }}>Total Earned</div>
                    <div className="text-white font-bold" style={{ fontSize: '6rem' }}>{userStats.totalEarned} TON</div>
                  </div>
                </div>
                
                <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 min-h-[200px]">
                  <div className="flex items-center justify-between">
                    <div className="text-white" style={{ fontSize: '3.75rem' }}>Active Tables</div>
                    <div className="text-white font-bold" style={{ fontSize: '6rem' }}>{userStats.activeTables}/12</div>
                  </div>
                </div>
                
                <div className="p-10 rounded-2xl bg-gradient-to-br from-pink-600/20 to-red-600/20 min-h-[200px]">
                  <div className="flex flex-col gap-4">
                    <div className="text-white" style={{ fontSize: '3.75rem' }}>Referrals</div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400" style={{ fontSize: '2.5rem' }}>Direct</div>
                      <div className="text-white font-bold" style={{ fontSize: '3rem' }}>{userStats.directReferrals}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400" style={{ fontSize: '2.5rem' }}>Total Tree</div>
                      <div className="text-white font-bold" style={{ fontSize: '3rem' }}>{userStats.totalReferrals}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 min-h-[200px]">
                  <div className="flex items-center justify-between">
                    <div className="text-white" style={{ fontSize: '3.75rem' }}>Total Cycles</div>
                    <div className="text-white font-bold" style={{ fontSize: '6rem' }}>{userStats.totalCycles}</div>
                  </div>
                </div>
              </div>

              {/* Referral Tree */}
              <div className="flex-1 overflow-y-auto" style={{ marginTop: '80px' }}>
                <h3 className="font-bold text-white mb-10" style={{ fontSize: '6rem' }}>
                  My Referral Tree
                </h3>
                
                {/* Upline - only show if exists (not MASTER's referral) */}
                {upline && (
                  <div className="mb-16">
                    <div className="mb-10" style={{ fontSize: '2.25rem', color: '#a78bfa' }}>
                      ↑ Referred by
                    </div>
                    <div className="p-10 rounded-2xl bg-purple-600/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white" style={{ fontSize: '3rem' }}>
                            @{upline.nickname}
                          </div>
                          <div className="text-gray-400" style={{ fontSize: '2rem', marginTop: '8px' }}>
                            {upline.activeTables} tables • {upline.referralsCount} referrals
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Your direct referrals */}
                <div>
                  <div className="mb-10" style={{ fontSize: '2.25rem', color: '#22d3ee' }}>
                    ↓ My Direct Referrals ({userStats.directReferrals})
                  </div>
                  <div className="space-y-8">
                    {referralsList.length > 0 ? (
                      referralsList.map((ref) => (
                        <div key={ref.id} className="p-10 rounded-2xl bg-cyan-600/10">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-white" style={{ fontSize: '3rem' }}>
                                @{ref.nickname}
                              </div>
                              <div className="text-gray-400" style={{ fontSize: '2rem', marginTop: '8px' }}>
                                {ref.activeTables} tables • {ref.referralsCount} referrals
                              </div>
                              <div className="text-green-400 font-bold" style={{ fontSize: '2.5rem', marginTop: '8px' }}>
                                💰 {ref.totalEarnings || 0} TON
                              </div>
                            </div>
                            <div className="text-green-400" style={{ fontSize: '2rem' }}>Active</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-10 rounded-2xl bg-white/5 text-center">
                        <div className="text-gray-400" style={{ fontSize: '2.5rem' }}>No direct referrals yet</div>
                      </div>
                    )}

                    {userStats.directReferrals > 3 && (
                      <div className="p-10 rounded-2xl bg-white/5 text-center">
                        <div className="text-gray-400" style={{ fontSize: '2.5rem' }}>
                          + {userStats.directReferrals - 3} more referrals
                        </div>
                        <button 
                          onClick={() => window.location.href = '/referrals'}
                          className="text-purple-400 hover:underline"
                          style={{ fontSize: '2rem', marginTop: '8px' }}
                        >
                          View All →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
