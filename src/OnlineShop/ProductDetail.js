import React from 'react';
import classes from './ProductDetail.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item,pos) => {
        const classArr = [classes.ProductPic];
        if(pos === props.currentPreviewImagePos){
            classArr.push(classes.SelectedProductPic);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionsClick(pos)} />
        );
    })
    const FeatureOptions = props.data.featureList.map((item,pos) =>{
        const classFeature = [classes.FeatureItem];
        if(pos === props.currentFeaturePos){
            classFeature.push(classes.SelectedFeature);
        }
        return(
        <button key={pos} className={classFeature.join(' ')} onClick={()=>props.onFeatureOptionsClick(pos)}>{item} </button>
        );
    })
    return (
        <div>
            <h1 className={classes.ProductTitle}><b>{props.data.title}</b></h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}><b>Select Color</b></h3>
            <div>
                {colorOptions}
                
            </div>
            <br />
            <h3 className={classes.SectionHeading}><b>Features</b></h3>
                <div>{FeatureOptions}</div>
                
            <br />
            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;