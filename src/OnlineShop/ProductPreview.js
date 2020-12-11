import React from 'react';
import classes from './ProductPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className={classes.ProductPreview}>
            <img
                src={props.currentPreviewImage}
                width="500"
                height="500"
            />
            {
                props.ShowHeartbeatSection ? 
                <div className={classes.HeartBeatSection}>
                    <span><FontAwesomeIcon icon={faHeartbeat} /></span>
                    <p>78</p>
                </div>
                :
                <div className={classes.TimeSection}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
            }            
        </div>
    );
}

export default ProductPreview;