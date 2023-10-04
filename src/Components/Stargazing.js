import stargazer from '../img/stargazer.jpg';
import { Button, Image } from 'react-bootstrap';
function Stargazing() {

  const onNotify = () => {
    window.open("https://forms.gle/EZ15dAx455fNK5Ja7", "_blank", "noreferrer")
  }
  return (
    <div className="content">
      <div>
        <h1>Can we see the stars tonight?</h1>
        <h4>A Stargazer's Checklist</h4>
        <Image className='stargazing-checklist' roundedCircle src={stargazer} />
        <h2>Coming soon!</h2>
        <Button onClick={onNotify} style={{marginTop: "20px"}} className='button-primary'>Notify me</Button>
      </div>
    </div>
  )
}

export default Stargazing;