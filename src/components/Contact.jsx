const Contact = () => {
  const wrapper = {display: "flex", justifyContent:"space-between", alignItems:"center"};
  return (
    <div style={wrapper}>
      <div style={{margin:"1rem"}} ><p class="textStyle1">01 45 00 78 12</p></div>
      <div><p class="textStyle2"><div class="textStyle3">Prendre un</div><div>Rendez-Vous</div></p></div>
    </div>
  );
};

export default Contact;
