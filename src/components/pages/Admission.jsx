import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Ad1 from '../../assets/ad1.png';
import Ad3 from '../../assets/ad3.png';
import Ad4 from '../../assets/ad4.png';
import '../styles/admission.css';

const Admission = () => {
    return (<>
        <Container id='admission'>
        <h1 className='titl'>ADMISSIONS: </h1>
            <Row>
                <Col lg='1'><img src={Ad1} alt="" /></Col>
                <Col>
                    <div className="item">
                        <h2>Dossier de candidature</h2>
                        <p>Diplômes requis :</p>
                        <ul className="disc-list">
                            <li>Licence des études fondamentales (Spécialité : SMI)</li>
                            <li>Licence des études fondamentales (Spécialité : EIR)</li>
                            <li>Licence des études fondamentales (Spécialité : SMP)</li>
                        </ul>
                    </div>
                </Col>
                <Col lg='1'><img src={Ad3} alt="" /></Col>
                <Col>
                    <div className="item">
                        <h2>Procédure de sélection </h2>
                        <p>Etude du dossier :</p>
                        <ol className="disc-list">
                            
                            <li>Mentions (Minimum Assez bien : Cas échéant).</li>
                            <li>Nombre d'années pour l'obtention de la licence .</li>
                            <li>Notes des modules d'informatique de base.</li>
                        </ol>
                    </div>
                </Col>
            </Row>

            <Row className='sec'>
                <Col lg='1'><img src={Ad4} alt="" /></Col>
                <Col>
                    <div className="item">
                        <h2>Conditions d’accès</h2>
                        <ul className="disc-list">
                            <li>Demande manuscrite</li>
                            <li>2 lettres de recommandations</li>
                            <li>Lettre de motivation</li>
                            <li>Curriculum vitae détaillé avec une photo d'identité</li>
                            <li>Copies certifiées conformes (diplômes, attestations de réussite, relevés de notes et CIN)</li>
                            <li>Attestations de stage.</li>
                        </ul>
                    </div>
                </Col>
                <Col lg='1'><img src={Ad4} alt="" /></Col>
                <Col>
                    <div className="item">
                        <h2>Pré-requis pédagogiques spécifiques :</h2>
                        <ul className="disc-list">
                            <li>Algorithmique .</li>
                            <li>Bases de données .</li>
                            <li>Structure de données.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container></>
    );
}

export default Admission;
