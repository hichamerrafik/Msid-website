import React from 'react'
import '../styles/about.css'
import { Container, Row, Col } from 'reactstrap';
import Img11 from '../../assets/tt.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img6 from '../../assets/img6.png'
import Ziti from '../../assets/ziti.png'


const About = () => {
  return (
    <>
            <h1 className='tit'>About-us</h1>
            <h2 className='ti'>Master Sciences et Ingénieurie de données</h2>
            <div className="text">
                <Container>
                    <p></p>
            <p>Dans la continuité de la licence d'excellence « Électronique, Informatique et Robotique », la Fondation Lalla 
            Asmaa pour les enfants sourds et la Faculté des Sciences de Rabat, ont convenu de mettre en œuvre une
            formation en Master Ingénierie de données.</p>
            <p>Pour cela, le Master « Ingénierie de Données et Développement Logiciel » a été modifié dans ce sens, en programmant des modules orientés métiers tels 
                que la Robotique industrielle,la vision numérique, les capteurs de perception ou le module entreprises virtuelles. </p>
            </Container>
            <img src={Img11} alt="" />
            </div>
            <Container>
                <div className="coll d-flex ">
                    <Col lg='1'>
                    <img src={Img3} alt="" className='now'/>
                    <img src={Img4} alt="" className='now'/>
                    <img src={Img5} alt="" className='now'/>
                    <img src={Img6} alt="" className='now'/>
                    </Col>
                    
                    <Col>
                    <div className="er">
                        <p>Cette formation prépare les étudiants, de la formation de licence, à s'intégrer dans un environnement en perpétuelle évolution technologique. </p>
                        <p>L'objectif de ce Master repose sur le développement d'outils informatiques permettant le traitement et le stockage des données. Un volume sans cesse grandissant de données est produit quotidiennement par de nombreuses industries (l'énergie, les systèmes de transport, la santé, le tourisme et les systèmes robotisés, etc.) et entretenu par l'essor de nouvelles technologies multimédia ou issues de l'Internet des Objets. Les enjeux entourant la maîtrise de ces données et
                            leur utilisation sont énormes et nécessitent un niveau d'expertise très élevé avec des compétences de pointe dans des domaines transversaux.</p>
                    </div>
                    </Col>
                    
                </div>
                </Container>
                
                <h1 className='tit mt-5'>OUR PROFESSORS</h1>
                <Row>
                    <Col>
                <div className="teachers">
                    <img src={Ziti} alt="" className='ziti' />
                </div>
                    </Col>
                    <Col lg='3' className='ww'>
                    <div className="names">
                    <h2>DR.ZITI Soumia</h2>
                    <p>Coordonateur du Master Sciences et Ingénierie de données</p>
                    </div>
                    </Col>
                </Row>
            
            

    </>
  )
}

export default About