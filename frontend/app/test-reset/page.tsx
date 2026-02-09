'use client';

export default function TestResetPage() {
  const handleReset = () => {
    localStorage.clear();
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ zIndex: 1000, position: 'relative' }}>
      <button 
        onClick={handleReset}
        style={{
          padding: '32px 64px',
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          color: '#ffffff',
          fontSize: '32px',
          fontWeight: 'bold',
          borderRadius: '24px',
          border: '3px solid #fca5a5',
          boxShadow: '0 20px 60px rgba(239, 68, 68, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.3s',
          zIndex: 10000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 25px 80px rgba(239, 68, 68, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(239, 68, 68, 0.5)';
        }}
      >
        🔄 Reset & Test Registration
      </button>
    </div>
  );
}
