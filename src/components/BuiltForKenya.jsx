export default function BuiltForKenya(){
  const features=[
    {icon:'💚',title:'M-Pesa Ready',desc:'Every system includes M-Pesa STK Push, Paybill, Till & C2B out of the box.'},
    {icon:'📋',title:'KRA Compliant',desc:'Tax calculations, VAT, invoicing and receipts built to Kenya Revenue Authority standards.'},
    {icon:'🏦',title:'NHIF & NSSF Payroll',desc:'Automatic deductions, remittance reports and payslips for Kenyan employees.'},
    {icon:'📶',title:'Works on 2G/3G',desc:'Optimized for slow connections. Your customers in Eldoret or Kisumu get the same experience.'},
    {icon:'🗣️',title:'Swahili Support',desc:'UI and communications in both English and Swahili for maximum reach across Kenya.'},
    {icon:'🔒',title:'Data Stays in Kenya',desc:'We deploy on servers closest to Kenya for speed, compliance and data sovereignty.'},
  ]
  return(
    <section style={{background:'#030608',padding:'96px 6%',position:'relative',zIndex:1,overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,0.04) 0%,transparent 70%)',pointerEvents:'none'}}/>
      <div className="reveal" style={{textAlign:'center',marginBottom:56,position:'relative',zIndex:1}}>
        <div style={{fontSize:48,marginBottom:16}}>🇰🇪</div>
        <div className="eyebrow" style={{justifyContent:'center'}}>Made for Kenya</div>
        <h2 className="sec-title">Built for Kenya.<br/>Not Just Adapted.</h2>
        <p className="sec-sub" style={{margin:'0 auto'}}>Most software is built for Western markets and poorly adapted for Kenya. We build for Kenya from day one.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,position:'relative',zIndex:1}} className="kenya-grid">
        {features.map((f,i)=>(
          <div key={i} className="reveal" style={{background:'rgba(14,165,233,0.04)',border:'1px solid rgba(14,165,233,0.12)',borderRadius:16,padding:'28px 24px',transition:'all 0.3s'}}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(14,165,233,0.08)';e.currentTarget.style.borderColor='rgba(14,165,233,0.3)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='rgba(14,165,233,0.04)';e.currentTarget.style.borderColor='rgba(14,165,233,0.12)'}}>
            <div style={{fontSize:32,marginBottom:14}}>{f.icon}</div>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:16,fontWeight:700,marginBottom:8,color:'#e8f4ff'}}>{f.title}</h3>
            <p style={{color:'#7a99bb',fontSize:13,lineHeight:1.7,fontWeight:300}}>{f.desc}</p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.kenya-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.kenya-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
