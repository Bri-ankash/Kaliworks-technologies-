export default function Industries(){
  const industries=[
    {icon:'🏫',name:'Schools & Universities',desc:'Fee management, grading, attendance, parent portals'},
    {icon:'🏥',name:'Hospitals & Clinics',desc:'Patient records, appointments, billing, prescriptions'},
    {icon:'💼',name:'Saccos & Chamas',desc:'Contributions, loans, meetings, M-Pesa integration'},
    {icon:'🛒',name:'Retail & E-Commerce',desc:'Online stores, inventory, M-Pesa checkout'},
    {icon:'🏨',name:'Hotels & Hospitality',desc:'Room booking, payments, guest management'},
    {icon:'⛪',name:'Churches & NGOs',desc:'Member records, tithes, events, SMS communications'},
    {icon:'🏘️',name:'Real Estate',desc:'Property listings, agent portals, client management'},
    {icon:'🚚',name:'Logistics & Delivery',desc:'Order tracking, fleet management, route optimization'},
    {icon:'💊',name:'Pharmacies & Chemists',desc:'Inventory, sales, prescriptions, supplier management'},
    {icon:'🎓',name:'Training & Coaching',desc:'E-learning, course management, certificates'},
    {icon:'🏗️',name:'Construction & Engineering',desc:'Project management, timesheets, supplier tracking'},
    {icon:'🌾',name:'Agriculture & Farming',desc:'Farm records, produce tracking, market connections'},
  ]
  return(
    <section style={{background:'#060b12',padding:'96px 6%',position:'relative',zIndex:1}}>
      <div className="reveal" style={{marginBottom:56}}>
        <div className="eyebrow">Industries</div>
        <h2 className="sec-title">Industries We<br/>Have Built For</h2>
        <p className="sec-sub">From small businesses to large institutions — we have experience across every major sector in Kenya.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12}} className="ind-grid">
        {industries.map((ind,i)=>(
          <div key={i} className="reveal" style={{background:'#0a1220',border:'1px solid rgba(14,165,233,0.08)',borderRadius:14,padding:'22px 18px',display:'flex',gap:14,alignItems:'flex-start',transition:'all 0.3s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(14,165,233,0.3)';e.currentTarget.style.background='#0e1928';e.currentTarget.style.transform='translateY(-3px)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(14,165,233,0.08)';e.currentTarget.style.background='#0a1220';e.currentTarget.style.transform='translateY(0)'}}>
            <span style={{fontSize:28,flexShrink:0}}>{ind.icon}</span>
            <div>
              <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:13,fontWeight:700,marginBottom:4,color:'#e8f4ff',lineHeight:1.3}}>{ind.name}</h3>
              <p style={{color:'#3a5270',fontSize:11,lineHeight:1.5,fontWeight:300}}>{ind.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:1100px){.ind-grid{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:768px){.ind-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.ind-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
