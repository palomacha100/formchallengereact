import './footer.scss'

const Footer = ({id, type, htmlFor, label, idSubmit, value, typeButton}) => {
   return (
      <footer classname="footer">
         <div classname="footerGroup1">
            <input id={id} type={type} />
            <label htmlFor={htmlFor}>{label}</label>
         </div>
         <div classname="footerGroup2">
            <input id={idSubmit} value={value} type={typeButton} />
         </div>
      </footer>
   )
}

export default Footer;



