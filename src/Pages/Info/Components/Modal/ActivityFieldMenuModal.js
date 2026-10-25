import React, { useRef } from 'react'
import Activity_Field_Menu from '../Inputs/Activity_Field_Menu';
import Modal from 'react-overlays/Modal';
import './ModalStyle.css';
import ModalCloser from '../../../../PersonalFunction/ModalCloser';
import StartSection from '../../../Auth/Components/StartSection';
import { useAppContext } from '../../../../Context/AppContext';

function ActivityFieldMenuModal(props) {
    const ModalRef = useRef();
    const { Activity_Field_Menu_Context, setActivity_Field_Menu_Context } = useAppContext();
    const PrevActivity_Field_Menu_Context = useRef(Activity_Field_Menu_Context)

    return (
        <>
            <Modal
                className="modal"
                show={true}
                onClick={(event) => [ModalCloser(ModalRef, props.setActivity_Field_Menu_Show, event), event.stopPropagation()]}
            >
                <div className="modalcontainer3 F_Style" ref={ModalRef}>

                    <div className='modal-content2'>

                        <StartSection
                            closeicon={true}
                            onCloseIconClick={() => [ props.setActivity_Field_Menu_Show(false), setActivity_Field_Menu_Context(PrevActivity_Field_Menu_Context.current)]}
                            EnableLogoRightSide={true}
                        />

                        <Activity_Field_Menu setActivity_Field_Menu_Show={props.setActivity_Field_Menu_Show} />

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ActivityFieldMenuModal