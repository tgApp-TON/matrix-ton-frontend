export default function FAQ() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px', 
      fontFamily: 'system-ui', 
      lineHeight: '1.6',
      backgroundColor: '#ffffff' as any,
      color: '#333333' as any,
      minHeight: '100vh',
      position: 'relative' as any,
      zIndex: 9999
    }}>
      <h1 style={{ color: '#0088CC' }}>Frequently Asked Questions</h1>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>What is XionTon?</h2>
      <p>XionTon is a decentralized matrix system built on the TON blockchain. It uses smart contracts to automatically manage positions and distribute funds according to predefined rules.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>How does it work?</h2>
      <p>The system operates through 12 matrix levels. When you participate, smart contracts automatically assign positions and process distributions based on the matrix structure. All operations are transparent and verifiable on the TON blockchain.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>What do I need to participate?</h2>
      <p>You need:</p>
      <ul>
        <li>A TON wallet (Tonkeeper, MyTonWallet, etc.)</li>
        <li>TON cryptocurrency for positions and blockchain fees</li>
        <li>Telegram account</li>
        <li>Understanding of blockchain and smart contracts</li>
      </ul>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>What are the costs?</h2>
      <p>Each matrix level has a different cost, starting from 10 TON for Level 1. Additional blockchain transaction fees apply for all operations.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>How do I connect my wallet?</h2>
      <p>Open the XionTon app through the Telegram bot, click "Connect Wallet", and select your TON wallet. Confirm the connection in your wallet app.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>Are transactions reversible?</h2>
      <p>No. All transactions are executed via smart contracts on the blockchain and are permanent. Always verify transaction details before confirming.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>What is the invitation program?</h2>
      <p>You can share your unique invitation link. When someone joins using your link, they are connected to your network in the matrix structure according to smart contract rules.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>How does position allocation work?</h2>
      <p>Smart contracts automatically assign positions in the matrix. If your direct positions are filled, new participants are placed in available positions elsewhere in the network (spillover mechanism).</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>Can I lose money?</h2>
      <p>Yes. Participation involves financial risk. The value of TON can fluctuate, and there is no guarantee of returns. Only participate with funds you can afford to lose.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>How do I withdraw funds?</h2>
      <p>Distributions are sent automatically to your connected TON wallet via smart contracts. You can then transfer TON from your wallet to exchanges or use it as needed.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>Is XionTon regulated?</h2>
      <p>XionTon operates as a decentralized application on the blockchain. Users are responsible for understanding and complying with their local regulations.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>What happens if I lose access to my wallet?</h2>
      <p>XionTon cannot recover lost wallets or private keys. Always backup your wallet recovery phrase and keep it secure.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>Can I participate from any country?</h2>
      <p>Availability depends on local regulations. You are responsible for ensuring participation is legal in your jurisdiction.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>How can I get support?</h2>
      <p>Contact us through the Telegram bot @XionTonBot. Use the /help command for common questions.</p>

      <h2 style={{ color: '#0088CC', marginTop: '2rem' }}>Is there a mobile app?</h2>
      <p>XionTon operates as a Telegram Mini App. Access it through the Telegram bot on any device.</p>

      <p style={{ marginTop: '3rem', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <strong>Still have questions?</strong><br/>
        Contact us via Telegram: @XionTonBot
      </p>
    </div>
  );
}
