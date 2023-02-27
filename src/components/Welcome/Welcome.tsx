import {useState} from 'react';
import {Wrapper, Title, AgeVerification, StyledModal} from './Welcome.styled';
import Beer from "../UI/Beer/Beer";
import DataTable from '../DataTable/DataTable';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Welcome = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNoClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleYesClick = () => {
        setIsVerified(true);
    };

    return (
        <Wrapper>
            <Beer/>
            <Title className="sign">
                <span className="fast-flicker">cr</span>azy&nbsp;
                <span className="flicker">bee</span>rs
            </Title>

            {isVerified ? (
                <DataTable/>
            ) : (
                <AgeVerification>
                    <h3>Are you over 18?</h3>
                    <p>To visit our website, you must be of legal drinking age.</p>
                    <Link to="/datatable">
                        <button onClick={handleYesClick}>Yes</button>
                    </Link>
                    <button onClick={handleNoClick}>No</button>
                </AgeVerification>
            )}

            {/* Modal */}
            <StyledModal isOpen={isModalOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={false}>
                <h2>You need to be at least 18 to visit our website.</h2>
                <button onClick={closeModal}>Back</button>
            </StyledModal>
        </Wrapper>
    );
};

export default Welcome;
