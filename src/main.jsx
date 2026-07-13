import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Bot, Boxes, ChartNoAxesCombined, CheckCircle2, Cpu, DatabaseZap, LockKeyhole, Rocket, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';
import BorderGlow from './BorderGlow.jsx';
import LogoLoop from './LogoLoop.jsx';
import SoftAurora from './SoftAurora.jsx';
import './styles.css';

const marketRows = [
  ['BTCUSDT', '89,967.50', '-2.17%', '18.4309B'],
  ['ETHUSDT', '3,097.36', '-3.57%', '23.2643B'],
  ['SOLUSDT', '134.01', '-2.70%', '6.419B'],
  ['XTUSDT', '5.1630', '+4.24%', '895.58M'],
  ['DOGEUSDT', '0.13961', '-5.72%', '1.5194B'],
  ['ARBUSDT', '1.34', '+5.70%', '392.42M'],
  ['OPUSDT', '2.08', '+4.20%', '286.18M'],
];

const features = [
  ['Growth Graph', '把任务、凭证、社群和链上行为合并成增长图谱，让用户贡献可以被验证、追踪和激励。', ChartNoAxesCombined],
  ['Asset Launchpad', '支持积分、NFT、代币凭证和会员权益的一站式发行，内置风控、白名单和结算策略。', WalletCards],
  ['AI Agent Layer', '用自动化代理完成数据监测、用户分层、任务触发和跨协议运营，减少人工重复操作。', Bot],
];

const stack = [
  ['Proof-of-Action', '验证任务完成、交易行为、社交扩散和开发者贡献。', ShieldCheck],
  ['Unified Data Layer', '聚合链上事件、CRM 标签、积分和活动数据。', DatabaseZap],
  ['Compliance Ready', '预留风控、权限、审计和黑名单策略。', LockKeyhole],
  ['Community Portal', '将社区、活动、空投和生态任务统一到品牌入口。', Boxes],
];

const why = [
  ['安全可靠的交易平臺', '多层风控和可验证链上记录，保障用户体验可信、顺畅、安全。', ShieldCheck],
  ['一站式增长服务', '从拉新、任务、资产发行到会员权益，把运营动作组合成一套闭环。', Sparkles],
  ['生态合作夥伴', '面向 DAO、GameFi、DePIN、NFT 和 CEX 场景，快速承接外部流量。', CheckCircle2],
];

const roadmap = [
  ['01', 'Launch Mesh', '官网、任务入口、行情模块和增长卡片上线。'],
  ['02', 'Agent Network', '接入自动化数据代理、标签系统和策略触发器。'],
  ['03', 'Mainnet Growth', '开放生态合作入口，绑定真实资产和社区贡献证明。'],
];

const logos = ['DAO', 'DeFi', 'GameFi', 'NFT', 'DePIN', 'CEX', 'AI Agent', 'Launchpad'].map((title) => ({
  title,
  node: <span className="loop-logo">{title}</span>,
}));

function MarketBoard() {
  return (
    <BorderGlow className="market-board" borderRadius={22} glowRadius={34} fillOpacity={0.35}>
      <div className="market-tabs"><strong>热门合约榜</strong><span>热门榜</span></div>
      <div className="market-head"><span>币种</span><span>价格</span><span>24H涨跌幅</span><span>24H 成交量</span><span>操作</span></div>
      <div className="market-scroll">
        {[...marketRows, ...marketRows].map(([name, price, change, volume], index) => (
          <div className="market-line" key={`${name}-${index}`}>
            <span className="coin-badge">{name[0]}</span>
            <strong>{name}</strong>
            <span>{price}</span>
            <em className={change.startsWith('+') ? 'up' : 'down'}>{change}</em>
            <span>{volume}</span>
            <button type="button">交易</button>
          </div>
        ))}
      </div>
    </BorderGlow>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><span><Cpu size={18} /></span>NOVA3</a>
        <nav><a href="#products">Products</a><a href="#ecosystem">Ecosystem</a><a href="#roadmap">Roadmap</a><a href="#why">Why</a></nav>
        <a className="launch" href="#contact">Launch App <ArrowRight size={18} /></a>
      </header>

      <section className="hero" id="top">
        <SoftAurora />
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Web3 Growth & Asset Network</span>
          <h1>Build The Onchain Growth Network</h1>
          <p>NOVA3 helps Web3 teams turn identity, tasks, asset launches and AI agent automation into a verifiable growth console.</p>
          <div className="hero-actions"><a className="primary" href="#products">Start building <Rocket size={18} /></a><a className="secondary" href="#ecosystem">Explore network <ArrowRight size={18} /></a></div>
        </div>
      </section>

      <section className="market-section"><MarketBoard /></section>

      <section className="metrics-strip">
        {['2.8M+ 链上身份连接', '$940M 生态资产流转', '146 集成协议', '99.98% 节点可用性'].map((item) => <BorderGlow className="metric" key={item}>{item}</BorderGlow>)}
      </section>

      <section className="section" id="products">
        <div className="section-heading"><span className="tag">PRODUCTS</span><h2>一个面向增长、资产和自动化的 Web3 控制台。</h2><p>参考交易平台的高信任信息密度，也保留未来感官网需要的情绪张力。</p></div>
        <div className="product-grid">
          {features.map(([title, text, Icon]) => (
            <BorderGlow className="feature-card" key={title}><Icon size={34} /><h3>{title}</h3><p>{text}</p></BorderGlow>
          ))}
        </div>
      </section>

      <section className="ecosystem" id="ecosystem">
        <div className="section-heading left"><span className="tag">ECOSYSTEM</span><h2>从第一次连接钱包，到长期留存，每一步都能被证明。</h2></div>
        <div className="ecosystem-layout">
          <div className="stack-list">
            {stack.map(([title, text, Icon]) => <BorderGlow className="stack-item" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></BorderGlow>)}
          </div>
          <BorderGlow className="protocol-card"><div className="vault"><div className="coin">₿</div><div className="beam" /><div className="box"><Cpu /><strong>NOVA3 Core</strong></div><span>DAO</span><span>DeFi</span><span>NFT</span><span>GameFi</span></div></BorderGlow>
        </div>
      </section>

      <section className="why-section" id="why">
        <div className="section-heading left"><h2>为什么选择我们</h2></div>
        <div className="why-grid">{why.map(([title, text, Icon]) => <BorderGlow className="why-card" key={title}><Icon size={56} /><h3>{title}</h3><p>{text}</p></BorderGlow>)}</div>
      </section>

      <section className="section" id="roadmap">
        <div className="section-heading"><span className="tag">ROADMAP</span><h2>清晰的发布节奏，让市场知道你在持续进化。</h2></div>
        <div className="roadmap">{roadmap.map(([num, title, text]) => <BorderGlow className="roadmap-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></BorderGlow>)}</div>
      </section>

      <section className="bottom-loop"><LogoLoop logos={logos} speed={80} logoHeight={18} gap={18} fadeOut scaleOnHover /></section>

      <BorderGlow className="cta" id="contact"><span className="tag">READY FOR MAINNET</span><h2>把你的 Web3 官网变成生态增长入口。</h2><p>下一步可以替换品牌、接入真实产品数据、配置上线域名，并部署到生产环境。</p><a className="primary" href="mailto:hello@nova3.network">Request access <ArrowRight size={18} /></a></BorderGlow>

      <footer><strong>NOVA3</strong><span>Web3 Growth & Asset Network</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
