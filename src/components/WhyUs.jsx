export default function WhyUs(){
  const reasons=[
    {icon:'🇰🇪',title:'Built for Kenya',desc:'M-Pesa ready, NHIF/NSSF payroll, KRA compliance, Swahili support. We understand the Kenyan market inside out.'},
    {icon:'⚡',title:'Fast Delivery',desc:'No endless waiting. Simple sites in 1-2 weeks. Complex systems in 4-8 weeks. We deliver on time, every time.'},
    {icon:'💰',title:'Affordable Pricing',desc:'Agency quality at freelancer prices. Starting from KES 3,000. Flexible payment plans available for all budgets.'},
    {icon:'🔧',title:'Full Support',desc:'We don\'t disappear after launch. Every project includes free support, staff training and ongoing maintenance.'},
    {icon:'📱',title:'Mobile First',desc:'Every system we build works perfectly on any phone, any network — including slow 2G/3G connections across Kenya.'},
    {icon:'🤝',title:'Direct Communication',desc:'You talk directly to the developer building your project. No middlemen, no account managers, no confusion.'},
  ]
  return(
    <section style={{background:'#030608',padding:'96px 6%',position:'relative',zIndex:1}}>
      <div className="reveal" style={{textAlign:'center',marginBottom:56}}>
        <div className="eyebrow" style={{justifyContent:'center'}}>Why Choose Us</div>
        <h2 className="sec-title">Why Businesses Choose<br/>Kaliworks Technologies</h2>
        <p className="sec-sub" style={{margin:'0 auto'}}>We're not just developers — we're your technology partners in Kenya.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(14,165,233,0.08)'}} className="why-grid">
        {reasons.map((r,i)=>(
          <div key={i} className="reveal" style={{background:'#060b12',padding:'36px 28px',transition:'all 0.3s',position:'relative',overflow:'hidden'}}
            onMouseEnter={e=>{e.currentTarget.style.background='#0a1220'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#060b12'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,#0ea5e9,transparent)',opacity:0,transition:'opacity 0.3s'}}
              onMouseEnter={e=>e.target.style.opacity=1}
              onMouseLeave={e=>e.target.style.opacity=0}/>
            <div style={{fontSize:36,marginBottom:16}}>{r.icon}</div>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:17,fontWeight:700,marginBottom:10,color:'#e8f4ff'}}>{r.title}</h3>
            <p style={{color:'#7a99bb',fontSize:13,lineHeight:1.75,fontWeight:300}}>{r.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.why-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
