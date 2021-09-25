import React from "react";
import "./planty.css";
import PlantImage from '../../assets/plantImage.svg';
import { useEffect, useState } from "react";


export function DiseaseIdentifier() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  

    const classObject = require('./class_indices.json');
   // const modelObject = require('./tensorflowjs-model/model.json');
    console.log(classObject);
    // for (let i = 0; i < classObject.length; i++){
    //     console.log(classObject[i]);
    // }
    const tensorModelLoaded = async()=> {
        let status = 'Doctor is working hard to find the disease';
        model = await tf.loadLayersModel(require('../tensorflowjs-model/model.json'));
        status = 'Doctor has identified the following disease';
    }

        return (
            <section className="disease-identifier-section">
                <div className="disease-image-container">
                    <div className="disease-image-box">
                        <img className="leaf-image" src={PlantImage} alt="Plant disease image" />
                        {/* containe the uploaded image */}
                    </div>
                    <div className="upload-button-box">
                        {/* <button className="upload-button">Choose Image of crop leaf</button> */}
                        <input type="file" name="uploadImage" id="uploadImage" />
                    </div>
                </div>
                <div className="disease-result-container">
                    <div className="init-status">
                        <p className="disease">
                            <span className="disease-name">
                                {/* name of the disease is showen here  */} Disease:
                            </span>
                        </p>
                    </div>
                    <div className="disease-accuracy">
                        <div className="progress" id="progress">
                            <div className="inner">

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }


