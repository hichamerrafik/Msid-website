import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img6 from '../../assets/img6.png'
import '../styles/title-section.css'
const TitleSection = () => {
return (
    <section>
            <Row>
            <Col lg='6' md='6'>
                <div className="title">
                    <h2>faculté des sciences rabat</h2>
                </div>
            </Col>
            <Col lg='6'>
                <div className="img1div">
                <img src={Img1} className=' img1' />
                </div>
            </Col>
            </Row>
            <Row >
                <Col lg='9'>
                    <div className="boss">
                        <h1>Master en Sciences <br /> 
                            Et Ingénieurie de données</h1>
                            <p>De la théorie à la pratique : Données en action, innovation en réaction . <br />
                        MSID , Là Où la logique des étudiants rencontre leur créativité  ! </p>
                    </div>
                
                </Col>
                <Col>
                <div className='img2div'>
                <img src={Img2} className='img2' /></div>
                </Col>
            </Row>
            <Row>
                <div className="cards ">
                    <div className="ss d-flex"><div className="x"></div>
                <h1>MSID : ENGAGEMENT VERS L'EXCELLENCE</h1>
                    <div className="y"></div></div>
                    
                <div class=" d-flex">
                    <div class="card-content d-flex gap-4 ">
                        <div class="content">
                        <img src={Img3} alt="" />
                        <h1>Inclusivité</h1>
                    <p> la diversité est notre force. 
                        Nous accueillons et célébrons toutes les voix, y compris celles des étudiants sourds, pour construire un avenir des données inclusif.</p>
                        </div>  
                        <div class="content">
                        <img src={Img4} alt="" />
                        <h1>Innovation</h1>
                        <p>Au cœur de notre programme de sciences des données, nous explorons de nouvelles idées et repoussons les frontières de la technologie.</p>
                        </div>
                        <div class="content">
                        <img src={Img5} alt="" />
                        <h1>Adaptabilité</h1>
                    <p>Face à l'évolution rapide du monde des données, nous formons des professionnels capables de s'adapter et d'innover constamment.</p>
                        </div>
                        <div class="content">
                        <img src={Img6} alt="" />
                        <h1>Collaboration</h1>
                        <p>Ensemble, nous formons une communauté d'apprentissage où les idées fusionnent,
                            les compétences se complètent et chacun contribue à l'épanouissement collectif.</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </Row>

        
    </section>
)
}

export default TitleSection